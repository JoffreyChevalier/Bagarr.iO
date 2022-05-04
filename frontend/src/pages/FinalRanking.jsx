import Container from "@components/Container";
import FinalRankingCard from "@components/ranking/FinalRankingCard";
import TButton from "@components/TButton";
import { getParticipants } from "@services/api";
import { useState, useEffect } from "react";

// il faudra mettre dans les props de la fonction, le tournoi
function FinalRanking({ tournament }) {
  const [tournamentParticipants, setTournamentParticipants] = useState();

  useEffect(() => {
    const fetchTournamentsParticipants = async () => {
      // pour l'instant id en dur tant que creation d'un tournoi non fini
      const response = await getParticipants(tournament.id);
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
        <div>
          <div className="flex justify-center align-item mt-8">
            <FinalRankingCard
              avatarImg={`${tournamentParticipants[0].participant.misc}`}
              playerName={`${tournamentParticipants[0].participant.display_name}`}
              medalImg="../../src/assets/gold-medal.png"
              points="1 er"
            />
          </div>

          <div className="flex justify-between">
            <FinalRankingCard
              avatarImg={`${tournamentParticipants[1].participant.misc}`}
              playerName={`${tournamentParticipants[1].participant.display_name}`}
              medalImg="../../src/assets/silver-medal.png"
              points="2 ème"
            />

            <FinalRankingCard
              avatarImg={`${tournamentParticipants[2].participant.misc}`}
              playerName={`${tournamentParticipants[2].participant.display_name}`}
              medalImg="../../src/assets/bronze-medal.png"
              points="3 ème"
            />
          </div>
        </div>

        <div>
          <div className="w-full h-12 border-t" />
          <h5 className="text-[#9A373F] font-bold text-xl pb-8">Classement</h5>
          <ul>
            {tournamentParticipants
              .slice(3, tournamentParticipants.length)
              .map((participant) => (
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
    <div className="font-standard_font h-full w-full">Loading</div>
  );
}

export default FinalRanking;
