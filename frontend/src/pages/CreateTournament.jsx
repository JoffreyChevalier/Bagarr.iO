import { useState } from "react";

import TournamentName from "@components/tournament/TournamentName";
import TournamentPlayers from "@components/tournament/TournamentPlayers";
import FinalizeTournament from "@components/tournament/FinalizeTournament";

// function FinalizeTournament() {
//   return <h1>ETAPE 3</h1>;
// }

function CreateTournament() {
  const [step, setStep] = useState(1);
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentPlayers, setTournamentPlayers] = useState([]);

  // TODO: Gérer les bornes
  // Au clic sur PREV MàJ du numéro d'étape (-1)
  function onPrevStep() {
    setStep(step - 1);
  }

  // TODO: Gérer les bornes
  // Au clic sur PREV MàJ du numéro d'étape (+1)
  function onNextStep() {
    if (step === 1) {
      // appel api pour créer le tournoi
    } else if (step === 2) {
      // appel api ajout des participants
    } else if (step === 3) {
      // ???
    }

    setStep(step + 1);
  }

  return (
    <div className="text-white text-4xl">
      <h1>
        GESTION DU TOURNOI ({tournamentName} {step}/3 )
      </h1>

      {/* A la 1ere étape on appelle TournamentName pour inscrire le nom du tournoi */}
      {step === 1 && (
        <TournamentName name={tournamentName} onChange={setTournamentName} />
      )}

      {/* A la 2nde étape on appelle TournamentPlayers pour inscrire le nom et l'avatar du joueur */}
      {step === 2 && (
        <TournamentPlayers
          players={tournamentPlayers}
          onChange={setTournamentPlayers}
        />
      )}

      {/* A la 3eme étape on appelle FinalizeTournament pour afficher le récapitulatif du tournoi */}
      {step === 3 && <FinalizeTournament />}

      {/* boutons pour changer d'étape */}
      <button type="button" onClick={onPrevStep}>
        PREV
      </button>

      <button type="button" onClick={onNextStep}>
        NEXT
      </button>
    </div>
  );
}

export default CreateTournament;
