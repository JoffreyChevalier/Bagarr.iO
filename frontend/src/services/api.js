import axios from "axios";

const API_URL = import.meta.env.API_URL || "http://localhost:5000";

export const getTournaments = async () => {
  return (await axios(`${API_URL}/tournaments.json`)).data;
};
