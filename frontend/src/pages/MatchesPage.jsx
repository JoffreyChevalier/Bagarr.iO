import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getParticipants, getTournamentMatches } from "@services/api";
import MatchesTour from "@components/MatchesTour";
import NextButton from "@components/layouts/NextButton";
import PreviousButton from "@components/layouts/PreviousButton";

function MatchesPage() {
  const { tournamentId } = useParams();
  const [tournamentPlayers, setTournamentPlayers] = useState([]);
  const [tournamentMatches, setTournamentMatches] = useState([]);
  const [round, setRound] = useState(1);

  async function fetchData() {
    setTournamentPlayers(await getParticipants({ id: tournamentId }));
    setTournamentMatches(await getTournamentMatches({ id: tournamentId }));
  }

  // function isCurrentRoundEnded() {
  //   return (
  //     tournamentMatches.filter(
  //       (match) => match.round === round && match.state !== "complete"
  //     ).length === 0
  //   );
  // }

  useEffect(() => {
    fetchData();
  }, []);

  console.warn(tournamentMatches);

  function onPrevRound() {
    if (round <= 1) {
      return;
    }
    setRound(round - 1);
  }

  function onNextRound() {
    if (round > 3) {
      return;
    }
    setRound(round + 1);
  }

  return (
    <div>
      <h1>Tour {round} / xxx</h1>

      <MatchesTour
        players={tournamentPlayers}
        tournamentMatches={tournamentMatches.filter(
          ({ match }) => match.round === round
        )}
      />

      <div className="flex justify-between mt-8 items-center">
        <div>
          <PreviousButton onClick={onPrevRound} />
        </div>

        <p className="text-center text-xl font-standard_font">{round}/3 </p>

        <div>
          <NextButton onClick={onNextRound} />
        </div>
      </div>
    </div>
  );
}
export default MatchesPage;
