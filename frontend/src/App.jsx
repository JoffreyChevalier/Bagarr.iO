import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "@pages/Home";
import Formulaire from "@pages/Contact";
import MentionsLegales from "@pages/Mentions Legales";
import Tournament from "@pages/Tournament";
import FinalRanking from "@pages/FinalRanking";
// import WorkingNavbar from "@components/WorkingNavbar";
import CreateTournament from "@pages/CreateTournament";
import Timer from "@pages/Timer";
import MatchesPage from "@pages/MatchesPage";
import TournamentContext from "@components/contexts/TournamentContext";
import "./App.css";

function App() {
  const [tournamentName, setTournamentName] = useState("");
  const [tournamentPlayers, setTournamentPlayers] = useState([]);
  const [tournament, setTournament] = useState();

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
    <div className="App bg-fixed flex justify-center items-center min-h-screen bg-[url('./src/assets/background_image.jpg')]">
      <div>
        {/* <WorkingNavbar /> */}
        <TournamentContext.Provider value={getTournamentContext()}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formulaires" element={<Formulaire />} />
            <Route path="/mentionslegales" element={<MentionsLegales />} />
            <Route path="/tournois" element={<Tournament />} />
            <Route path="/classementfinal" element={<FinalRanking />} />
            <Route path="/creer-un-tournoi" element={<CreateTournament />} />
            <Route path="/timer" element={<Timer />} />
            <Route
              path="/tournois/:tournamentId/matchs"
              element={<MatchesPage />}
            />
          </Routes>
        </TournamentContext.Provider>
      </div>
    </div>
  );
}

export default App;
