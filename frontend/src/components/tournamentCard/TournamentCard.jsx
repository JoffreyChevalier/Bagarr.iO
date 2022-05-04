import PlayerCard from "./PlayerCard";
import SetScoreButton from "./SetScoreButton";

function TournamentCard({ matchIndex, players }) {
  //  console.log(players);
  return (
    <div className="mt-8">
      <h1 className="mainTitle">Match {matchIndex}</h1>
      <div className="flex-column m-0 p-4 pb-0 border border-gray-100 shadow-xl rounded-xl m-4">
        <div className="flex content-center">
          <div className="flex-column m-0">
            <PlayerCard
              playerName={players[0].participant.name}
              playerImg={players[0].participant.misc}
            />
            <PlayerCard
              playerName={players[1].participant.name}
              playerImg={players[1].participant.misc}
            />
          </div>
          <div className="flex items-center">
            <SetScoreButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournamentCard;
