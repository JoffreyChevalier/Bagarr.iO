export default function FinalizeTournament({
  players,
  onDeleteClick,
  onClick,
}) {
  return (
    <div>
      <h1 className="text-center mb-4 font-title_font text-3xl">🏆 Récap 🏆</h1>
      <div className=" flex justify-center mb-6">
        <button
          type="button"
          className="my-8 bg-first_color text-white font-standard_font text-xl py-2 px-4 rounded-full hover:bg-first_color_d hover:scale-105 hover:drop-shadow-lg active:scale-100"
          onClick={onClick}
        >
          Rajouter un joueur
        </button>
      </div>
      <div className="flex justify-center flex-wrap gap-x-10">
        {players.map((player, index) => (
          <div key={index} className="flex flex-col items-center py-2">
            <img
              src={player.misc}
              alt={`${player.name}`}
              width="80"
              height="80"
            />
            <div>
              <p className="text-md font-bold">{player.name}</p>
            </div>
            <button
              type="button"
              title="Supprimer le joueur"
              className="relative left-5 bottom-28 ml-2 bg-red-700 text-white font-standard_font text-sm px-2 rounded-full hover:bg-red-800 hover:scale-110 hover:drop-shadow-lg active:scale-100"
              onClick={() => onDeleteClick(player)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
