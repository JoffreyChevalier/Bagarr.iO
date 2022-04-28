import RandomAvatar from "@components/RandomAvatars";
import { useState } from "react";
import PlayerName from "./PlayerName";

function TournamentPlayers({ players, onChange }) {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerAvatar, setNewPlayerAvatar] = useState("");

  function onNewPlayerCreated() {
    onChange([...players, { name: newPlayerName, misc: newPlayerAvatar }]);
    setNewPlayerAvatar("");
    setNewPlayerName("");
  }

  return (
    <div>
      <h1 className="mainTitle mb-8 text-center">Joueur</h1>

      <PlayerName name={newPlayerName} onChangeName={setNewPlayerName} />
      <RandomAvatar onChange={setNewPlayerAvatar} />

      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="addPlayerButton flex items-center justify-center border border-transparent shadow-sm text-sm leading-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-2 rounded-full bg-[#9A373F] border-[#808080]"
          onClick={onNewPlayerCreated}
        >
          AJOUTER UN JOUEUR
        </button>
      </div>

      <div className="flex flex-wrap gap-4">
        {players.map((player) => (
          <div>
            <img
              width="100"
              height="100"
              src={player.misc}
              alt={`${player.name} avatar`}
            />
            <p>{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TournamentPlayers;
