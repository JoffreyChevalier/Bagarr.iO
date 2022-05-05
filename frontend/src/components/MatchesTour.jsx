import TournamentCard from "@components/tournamentCard/TournamentCard";

function MatchesTour({ tournamentMatches, players }) {
  return (
    <div>
      <h1 className="font-standard_font text-lg text-center">
        Liste des matches
      </h1>
      <div className="flex flex-wrap items-center justify-center">
        {tournamentMatches ? (
          tournamentMatches.map(({ match }, index) => (
            <TournamentCard
              key={index}
              matchIndex={index + 1}
              players={players.filter(
                ({ participant }) =>
                  match.player1_id === participant.id ||
                  match.player2_id === participant.id
              )}
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
