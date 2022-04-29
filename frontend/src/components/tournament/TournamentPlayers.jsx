import RandomAvatar from "@components/RandomAvatars";
import { useState } from "react";
import PlayerName from "./PlayerName";

function TournamentPlayers({ players, onChange }) {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerAvatar, setNewPlayerAvatar] = useState("");

  // Lorsque le joueur est créé au clic du bouton, on créé un nouveau tableau qui reprend les joueurs et on y ajoute le nouveau joueur
  function onNewPlayerCreated() {
    onChange([...players, { name: newPlayerName, misc: newPlayerAvatar }]);
    setNewPlayerAvatar("");
    setNewPlayerName("");
  }

  return (
    <div>
      <div className="mb-8">
        {/* On fait passer le nom la saisie de l'utilisateur via la props onChange */}
        <PlayerName name={newPlayerName} onChangeName={setNewPlayerName} />
      </div>
      {/* <h1 className="mainTitle mb-8 text-center">Joueur</h1> */}

      <RandomAvatar onChange={setNewPlayerAvatar} />

      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="addPlayerButton flex items-center justify-center border border-transparent shadow-sm text-xl leading-4 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 p-2 rounded-full bg-[#9A373F] border-[#808080]"
          onClick={onNewPlayerCreated}
        >
          +
        </button>
      </div>

      {/* Pour chaque nouveau joueur créé on affiche une div avec l'avatar et le nom */}
      <div className="flex justify-center flex-wrap gap-4">
        {players.map((player) => (
          <div key={player.id} className="mt-8 flex flex-col items-center">
            <img
              width="100"
              height="100"
              src={player.misc}
              alt={`${player.name} avatar`}
            />
            <p className="text-sm">{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TournamentPlayers;
