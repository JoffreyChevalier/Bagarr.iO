import PlayerCard from "./PlayerCard";

function TournamentCard({ matchIndex, players }) {
  //  console.log(players);
  return (
    <div>
      <div className="mt-8">
        <h1 className="mainTitle">Match {matchIndex}</h1>
        <PlayerCard
          playerName={players[0].participant.name}
          playerImg={players[0].participant.misc}
        />
        <PlayerCard
          playerName={players[1].participant.name}
          playerImg={players[1].participant.misc}
        />
      </div>
    </div>
  );
}

export default TournamentCard;
