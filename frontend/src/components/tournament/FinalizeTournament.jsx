export default function FinalizeTournament({
  players,
  onDeleteClick,
  onClick,
}) {
  return (
    <div>
      <h1 className="text-center mb-12 font-title_font text-4xl">
        Le Récap ✅
      </h1>
      <h2 className="text-start font-standard_font text-xl mb-2">
        Liste des joueurs :
      </h2>
      <div className="flex flex-col items-center justify-center">
        {players.map((player) => (
          <div key={player.id} className="flex items-end py-2">
            <img
              className="mr-4"
              src={player.misc}
              alt={`${player.name}`}
              width="80"
              height="80"
            />
            <div>
              <p className="text-md font-bold">{player.name}</p>
            </div>
            <button
              className="p-4 ml-8 flex-end items-center py-1 px-1 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#9A373F] hover:text-[#9A373F] hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="button"
              onClick={() => onDeleteClick(player)}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
      <div className=" flex justify-center">
        <button
          type="button"
          className="mt-8 bg-first_color hover:bg-second_color text-white font-standard_font text-xl py-2 px-4 rounded-full"
          onClick={onClick}
        >
          Ajouter retardataire
        </button>
      </div>
    </div>
  );
}
