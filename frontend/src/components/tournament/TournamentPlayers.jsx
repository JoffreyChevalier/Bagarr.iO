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
      <h1 className="mainTitle">ICI la page d'ajout de participants</h1>

      <PlayerName name={newPlayerName} onChangeName={setNewPlayerName} />
      <RandomAvatar onChange={setNewPlayerAvatar} />

      <button type="button" onClick={onNewPlayerCreated}>
        ADD
      </button>

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
