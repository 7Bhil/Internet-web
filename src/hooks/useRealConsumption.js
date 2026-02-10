import { useState, useEffect } from 'react';
import { networkTracker } from '../services/networkTracker';
import { mockConsumptionData } from '../services/mockData';

const useRealConsumption = () => {
  const [consumption, setConsumption] = useState({
    daily: 0,
    monthly: 0,
    dailyLimit: 2,
    monthlyLimit: 100,
    history: [],
    alerts: [],
    isLoading: true
  });

  const [networkStats, setNetworkStats] = useState(null);

  // Récupérer les stats réseau du navigateur
  const fetchNetworkStats = () => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      return {
        type: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData
      };
    }
    return null;
  };

  // Simuler l'ajout de données (plus réaliste)
  const simulateNetworkUsage = () => {
    // Simulation basée sur l'heure et type de connexion
    const hour = new Date().getHours();
    const isPeakHour = (hour >= 18 && hour <= 22) || (hour >= 12 && hour <= 14);
    
    let baseConsumption = 0.1; // Base de 0.1 MB par 30s
    
    // Augmentation selon l'heure
    if (isPeakHour) baseConsumption *= 3;
    else if (hour >= 9 && hour <= 17) baseConsumption *= 2;
    
    // Variation aléatoire
    const randomFactor = 0.5 + Math.random() * 1.5;
    const consumptionMB = baseConsumption * randomFactor;
    
    networkTracker.addConsumption(consumptionMB * 1024 * 1024);
  };

  useEffect(() => {
    // Charger les données initiales
    const loadData = async () => {
      try {
        // Charger les settings depuis localStorage
        const savedSettings = localStorage.getItem('consonet-settings');
        let dailyLimit = 2;
        let monthlyLimit = 100;
        
        if (savedSettings) {
          const settings = JSON.parse(savedSettings);
          dailyLimit = settings.dailyLimit || 2;
          monthlyLimit = settings.monthlyLimit || 100;
        }
        
        // Récupérer les vraies données du tracker
        const trackerStats = networkTracker.getStats();
        
        // Récupérer les infos réseau du navigateur
        const stats = fetchNetworkStats();
        
        // Simuler de l'activité réseau (pour le test)
        simulateNetworkUsage();

        // Vérifier les alertes
        const dailyPercentage = (trackerStats.today / dailyLimit) * 100;
        const monthlyPercentage = (trackerStats.month / monthlyLimit) * 100;
        
        const alerts = [];
        if (dailyPercentage > 80) {
          alerts.push({
            type: 'warning',
            message: `⚠️ ${dailyPercentage.toFixed(1)}% de votre limite quotidienne atteinte`,
            date: new Date().toISOString()
          });
        }
        
        if (monthlyPercentage > 90) {
          alerts.push({
            type: 'danger',
            message: `🚨 ${monthlyPercentage.toFixed(1)}% de votre limite mensuelle atteinte`,
            date: new Date().toISOString()
          });
        }

        setConsumption({
          daily: trackerStats.today,
          monthly: trackerStats.month,
          dailyLimit: dailyLimit,
          monthlyLimit: monthlyLimit,
          history: trackerStats.history,
          alerts: alerts,
          isLoading: false,
          average: trackerStats.average
        });

        setNetworkStats(stats);

      } catch (error) {
        console.error('Erreur chargement données:', error);
        // Fallback sur les données mock
        setConsumption({
          daily: mockConsumptionData.daily[0].consumption,
          monthly: mockConsumptionData.monthly.reduce((sum, m) => sum + m.consumption, 0),
          dailyLimit: 2,
          monthlyLimit: 100,
          history: mockConsumptionData.daily,
          alerts: mockConsumptionData.alerts,
          isLoading: false
        });
      }
    };

    loadData();

    // Écouter les mises à jour des settings
    const handleSettingsUpdate = (event) => {
      const settings = event.detail;
      setConsumption(prev => ({
        ...prev,
        dailyLimit: settings.dailyLimit,
        monthlyLimit: settings.monthlyLimit
      }));
    };

    window.addEventListener('settings-updated', handleSettingsUpdate);

    // Mettre à jour périodiquement
    const interval = setInterval(() => {
      simulateNetworkUsage();
      const trackerStats = networkTracker.getStats();
      
      setConsumption(prev => ({
        ...prev,
        daily: trackerStats.today,
        monthly: trackerStats.month,
        history: trackerStats.history
      }));
    }, 30000); // Toutes les 30 secondes

    return () => {
      clearInterval(interval);
      window.removeEventListener('settings-updated', handleSettingsUpdate);
    };
  }, []);

  const updateLimits = (daily, monthly) => {
    setConsumption(prev => ({
      ...prev,
      dailyLimit: daily,
      monthlyLimit: monthly
    }));
  };

  const resetConsumption = () => {
    networkTracker.resetData();
    setConsumption(prev => ({
      ...prev,
      daily: 0,
      monthly: 0,
      history: []
    }));
  };

  return { 
    consumption, 
    networkStats,
    updateLimits, 
    resetConsumption 
  };
};

export default useRealConsumption;