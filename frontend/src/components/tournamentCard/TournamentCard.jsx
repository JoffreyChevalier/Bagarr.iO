import { postScore } from "@services/api";
import { useState } from "react";
import PlayerCard from "./PlayerCard";

function TournamentCard({ matchIndex, match, players, onFinished }) {
  const [score1, setScore1] = useState(
    match.scores_csv ? match.scores_csv.split("-")[0] : ""
  );
  const [score2, setScore2] = useState(
    match.scores_csv ? match.scores_csv.split("-")[1] : ""
  );

  async function onSubmitScores() {
    const winner = players[score1 > score2 ? 0 : 1];

    await postScore(
      match.tournament_id,
      match.id,
      `${score1}-${score2}`,
      winner.participant.id
    );

    onFinished();
  }

  return (
    <div className="m-8">
      <h1 className="font-title_font mb-10 text-xl">Match {matchIndex}</h1>
      <div className="flex items-center">
        <div className="border border-gray-300 px-4 rounded-xl">
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
          className="bg-first_color rounded-full text-white px-4 py-1 text-sm font-standard_font hover:bg-second_color"
          onClick={() => {
            onSubmitScores();
          }}
        >
          Match fini
        </button>
      </div>
    </div>
  );
}

export default TournamentCard;
