import GameType from "@components/GameType";
import TButton from "@components/TButton";
import createTournament from "@services/api";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRightIcon as ArrowRightIconOutline } from "@heroicons/react/outline";

export default function ComponentsTest() {
  // Récupérer les données depuis l'API
  // const [newTournament, setNewTournament] = useState([]);

  // Récupérer les données d'un bouton "nom de tournoi"
  const [tournamentName, setTournamentName] = useState("");

  // A modifier en console.log car impossible de faire un commit sinon
  console.warn(tournamentName);

  return (
    <>
      <h1 className="mainTitle">Page de tests</h1>
      <div>
        {/* Bouton nom de l'équipe, on fait passer la props onChange avec setData pour récupérer la saisie de l'utilisateur */}
        <GameType setTournamentName={setTournamentName} />

        <TButton
          variant="transparent"
          onClick={(event) => createTournament(event.target)}
        >
          <Link to="/ajout-de-joueurs">
            <ArrowRightIconOutline className="h-5 w-5 text-[#70A288]" />
          </Link>
        </TButton>
      </div>
    </>
  );
}
