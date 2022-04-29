import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Formulaire from "@pages/Contact";
import MentionsLegales from "@pages/Mentions Legales";
import Tournament from "@pages/Tournament";
import FinalRanking from "@pages/FinalRanking";
// import WorkingNavbar from "@components/WorkingNavbar";
import CreateTournament from "@pages/CreateTournament";
import Timer from "@pages/Timer";

import "./App.css";

function App() {
  return (
    <div className="App flex justify-center items-center min-h-screen bg-[url('./src/assets/background_image.jpg')]">
      {/* <WorkingNavbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulaires" element={<Formulaire />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route path="/tournois" element={<Tournament />} />
        <Route path="/classementfinal" element={<FinalRanking />} />
        <Route path="/creer-un-tournoi" element={<CreateTournament />} />
        <Route path="/timer" element={<Timer />} />
      </Routes>
    </div>
  );
}

export default App;
