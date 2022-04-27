import { useEffect, useState } from "react";

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
  );
}
export default Tournament;
