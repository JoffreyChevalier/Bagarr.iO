import { useState } from "react";

import RandomAvatar from "@components/RandomAvatars";
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
    <div className="flex flex-col items-center">
      <div className="">
        <RandomAvatar onChange={setNewPlayerAvatar} />
        <div className="my-6">
          {/* On fait passer le nom la saisie de l'utilisateur via la props onChange */}
          <PlayerName name={newPlayerName} onChangeName={setNewPlayerName} />
        </div>
        {/* <h1 className="mainTitle mb-8 text-center">Joueur</h1> */}
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="button"
          className="bg-first_color hover:bg-[#9A373F] text-white font-bold font-title_font text-xl py-2 px-4 rounded-full"
          onClick={onNewPlayerCreated}
        >
          +
        </button>
      </div>

      {/* Pour chaque nouveau joueur créé on affiche une div avec l'avatar et le nom */}
      <div className="flex justify-center flex-wrap gap-4">
        {players.map((player, index) => (
          <div key={index} className="mt-8 flex flex-col items-center">
            <img
              width="80"
              height="100"
              src={player.misc}
              alt={`${player.name} avatar`}
            />
            <p className="text-md font-bold">{player.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TournamentPlayers;
