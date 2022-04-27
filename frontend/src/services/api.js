import { useEffect, useState } from "react/cjs/react.production.min";
import axios from "axios";

const API_URL = import.meta.env.API_URL || "http://localhost:5000";

export const getTournaments = async () => {
  return (await axios(`${API_URL}/tournaments.json`)).data;
};


async function createTournament({ tournamentName }) {
  const response = await axios.post(
    "https://GrischK:g1VM2bDNu0DJZx1ALp5wfYx2QsRaqZ8bugIl76ZE@api.challonge.com/v1/tournaments.json",
    {
      name: `${tournamentName}`,
    }
  );
}

export default createTournament;

