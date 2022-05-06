export default function FinalizeTournament({
  players,
  onDeleteClick,
  onClick,
}) {
  return (
    <div>
      <h1 className="text-center mb-12 font-title_font text-2xl">
        🏆 Récap 🏆
      </h1>
      <h2 className="font-standard_font text-xl mb-2">Liste des joueurs :</h2>
      <div className=" flex justify-center mb-6">
        <button
          type="button"
          className="mt-8 bg-first_color hover:bg-second_color text-white font-standard_font text-xl py-2 px-4 rounded-full"
          onClick={onClick}
        >
          Ajouter un joueur
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
              className="py-1 px-1 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#9A373F] hover:text-[#9A373F] hover:bg-white"
              type="button"
              onClick={() => onDeleteClick(player)}
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
