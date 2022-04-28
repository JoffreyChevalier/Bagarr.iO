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
    if (step <= 1) {
      return;
    }
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
    if (step >= 3) {
      return;
    }

    setStep(step + 1);
  }

  return (
    <body className="flex justify-center">
      <div className="backdrop-brightness-150 max-w-fit text-white text-4xl relative block p-8 border border-gray-100 shadow-xl rounded-xl m-6">
        <h1 className="mb-8">
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
        <div className="flex justify-center my-8">
          <button
            className="p-4 mx-8 items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#9A373F] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
            onClick={onPrevStep}
          >
            PREV
          </button>

          <button
            className="p-4 mx-8 items-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#9A373F] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="button"
            onClick={onNextStep}
          >
            NEXT
          </button>
        </div>
      </div>
    </body>
  );
}

export default CreateTournament;
