import React, { useState, useEffect } from 'react';
import { LineChart, BarChart } from '../components/ConsumptionChart';

const History = () => {
  const [historyData, setHistoryData] = useState({
    weekly: { labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4'], values: [8.5, 9.2, 10.1, 7.8] },
    monthly: { labels: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'], values: [42, 38, 45, 52, 48, 50] },
    daily: []
  });

  const [stats, setStats] = useState({
    average: 2.4,
    overLimitDays: 3,
    totalConsumption: 89.6
  });

  useEffect(() => {
    // Charger les données depuis localStorage ou un service
    const savedHistory = localStorage.getItem('consonet-history');
    if (savedHistory) {
      const data = JSON.parse(savedHistory);
      setHistoryData(prev => ({ ...prev, ...data }));
    }

    // Calculer les statistiques
    const dailyData = historyData.daily.length > 0 ? historyData.daily : [
      { date: '2024-01-15', consumption: 2.1, status: 'normal' },
      { date: '2024-01-14', consumption: 3.2, status: 'dépassement' },
      { date: '2024-01-13', consumption: 1.8, status: 'normal' },
      { date: '2024-01-12', consumption: 2.5, status: 'normal' },
      { date: '2024-01-11', consumption: 2.9, status: 'dépassement' },
    ];

    const average = dailyData.reduce((sum, day) => sum + day.consumption, 0) / dailyData.length;
    const overLimitDays = dailyData.filter(day => day.consumption > 2).length;
    const totalConsumption = dailyData.reduce((sum, day) => sum + day.consumption, 0);

    setStats({
      average: average.toFixed(1),
      overLimitDays,
      totalConsumption: totalConsumption.toFixed(1)
    });
  }, [historyData.daily]);

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Historique de consommation</h1>
        
        {/* Graphiques */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Consommation hebdomadaire</h3>
            <LineChart data={historyData.weekly} />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Consommation mensuelle</h3>
            <BarChart data={historyData.monthly} />
          </div>
        </div>
        
        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-lg border border-blue-200">
            <h3 className="font-semibold text-blue-700 mb-2">Consommation moyenne</h3>
            <p className="text-3xl font-bold text-blue-600">{stats.average} <span className="text-lg">Go/jour</span></p>
          </div>
          
          <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-700 mb-2">Jours de dépassement</h3>
            <p className="text-3xl font-bold text-red-600">{stats.overLimitDays} <span className="text-lg">jours</span></p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-4 rounded-lg border border-purple-200">
            <h3 className="font-semibold text-purple-700 mb-2">Total période</h3>
            <p className="text-3xl font-bold text-purple-600">{stats.totalConsumption} <span className="text-lg">Go</span></p>
          </div>
        </div>
      </div>

      {/* Tableau détaillé */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Détails jour par jour</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
            Exporter CSV
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Consommation</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { date: '2024-01-15', consumption: 2.1, type: 'Wi-Fi', status: 'normal' },
                { date: '2024-01-14', consumption: 3.2, type: '4G', status: 'dépassement' },
                { date: '2024-01-13', consumption: 1.8, type: 'Wi-Fi', status: 'normal' },
                { date: '2024-01-12', consumption: 2.5, type: '4G', status: 'normal' },
                { date: '2024-01-11', consumption: 2.9, type: '4G', status: 'dépassement' },
                { date: '2024-01-10', consumption: 1.5, type: 'Wi-Fi', status: 'normal' },
                { date: '2024-01-09', consumption: 2.2, type: '4G', status: 'normal' },
              ].map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-800">{item.date}</td>
                  <td className="px-4 py-3 text-sm text-gray-800">
                    <span className="font-medium">{item.consumption} Go</span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.type === '4G' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {item.type}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      item.status === 'dépassement' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;