import axios from "axios";

const API_URL = import.meta.env.API_URL || "http://localhost:5000";

// Appel API pour récupérer tous les tournois
export const getTournaments = async () => {
  return (await axios(`${API_URL}/tournaments.json`)).data;
};

// Post API pour envoyer le tournoi créé à l'API
export const createTournamentApi = async (tournament) => {
  return (await axios.post(`${API_URL}/tournaments.json`, tournament)).data;
};

// Post API pour envoyer le joueur créé à l'API
export const addPlayer = async (player, tournament) => {
  return (
    await axios.post(
      `${API_URL}/tournaments/${tournament.tournament.id}/participants.json`,
      player
    )
  ).data;
};

export const addMassPlayers = async (tournament, players) => {
  return (
    await axios.post(
      `${API_URL}/tournaments/${tournament.id}/participants/bulk_add.json`,
      { participants: players }
    )
  ).data;
};
