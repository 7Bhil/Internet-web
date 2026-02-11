export const mockConsumptionData = {
  daily: [
    { day: 'Lundi', consumption: 1.2 },
    { day: 'Mardi', consumption: 2.1 },
    { day: 'Mercredi', consumption: 1.8 },
    { day: 'Jeudi', consumption: 2.5 },
    { day: 'Vendredi', consumption: 3.2 },
    { day: 'Samedi', consumption: 2.8 },
    { day: 'Dimanche', consumption: 2.4 },
  ],
  monthly: [
    { month: 'Janvier', consumption: 42 },
    { month: 'Février', consumption: 38 },
    { month: 'Mars', consumption: 45 },
    { month: 'Avril', consumption: 52 },
    { month: 'Mai', consumption: 48 },
    { month: 'Juin', consumption: 50 },
  ],
  alerts: [
    {
      id: 1,
      type: 'warning',
      message: '85% de la limite quotidienne atteinte',
      date: '2024-01-15 14:30',
    },
    {
      id: 2,
      type: 'info',
      message: 'Nouveau mois - compteur réinitialisé',
      date: '2024-01-01 00:00',
    },
  ],
};

export const userSettings = {
  dailyLimit: 2,
  monthlyLimit: 100,
  unit: 'Go',
  notifications: {
    email: true,
    push: true,
    threshold: 80,
  },
};
