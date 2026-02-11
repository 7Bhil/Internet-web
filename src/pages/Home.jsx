import React, { useState, useEffect } from 'react';
import Dashboard from '../components/Dashboard';
import DataCard from '../components/DataCard';
import useRealConsumption from '../hooks/useRealConsumption';

const Home = () => {
  const { consumption, networkStats, resetConsumption } = useRealConsumption();
  const [lastUpdate, setLastUpdate] = useState(new Date());

  // Formater les données pour les cartes
  const todayData = {
    used: parseFloat(consumption.daily.toFixed(2)),
    total: consumption.dailyLimit,
    percentage:
      consumption.dailyLimit > 0
        ? Math.min((consumption.daily / consumption.dailyLimit) * 100, 100)
        : 0,
  };

  const monthlyData = {
    used: parseFloat(consumption.monthly.toFixed(2)),
    total: consumption.monthlyLimit,
    percentage:
      consumption.monthlyLimit > 0
        ? Math.min((consumption.monthly / consumption.monthlyLimit) * 100, 100)
        : 0,
  };

  // Mettre à jour l'heure
  useEffect(() => {
    const timer = setInterval(() => {
      setLastUpdate(new Date());
    }, 60000); // Toutes les minutes

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-8">
      {/* Info de simulation */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg
              className="h-5 w-5 text-yellow-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              <strong>Mode démonstration :</strong> Les données de consommation
              sont simulées pour illustrer le fonctionnement. Pour des données
              réelles, une application mobile ou extension navigateur serait
              nécessaire.
            </p>
          </div>
        </div>
      </div>

      {/* En-tête avec infos réseau */}
      {networkStats && (
        <div className="bg-white rounded-xl shadow-lg p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    networkStats.type === '4g'
                      ? 'bg-green-500'
                      : networkStats.type === '3g'
                        ? 'bg-yellow-500'
                        : 'bg-blue-500'
                  }`}
                ></div>
                <span className="text-sm font-medium text-gray-700">
                  {networkStats.type?.toUpperCase() || 'Wi-Fi'}
                </span>
              </div>

              {networkStats.downlink && (
                <div className="text-sm text-gray-600">
                  ⬇️ {networkStats.downlink} Mbps
                </div>
              )}

              {networkStats.rtt && (
                <div className="text-sm text-gray-600">
                  🏓 {networkStats.rtt}ms
                </div>
              )}
            </div>

            <div className="text-sm text-gray-500">
              Dernière mise à jour:{' '}
              {lastUpdate.toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
        </div>
      )}

      {/* Cartes de consommation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DataCard
          title="Consommation aujourd'hui"
          used={todayData.used}
          total={todayData.total}
          unit="Go"
          type={networkStats?.type || 'Wi-Fi'}
          percentage={parseFloat(todayData.percentage.toFixed(1))}
          color={todayData.percentage > 80 ? 'red' : 'blue'}
        />

        <DataCard
          title="Consommation mensuelle"
          used={monthlyData.used}
          total={monthlyData.total}
          unit="Go"
          percentage={parseFloat(monthlyData.percentage.toFixed(1))}
          color={monthlyData.percentage > 90 ? 'red' : 'purple'}
        />
      </div>

      {/* Graphique */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Statistiques de consommation
          </h2>
          <button
            onClick={resetConsumption}
            className="px-4 py-2 text-sm text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition duration-200"
          >
            Réinitialiser les données
          </button>
        </div>
        <Dashboard consumption={consumption} />
      </div>

      {/* Alertes */}
      {consumption.alerts.length > 0 && (
        <div className="space-y-3">
          {consumption.alerts.map((alert, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg border-l-4 ${
                alert.type === 'danger'
                  ? 'bg-red-50 border-red-400 text-red-700'
                  : 'bg-yellow-50 border-yellow-400 text-yellow-700'
              }`}
            >
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm font-medium">{alert.message}</p>
                  <p className="text-xs mt-1 opacity-75">
                    {new Date(alert.date).toLocaleString('fr-FR')}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stats supplémentaires */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-4 shadow">
          <div className="text-sm text-gray-600">Moyenne/jour</div>
          <div className="text-2xl font-bold text-gray-800">
            {consumption.average ? consumption.average.toFixed(2) : '0.00'} Go
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow">
          <div className="text-sm text-gray-600">Jours suivis</div>
          <div className="text-2xl font-bold text-gray-800">
            {consumption.history?.length || 0}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow">
          <div className="text-sm text-gray-600">Reste aujourd'hui</div>
          <div className="text-2xl font-bold text-blue-600">
            {Math.max(consumption.dailyLimit - consumption.daily, 0).toFixed(2)}{' '}
            Go
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 shadow">
          <div className="text-sm text-gray-600">Reste mensuel</div>
          <div className="text-2xl font-bold text-blue-600">
            {Math.max(
              consumption.monthlyLimit - consumption.monthly,
              0
            ).toFixed(2)}{' '}
            Go
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
