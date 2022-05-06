import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getParticipants, getTournamentMatches } from "@services/api";
import MatchesTour from "@components/MatchesTour";
import NextButton from "@components/layouts/NextButton";
import PreviousButton from "@components/layouts/PreviousButton";
import Body from "@components/layouts/Body";

function MatchesPage() {
  const { tournamentId } = useParams();
  const [tournamentPlayers, setTournamentPlayers] = useState([]);
  const [tournamentMatches, setTournamentMatches] = useState([]);
  const [round, setRound] = useState(1);
  const navigate = useNavigate();

  async function fetchData() {
    setTournamentPlayers(await getParticipants({ id: tournamentId }));
    setTournamentMatches(await getTournamentMatches({ id: tournamentId }));
  }

  // Fonction qui permet de déterminer si le round est fini
  function isRoundEnded(roundNumber) {
    return (
      // On filtre les matches dont le round est égal au round en cours et qui n'est pas fini
      tournamentMatches.filter(
        ({ match }) => match.round === roundNumber && match.state !== "complete"
      ).length === 0
    );
  }

  // Permet de déterminer combien il y a des rounds au total dans le total. Sert notamment à afficher le "Round 1/x" (x = dernier round)
  function getLastRound() {
    if (!tournamentMatches.length) {
      return "...";
    }

    // Récupère le numéro du dernier round
    return tournamentMatches[tournamentMatches.length - 1].match.round;
  }

  function isTournamentEnded() {
    return isRoundEnded(getLastRound());
  }

  // On appelle l'api pour recevoir les infos du tournoi et les matchs
  useEffect(() => {
    fetchData();
  }, []);

  // Permet de passer au round précédent
  function onPrevRound() {
    if (round <= 1) {
      return;
    }
    setRound(round - 1);
  }

  // Permet de passer au round suivant
  async function onNextRound() {
    if (round > getLastRound()) {
      return;
    }

    if (isTournamentEnded()) {
      navigate(`/tournois/${tournamentId}/classement`);
      return;
    }

    // Si le round est fini on passe au round suivant
    if (isRoundEnded(round)) {
      setRound(round + 1);
    }
  }

  return (
    <Body>
      <div>
        <h1 className="font-title_font text-6xl text-center mb-10">
          Tour {round} / {getLastRound()}
        </h1>

        <MatchesTour
          players={tournamentPlayers}
          tournamentMatches={tournamentMatches.filter(
            ({ match }) => match.round === round
          )}
          onMatchFinished={fetchData}
        />

        <div className="flex justify-between mt-8 items-center">
          <div>
            <PreviousButton onClick={onPrevRound} />
          </div>

          <p className="text-center text-xl font-standard_font">
            Round {round}/{getLastRound()}{" "}
          </p>

          {isTournamentEnded() ? (
            <div>
              <button
                onClick={onNextRound}
                type="button"
                className="relative inline-flex items-center justify-center overflow-hidden font-medium text-first_color transition duration-300 ease-out border-2 border-first_color rounded-full shadow-md group"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-first_color group-hover:translate-x-0 ease">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-first_color transition-all duration-300 transform group-hover:translate-x-full ease">
                  Résultats
                </span>
                <span className="relative invisible">Button Text</span>
              </button>
            </div>
          ) : (
            isRoundEnded(round) && (
              <div>
                <NextButton onClick={onNextRound} />
              </div>
            )
          )}
        </div>
      </div>
    </Body>
  );
}
export default MatchesPage;
