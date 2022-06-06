import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "@pages/Home";
import Formulaire from "@pages/Contact";
import MentionsLegales from "@pages/Mentions Legales";
import Tournament from "@pages/Tournament";
import FinalRanking from "@pages/FinalRanking";
import CreateTournament from "@pages/CreateTournament";
import Timer from "@pages/Timer";
import MatchesPage from "@pages/MatchesPage";
import TournamentContext from "@components/contexts/TournamentContext";

import "./App.css";
import Loader from "@components/layouts/Loader";

function App() {
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentPlayers, setTournamentPlayers] = useState([]);
  // state pour passer le tournoi dans le composant final ranking (on est obligé d'avoir l'id en cours du tournoi)
  const [tournament, setTournament] = useState();
  const [fullScreen, setFullScreen] = useState(false);

  // step 1. dans APP: Tournament => Vide
  // step 2. on passe tournament vide à Create Tournament et la fonction de set
  // step 3. Create tournament va utiliser set pour modifier Tournament vide avec les valeurs de la BDD
  // Step 4. on passe tournament aussi a Final ranking qui va recevoir le tournoi créé
  function getTournamentContext() {
    return {
      tournamentName,
      tournamentPlayers,
      tournament,
      setTournamentName,
      setTournamentPlayers,
      setTournament,
    };
  }

  return (
    <div
      className={
        fullScreen
          ? "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border border-gray-300 rounded-xl"
          : "App w-screen bg-fixed flex justify-center items-center min-h-screen"
      }
    >
      <TournamentContext.Provider value={getTournamentContext()}>
        <Routes>
          <Route path="/loader" element={<Loader />} />
          <Route path="/" element={<Home />} />
          <Route path="/formulaires" element={<Formulaire />} />
          <Route path="/mentionslegales" element={<MentionsLegales />} />
          <Route path="/creer-un-tournoi" element={<CreateTournament />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/tournois" element={<Tournament />} />
          <Route
            path="/tournois/:tournamentId/classement"
            element={<FinalRanking updateFullScreen={setFullScreen} />}
          />
          <Route
            path="/tournois/:tournamentId/matchs"
            element={<MatchesPage />}
          />
        </Routes>
      </TournamentContext.Provider>
    </div>
  );
}

export default App;
