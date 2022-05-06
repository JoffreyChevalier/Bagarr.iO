import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

  async function fetchData() {
    setTournamentPlayers(await getParticipants({ id: tournamentId }));
    setTournamentMatches(await getTournamentMatches({ id: tournamentId }));
  }

  function isCurrentRoundEnded() {
    return (
      tournamentMatches.filter(
        ({ match }) => match.round === round && match.state !== "complete"
      ).length === 0
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  function getLastRound() {
    if (!tournamentMatches.length) {
      return "...";
    }

    return tournamentMatches[tournamentMatches.length - 1].match.round;
  }

  function onPrevRound() {
    if (round <= 1) {
      return;
    }
    setRound(round - 1);
  }

  async function onNextRound() {
    if (round > getLastRound()) {
      return;
    }

    if (isCurrentRoundEnded()) {
      setRound(round + 1);
    }
  }

  // const matchRound = tournamentMatches[tournamentMatches.length - 1];

  console.warn(isCurrentRoundEnded());

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

          {isCurrentRoundEnded() && (
            <div>
              <NextButton onClick={onNextRound} />
            </div>
          )}
        </div>
      </div>
    </Body>
  );
}
export default MatchesPage;
