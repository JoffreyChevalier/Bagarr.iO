import { useEffect, useState } from "react";
import TournamentCard from "@components/tournamentCard/TournamentCard";
import { getTournaments } from "@services/api";

function Tournament() {
  const [tournaments, setTournaments] = useState();

  useEffect(() => {
    const fetchTournaments = async () => {
      setTournaments(await getTournaments());
    };

    fetchTournaments();
  }, []);

  return (
    <>
      <div className="text-white">
        <h1>ICI la page du jeux de tournois</h1>

        {tournaments ? (
          tournaments.map((tournament) => (
            <h2>
              #{tournament.tournament.id} {tournament.tournament.name}
            </h2>
          ))
        ) : (
          <p>Chargement de la liste des tournois ...</p>
        )}
      </div>
      <div>
        <div className="flex-col items-center backdrop-brightness-150 max-w-fit text-white text-4xl relative block p-8 border border-gray-100 shadow-xl rounded-xl m-6">
          <h1>16eme-8eme-quarts-demi-final</h1>
          <TournamentCard />
        </div>
      </div>
    </>
  );
}
export default Tournament;
