import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Container from "@components/Container";
import FinalRankingCard from "@components/ranking/FinalRankingCard";
import TButton from "@components/TButton";
import { getParticipants } from "@services/api";
import Confetti from "@components/Confetti";

import goldMedal from "@assets/gold-medal.png";
import silverMedal from "@assets/silver-medal.png";
import bronzeMedal from "@assets/bronze-medal.png";
import Loader from "@components/layouts/Loader";

// il faudra mettre dans les props de la fonction, le tournoi
function FinalRanking() {
  const { tournamentId } = useParams();
  const [tournamentParticipants, setTournamentParticipants] = useState();

  useEffect(() => {
    const fetchTournamentsParticipants = async () => {
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

  return tournamentParticipants && tournamentParticipants.length ? (
    <Container>
      <div className="flex flex-col gap-y-12">
        <Confetti numberOfPieces={500} recycle={false} />

        <div>
          <div className="flex justify-center align-item mt-8">
            <FinalRankingCard
              avatarImg={`${tournamentParticipants[0].participant.misc}`}
              playerName={`${tournamentParticipants[0].participant.display_name}`}
              medalImg={goldMedal}
              points="1 er"
            />
          </div>

          <div className="flex justify-between">
            <FinalRankingCard
              avatarImg={`${tournamentParticipants[1].participant.misc}`}
              playerName={`${tournamentParticipants[1].participant.display_name}`}
              medalImg={silverMedal}
              points="2 ème"
            />

            <FinalRankingCard
              avatarImg={`${tournamentParticipants[2].participant.misc}`}
              playerName={`${tournamentParticipants[2].participant.display_name}`}
              medalImg={bronzeMedal}
              points="3 ème"
            />
          </div>
        </div>

        <div>
          <div className="w-full h-12 border-t" />
          <h5 className="text-[#9A373F] font-bold text-xl pb-8">Classement</h5>
          <ul>
            {tournamentParticipants.slice(3).map((participant) => (
              <li
                key={participant.participant.display_name}
                className="flex flex-row justify-between font-standard_font text-xl font-bold"
              >
                <p>{participant.participant.display_name}</p>
                <p>{participant.participant.final_rank} ème</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-y-5 w-full items-center pb-12">
          <TButton
            variant="secondary"
            buttonClass="text-[##FFFFFF] h-16 w-48 text-xl"
          >
            FIN
          </TButton>

          <TButton
            variant="secondary"
            buttonClass="text-[##FFFFFF] h-16 w-48 text-xl"
          >
            Rejouer cette partie
          </TButton>
        </div>
      </div>
    </Container>
  ) : (
    <Loader />
  );
}

export default FinalRanking;
