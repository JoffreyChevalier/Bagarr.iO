import { useState } from "react";
import { useNavigate } from "react-router-dom";

import TournamentName from "@components/tournament/TournamentName";
import TournamentPlayers from "@components/tournament/TournamentPlayers";
import FinalizeTournament from "@components/tournament/FinalizeTournament";
import {
  createTournamentApi,
  addMassPlayers,
  startTournament,
} from "@services/api";
import NextButton from "@components/skeleton/NextButton";
import PreviousButton from "@components/skeleton/PreviousButton";

// function FinalizeTournament() {
//   return <h1>ETAPE 3</h1>;
// }

function CreateTournament() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentPlayers, setTournamentPlayers] = useState([]);
  const [tournament, setTournament] = useState();

  // Au clic sur PREV MàJ du numéro d'étape (-1)
  function onPrevStep() {
    if (step <= 1) {
      return;
    }
    setStep(step - 1);
  }
  async function onNextStep() {
    if (step > 3) {
      return;
    }

    if (step === 1) {
      // appel api pour créer le tournoi
      const response = await createTournamentApi({ name: tournamentName });
      setTournament(response.tournament);
    } else if (step === 3) {
      // appel api ajout des joueurs en masse
      const response = await addMassPlayers(tournament, tournamentPlayers);
      console.warn(response);
      navigate("/timer");
      const responseStart = await startTournament(tournament);
      console.warn(responseStart);
    }

    // Au clic sur PREV MàJ du numéro d'étape (+1)
    setStep(step + 1);
  }

  function onDeletePlayer(player) {
    setTournamentPlayers(
      tournamentPlayers.filter((p) => player.name !== p.name)
    );
  }

  return (
    <div className="flex-col items-center justify-center">
      <div className="mt-4 h-fit px-12 max-w-sm sm:max-w-lg lg:max-w-2xl border border-black backdrop-blur-md text-black shadow-xl rounded-xl">
        <div className="flex-col justify-center pb-12">
          <img
            className="w-24 my-12"
            src="./src/assets/logo_and_text.png"
            alt="logo d'un point"
          />

          <h1 className="text-center font-title_font text-4xl mb-4">
            {tournamentName || "Créez votre tournoi"}
          </h1>

          {/* A la 1ere étape on appelle TournamentName pour inscrire le nom du tournoi */}
          {step === 1 && (
            <TournamentName
              name={tournamentName}
              onChange={setTournamentName}
            />
          )}

          {/* A la 2nde étape on appelle TournamentPlayers pour inscrire le nom et l'avatar du joueur */}
          {step === 2 && (
            <TournamentPlayers
              players={tournamentPlayers}
              onChange={setTournamentPlayers}
            />
          )}

          {/* A la 3eme étape on appelle FinalizeTournament pour afficher le récapitulatif du tournoi */}
          {step === 3 && (
            <FinalizeTournament
              players={tournamentPlayers}
              onClick={onPrevStep}
              tournament={tournament}
              onDeleteClick={onDeletePlayer}
            />
          )}

          {/* boutons pour changer d'étape */}
          <div className="flex justify-between mt-8 items-center">
            <div>
              <PreviousButton onClick={onPrevStep} />
            </div>

            <p className="text-center text-xl font-standard_font">{step}/3 </p>

            <div>
              <NextButton onClick={onNextStep} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTournament;
