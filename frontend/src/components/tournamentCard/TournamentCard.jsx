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
      <button
        type="button"
        className="button focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-[#BA8208] rounded text-white px-8 py-2 text-sm"
        onClick={() => {
          "cool";
        }}
      >
        match fini
      </button>
    </div>
  );
}

export default TournamentCard;
