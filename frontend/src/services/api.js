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

// Appel API pour récupérer tous les joueurs du tournoi
export const getParticipants = async (tournament) => {
  return (
    await axios(`${API_URL}/tournaments/${tournament.id}/participants.json`)
  ).data;
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

// Afficher les matchs du tournoi
export const getTournamentMatches = async (tournament) => {
  return (await axios(`${API_URL}/tournaments/${tournament.id}/matches.json`))
    .data;
};

// Envoyer le score du match joué
export const postScore = async (tournamentId, matchId, score, winnerId) => {
  return (
    await axios.put(
      `${API_URL}/tournaments/${tournamentId}/matches/${matchId}.json`,
      { match: { scores_csv: score, winner_id: winnerId } }
    )
  ).data;
};

// Indiquer le match comme fini
export const matchEnded = async (tournament, match) => {
  return (
    await axios.post(
      `${API_URL}/tournaments/${tournament.id}/matches/${match.id}/unmark_as_underway.json`
    )
  ).data;
};
