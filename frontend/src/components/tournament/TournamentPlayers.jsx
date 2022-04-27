import NbrPlayerButton from "@components/NbrPlayerButton";
import { ArrowRightIcon as ArrowRightIconOutline } from "@heroicons/react/outline";

function TournamentPlayers({ players, onChange }) {
  // TODO: Ajouter les participants ici
  // le tableau des participants (useState)
  return (
    <div>
      <h1 className="mainTitle">ICI la page d'ajout de participants</h1>
      <NbrPlayerButton minValue={1} maxValue={36} />
      <ArrowRightIconOutline className="h-5 w-5 text-[#70A288]" />

      <button
        type="button"
        onClick={() =>
          onChange([
            ...players,
            { name: `player-${Math.ceil(Math.random() * 100)}` },
          ])
        }
      >
        ADD
      </button>

      {players.map((player) => (
        <p>{player.name}</p>
      ))}
    </div>
  );
}

export default TournamentPlayers;
