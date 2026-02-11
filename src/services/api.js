const API_BASE_URL = 'http://localhost:3001/api';

export const api = {
  // Récupérer les données de consommation
  async getData() {
    const response = await fetch(`${API_BASE_URL}/data`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  },

  // Récupérer les alertes
  async getAlerts() {
    const response = await fetch(`${API_BASE_URL}/alerts`);
    if (!response.ok) {
      throw new Error('Failed to fetch alerts');
    }
    return response.json();
  },

  // Créer une alerte
  async createAlert(alert) {
    const response = await fetch(`${API_BASE_URL}/alerts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(alert),
    });
    if (!response.ok) {
      throw new Error('Failed to create alert');
    }
    return response.json();
  },

  // Récupérer les statistiques
  async getStats() {
    const response = await fetch(`${API_BASE_URL}/stats`);
    if (!response.ok) {
      throw new Error('Failed to fetch stats');
    }
    return response.json();
  },
};
