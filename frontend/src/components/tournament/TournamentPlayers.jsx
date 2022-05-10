import { useState } from "react";

import RandomAvatar from "@components/RandomAvatars";
import PlayerName from "./PlayerName";

function TournamentPlayers({ players, onChange }) {
  const [newPlayerName, setNewPlayerName] = useState("");
  const [newPlayerAvatar, setNewPlayerAvatar] = useState("");

  // Lorsque le joueur est créé au clic du bouton, on créé un nouveau tableau qui reprend les joueurs et on y ajoute le nouveau joueur
  function onNewPlayerCreated() {
    onChange([...players, { name: newPlayerName, misc: newPlayerAvatar }]);
    setNewPlayerName("");
  }

  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      onNewPlayerCreated();
    }
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <div className="">
        <RandomAvatar onChange={setNewPlayerAvatar} />
        <div className="flex relative left-4 items-center my-6">
          {/* On fait passer le nom la saisie de l'utilisateur via la props onChange */}
          <PlayerName
            name={newPlayerName}
            onChangeName={setNewPlayerName}
            handleKeyPress={onKeyPress}
          />
          {newPlayerName ? (
            <button
              type="button"
              title="Ajouter le joueur"
              className="ml-2 bg-second_color text-white font-bold font-title_font text-xl px-2 rounded-full hover:bg-second_color_d hover:scale-110 hover:drop-shadow-lg active:scale-100"
              onClick={onNewPlayerCreated}
            >
              +
            </button>
          ) : (
            <span data-title="Entrez un nom" className="animate-waving-hand">
              ❌
            </span>
          )}
        </div>
        {/* <h1 className="mainTitle mb-8 text-center">Joueur</h1> */}
      </div>
      <div className="flex justify-center mt-4" />

      {/* Pour chaque nouveau joueur créé on affiche une div avec l'avatar et le nom */}
      <div className="flex justify-center flex-wrap gap-4">
        {players.map((player, index) => (
          <div key={index} className="mt-2 flex flex-col items-center">
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
