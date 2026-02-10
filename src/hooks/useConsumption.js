import { useState, useEffect } from 'react';

const useConsumption = () => {
  const [consumption, setConsumption] = useState({
    daily: 0,
    monthly: 0,
    dailyLimit: 2,
    monthlyLimit: 100,
    history: [],
    alerts: []
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulation de données - à remplacer par appel API
    const fetchData = async () => {
      setTimeout(() => {
        setConsumption({
          daily: 1.7,
          monthly: 42.5,
          dailyLimit: 2,
          monthlyLimit: 100,
          history: [
            { date: '2024-01-01', value: 1.2 },
            { date: '2024-01-02', value: 2.1 },
            // ... plus de données
          ],
          alerts: [
            { type: 'warning', message: '85% de votre limite quotidienne atteinte' }
          ]
        });
        setLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  const updateLimits = (daily, monthly) => {
    setConsumption(prev => ({
      ...prev,
      dailyLimit: daily,
      monthlyLimit: monthly
    }));
  };

  return { consumption, loading, updateLimits };
};

export default useConsumption;