import { Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Formulaire from "@pages/Contact";
import MentionsLegales from "@pages/Mentions Legales";
import SetProperties from "@pages/SetProperties";
import Tournament from "@pages/Tournament";
import PointGames from "@pages/PointGames";
import FinalRanking from "@pages/FinalRanking";
import ComponentsTest from "@pages/ComponentsTest";
import WorkingNavbar from "@components/WorkingNavbar";

import "./App.css";

function App() {
  return (
    <div className="App">
      <WorkingNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulaires" element={<Formulaire />} />
        <Route path="/mentionslegales" element={<MentionsLegales />} />
        <Route path="/configurations" element={<SetProperties />} />
        <Route path="/tournois" element={<Tournament />} />
        <Route path="/classementpoint" element={<PointGames />} />
        <Route path="/classementfinal" element={<FinalRanking />} />
        <Route path="/test" element={<ComponentsTest />} />
      </Routes>
    </div>
  );
}

export default App;
