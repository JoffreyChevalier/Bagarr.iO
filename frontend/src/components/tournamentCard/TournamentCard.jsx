import { postScore } from "@services/api";
import { useState } from "react";
import PlayerCard from "./PlayerCard";

function TournamentCard({ matchIndex, match, players, onFinished }) {
  // N'affiche rien par défaut si aucun score, sinon affiche le score du joueur
  const [score1, setScore1] = useState(
    match.scores_csv ? match.scores_csv.split("-")[0] : ""
  );
  const [score2, setScore2] = useState(
    match.scores_csv ? match.scores_csv.split("-")[1] : ""
  );

  // Si le score du joueur 1 > joueur alors le joueur 1 est le gagnant, sinon c'est le 2
  async function onSubmitScores() {
    const winner = players[score1 > score2 ? 0 : 1];

    // On envoie le score à l'api
    await postScore(
      match.tournament_id,
      match.id,
      `${score1}-${score2}`,
      winner.participant.id
    );

    // On appelle l'api pour recevoir les infos du tournoi et les matchs
    onFinished();
  }

  return (
    <div className="m-8">
      <h1 className="font-standard_font mb-10 font-bold text-3xl">
        Match {matchIndex}
      </h1>
      <div className="flex flex-col items-center">
        <div className="border border-gray-300 px-8 rounded-xl ">
          <PlayerCard
            onChangeScore={setScore1}
            score={score1}
            playerName={players[0].participant.name}
            playerImg={players[0].participant.misc}
          />
          <p className="flex justify-center items-center relative -right-12 -my-10 font-title_font text-6xl">
            V.S.
          </p>
          <PlayerCard
            onChangeScore={setScore2}
            score={score2}
            playerName={players[1].participant.name}
            playerImg={players[1].participant.misc}
          />
        </div>
        <button
          type="button"
          className="relative bottom-6 bg-third_color rounded-full text-white drop-shadow-md h-12 px-4 py-1 text-md font-standard_font hover:bg-second_color hover:scale-105 active:scale-100"
          onClick={() => {
            onSubmitScores();
          }}
        >
          Match Fini
        </button>
      </div>
    </div>
  );
}

export default TournamentCard;
