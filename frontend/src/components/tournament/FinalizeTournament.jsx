export default function FinalizeTournament({
  players,
  onDeleteClick,
  onClick,
}) {
  return (
    <div>
      <h1 className="text-center mb-8">Récapitulatif du tournoi</h1>
      <h2 className="text-start mb-8">Liste des joueurs :</h2>
      <div className="flex flex-col items-center">
        {players.map((player) => (
          <div
            key={player.id}
            className="w-4/5 flex items-center justify-between px-8 py-2"
          >
            <img
              className="mr-4"
              src={player.misc}
              alt={`${player.name}`}
              width="50"
              height="50"
            />
            <div>
              <p className="text-sm">{player.name}</p>
            </div>
            <button
              className="p-4 ml-8 items-center py-1 px-1 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#9A373F] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              type="button"
              onClick={() => onDeleteClick(player)}
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          className="mt-8 addPlayerButton flex items-center justify-center border border-transparent shadow-sm text-xl leading-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-2 rounded-full bg-[#9A373F] border-[#808080]"
          onClick={onClick}
        >
          +
        </button>
      </div>
    </div>
  );
}
