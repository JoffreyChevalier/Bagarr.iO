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
  function onPrevStep() {
    setStep(step - 1);
  }

  // TODO: Gérer les bornes
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

      {step === 1 && (
        <TournamentName name={tournamentName} onChange={setTournamentName} />
      )}

      {step === 2 && (
        <TournamentPlayers
          players={tournamentPlayers}
          onChange={setTournamentPlayers}
        />
      )}

      {step === 3 && <FinalizeTournament />}

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
