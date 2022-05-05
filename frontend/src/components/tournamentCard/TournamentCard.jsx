import PlayerCard from "./PlayerCard";

function TournamentCard({ matchIndex, players }) {
  //  console.log(players);
  return (
    <div className="m-8">
      <h1 className="font-title_font mb-10 text-xl">Match {matchIndex}</h1>
      <div className="flex items-center">
        <div className="border border-gray-300 px-4 rounded-xl">
          <PlayerCard
            playerName={players[0].participant.name}
            playerImg={players[0].participant.misc}
          />
          <p className="flex justify-center items-center relative -right-12 -my-10 font-title_font text-6xl">
            V.S.
          </p>
          <PlayerCard
            playerName={players[1].participant.name}
            playerImg={players[1].participant.misc}
          />
        </div>
        <button
          type="button"
          className="bg-first_color rounded-full text-white px-4 py-1 text-sm font-standard_font hover:bg-second_color"
          onClick={() => {
            "cool";
          }}
        >
          Match fini
        </button>
      </div>
    </div>
  );
}

export default TournamentCard;
