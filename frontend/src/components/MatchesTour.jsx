import TournamentCard from "@components/tournamentCard/TournamentCard";

function MatchesTour({ tournamentMatches, players, onMatchFinished }) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-center">
        {tournamentMatches ? (
          tournamentMatches.map(({ match }, index) => (
            <TournamentCard
              key={index}
              matchIndex={index + 1}
              match={match}
              players={players.filter(
                ({ participant }) =>
                  match.player1_id === participant.id ||
                  match.player2_id === participant.id
              )}
              onFinished={onMatchFinished}
            />
          ))
        ) : (
          <p>Chargement des matches</p>
        )}
      </div>
    </div>
  );
}

export default MatchesTour;
