import React from 'react';
import { LineChart, BarChart } from './ConsumptionChart';

const Dashboard = ({ consumption }) => {
  // Préparer les données pour le graphique
  const prepareChartData = () => {
    if (!consumption.history || consumption.history.length === 0) {
      return {
        labels: ['Aucune donnée'],
        values: [0]
      };
    }

    // Prendre les 7 derniers jours
    const last7Days = consumption.history.slice(-7);
    
    return {
      labels: last7Days.map(day => {
        const date = new Date(day.date);
        return date.toLocaleDateString('fr-FR', { weekday: 'short' });
      }),
      values: last7Days.map(day => parseFloat(day.consumption.toFixed(2)))
    };
  };

  const chartData = prepareChartData();

  return (
    <div className="space-y-8">
      <LineChart data={chartData} />
      
      {consumption.history?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Détails des 7 derniers jours</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Consommation</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Statut</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {consumption.history.slice(-7).reverse().map((day, index) => {
                  const date = new Date(day.date);
                  const isOverLimit = day.consumption > 2; // 2 Go limite quotidienne
                  
                  return (
                    <tr key={index}>
                      <td className="px-4 py-3 text-sm text-gray-800">
                        {date.toLocaleDateString('fr-FR', { 
                          weekday: 'long',
                          day: 'numeric',
                          month: 'short'
                        })}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-800">
                        {day.consumption.toFixed(2)} Go
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          isOverLimit 
                            ? 'bg-red-100 text-red-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {isOverLimit ? 'Dépassement' : 'Normal'}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;