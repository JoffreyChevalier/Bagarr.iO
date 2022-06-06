// import { useEffect, useState } from "react";
import TournamentCard from "@components/tournamentCard/TournamentCard";
// import { getTournaments } from "@services/api";

import logoAndText from "@assets/logo_and_text.png";

function Tournament() {
  // const [tournaments, setTournaments] = useState();

  // useEffect(() => {
  //   const fetchTournaments = async () => {
  //     setTournaments(await getTournaments());
  //   };

  //   fetchTournaments();
  // }, []);

  return (
    <div className="flex-col items-center justify-center">
      <div className="mt-4 h-fit px-12 max-w-sm sm:max-w-lg lg:max-w-2xl border border-black backdrop-blur-md text-black shadow-xl rounded-xl">
        <div className="flex-col justify-center pb-12">
          <img className="w-24 my-12" src={logoAndText} alt="logo d'un point" />

          <h1 className="text-center font-title_font text-4xl mb-4">
            <h1>16eme-8eme-quarts-demi-final</h1>
            {/* {tournamentName || "Créez votre tournoi"} */}
          </h1>
          <div>
            <div className="flex-col w-9xl items-center backdrop-brightness-150 max-w-fit text-4xl relative block p-8 border border-gray-100 shadow-xl rounded-xl m-6">
              <TournamentCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tournament;
