import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import TournamentContext from "@components/contexts/TournamentContext";
import TournamentName from "@components/tournament/TournamentName";
import TournamentPlayers from "@components/tournament/TournamentPlayers";
import FinalizeTournament from "@components/tournament/FinalizeTournament";
import Steps from "@components/Steps";
import {
  createTournamentApi,
  addMassPlayers,
  startTournament,
} from "@services/api";
import NextButton from "@components/layouts/NextButton";
import PreviousButton from "@components/layouts/PreviousButton";
import Body from "@components/layouts/Body";
import Loader from "@components/layouts/Loader";
import Timer from "./Timer";

function isReplaying() {
  return new URLSearchParams(window.location.search).has("replay");
}

function CreateTournament() {
  const {
    tournamentName,
    setTournamentName,
    tournamentPlayers,
    setTournamentPlayers,
    tournament,
    setTournament,
  } = useContext(TournamentContext);

  const navigate = useNavigate();
  const [step, setStep] = useState(isReplaying() ? 3 : 1);
  const [isLoading, setIsLoading] = useState(false);
  // Au clic sur PREV MàJ du numéro d'étape (-1)
  function onPrevStep() {
    if (step <= 1) {
      return;
    }
    setStep(step - 1);
  }
  async function onNextStep() {
    setIsLoading(true);
    if (step > 4) {
      return;
    }

    if (step === 1) {
      // appel api pour créer le tournoi
      const response = await createTournamentApi({ name: tournamentName });
      setTournament(response.tournament);
    } else if (step === 3) {
      if (isReplaying()) {
        const responseStart = await startTournament(tournament);
        console.warn(responseStart);
        setStep(step + 1);
      } else {
        const response = await addMassPlayers(tournament, tournamentPlayers);
        console.warn(response);
        const responseStart = await startTournament(tournament);
        console.warn(responseStart);
        setStep(step + 1);
      }
      // appel api ajout des joueurs en masse
      // const response = await addMassPlayers(tournament, tournamentPlayers);
      // console.warn(response);
      // const responseStart = await startTournament(tournament);
      // setStep(step + 1);
      // console.warn(responseStart);
    }

    // Au clic sur PREV MàJ du numéro d'étape (+1)
    setStep(step + 1);
    setIsLoading(false);
  }

  function onDeletePlayer(player) {
    setTournamentPlayers(
      tournamentPlayers.filter((p) => player.name !== p.name)
    );
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <Body fullScreen={step === 4}>
      <>
        <h1 className="text-center uppercase font-title_font text-4xl sm:text-6xl mb-4">
          {tournamentName || "Créez votre tournoi"}
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
        {step === 3 && (
          <FinalizeTournament
            players={tournamentPlayers}
            onClick={onPrevStep}
            tournament={tournament}
            onDeleteClick={onDeletePlayer}
          />
        )}

        {step === 4 && (
          <Timer
            onTimeEnd={() => navigate(`/tournois/${tournament.id}/matchs`)}
          />
        )}

        {step !== 4 && (
          <div className="flex justify-center mt-8 items-center">
            <div>
              <PreviousButton onClick={onPrevStep} />
            </div>
            <Steps stepCount={3} currentStep={step} />
            {tournamentName ? (
              <div>
                <NextButton onClick={onNextStep} />
              </div>
            ) : (
              <span
                data-title="Entrez un nom de tournoi"
                className="ml-2 animate-waving-hand"
              >
                ❌
              </span>
            )}
          </div>
        )}
      </>
    </Body>
  );
}
export default CreateTournament;
