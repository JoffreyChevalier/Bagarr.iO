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

// Post API pour envoyer tous les joueurs créés à l'API
export const addMassPlayers = async (tournament, players) => {
  return (
    await axios.post(
      `${API_URL}/tournaments/${tournament.id}/participants/bulk_add.json`,
      { participants: players }
    )
  ).data;
};

// Post API pour démarrer le tournoi
export const startTournament = async (tournament) => {
  return (
    await axios.post(`${API_URL}/tournaments/${tournament.id}/start.json`)
  ).data;
};

// Appel API pour supprimer un joueur du tournoi
export const deletePlayer = async (tournament, player) => {
  return (
    await axios.delete(
      `${API_URL}/tournaments/${tournament.id}/participants/${player.id}.json`
    )
  ).data;
};
