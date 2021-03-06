import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Container from "@components/ranking/Container";
import FinalRankingCard from "@components/ranking/FinalRankingCard";
import TButton from "@components/TButton";
import {
  getParticipants,
  tournamentReinitialized,
  startTournament,
} from "@services/api";
import Confetti from "@components/Confetti";

import goldMedal from "@assets/gold-medal.png";
import silverMedal from "@assets/silver-medal.png";
import bronzeMedal from "@assets/bronze-medal.png";
import Loader from "@components/layouts/Loader";

// il faudra mettre dans les props de la fonction, le tournoi
function FinalRanking({ updateFullScreen }) {
  const navigate = useNavigate();
  const { tournamentId } = useParams();
  const [tournamentParticipants, setTournamentParticipants] = useState();
  const [animateCardLeft, setAnimateCardLeft] = useState(
    "lg:translate-x-[100%] lg:translate-y-0"
  );
  const [animateCardRight, setAnimateCardRight] = useState(
    "lg:-translate-x-[100%] lg:translate-y-0"
  );

  useEffect(() => {
    const fetchTournamentsParticipants = async () => {
      updateFullScreen(false);

      setTimeout(() => {
        setAnimateCardLeft(
          "lg:translate-x-8 transition-transform duration-1000 lg:translate-y-4"
        );
        setAnimateCardRight(
          "lg:-translate-x-8 transition-transform duration-1000 lg:translate-y-4"
        );
      }, 2000);

      // pour l'instant id en dur tant que creation d'un tournoi non fini
      const response = await getParticipants({ id: tournamentId });

      // sort permet de trier le tableau dans l'ordre des final rank
      const rankings = response.sort(
        (a, b) => a.participant.final_rank - b.participant.final_rank
      );

      setTournamentParticipants(rankings);
    };

    fetchTournamentsParticipants();
  }, []);

  async function playAgain() {
    await tournamentReinitialized({ id: tournamentId });
    await startTournament({ id: tournamentId });
    // navigate(`/creer-un-tournoi?replay`);
    navigate(`/tournois/${tournamentId}/matchs?replay`);
  }

  return tournamentParticipants && tournamentParticipants.length ? (
    <Container>
      <div className="flex flex-col gap-y-12 pt-20 h-full">
        <Confetti numberOfPieces={500} recycle={false} />

        <div className="grid grid-cols-1 lg:grid-cols-10 grid-rows-1 gap-y-8 ">
          <div
            className={`lg:col-span-3 transform bg-[url('./assets/background_image.jpg')]  ${animateCardLeft}`}
          >
            <FinalRankingCard
              avatarImg={`${tournamentParticipants[1].participant.misc}`}
              playerName={`${tournamentParticipants[1].participant.display_name}`}
              medalImg={silverMedal}
              points="2 ??me"
            />
          </div>

          <div className="lg:col-span-4 z-10 bg-[url('./assets/background_image_gold.jpg')] row-start-1 lg:row-auto">
            <FinalRankingCard
              avatarImg={`${tournamentParticipants[0].participant.misc}`}
              playerName={`${tournamentParticipants[0].participant.display_name}`}
              medalImg={goldMedal}
              points="1 er"
            />
          </div>

          {tournamentParticipants.length > 2 && (
            <div
              className={`lg:col-span-3 transform bg-[url('./assets/background_image_bronze.jpg')] ${animateCardRight}`}
            >
              <FinalRankingCard
                avatarImg={`${tournamentParticipants[2].participant.misc}`}
                playerName={`${tournamentParticipants[2].participant.display_name}`}
                medalImg={bronzeMedal}
                points="3 ??me"
              />
            </div>
          )}
        </div>

        {tournamentParticipants.length > 3 && (
          <div>
            <div className="w-full h-12 border-t" />
            <h5 className="text-[#9A373F] text-center font-bold text-xl pb-8">
              Classement
            </h5>
            <ul>
              {tournamentParticipants.slice(3).map((participant) => (
                <li
                  key={participant.participant.display_name}
                  className="flex flex-row justify-between font-standard_font text-xl font-bold m-auto sm:w-1/2 w-full"
                >
                  <p>{participant.participant.display_name}</p>
                  <p>{participant.participant.final_rank} ??me</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col gap-y-5 w-full items-center pb-12">
          <a href="/">
            <TButton
              variant="secondary"
              buttonClass="text-[##FFFFFF] h-16 w-48 text-xl"
            >
              FIN
            </TButton>
          </a>

          <TButton
            onClick={playAgain}
            variant="secondary"
            buttonClass="text-[##FFFFFF] h-16 w-48 text-xl"
          >
            Rejouer cette partie
          </TButton>
        </div>
      </div>
    </Container>
  ) : (
    <div className="w-48">
      <Loader />
    </div>
  );
}

export default FinalRanking;
