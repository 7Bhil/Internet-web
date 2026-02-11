import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const LineChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Consommation quotidienne (7 derniers jours)',
      },
    },
  };

  const chartData = {
    labels: data?.labels || ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [
      {
        label: 'Consommation (Go)',
        data: data?.values || [1.2, 2.1, 1.8, 2.5, 3.2, 2.8, 2.4],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.4,
      },
    ],
  };

  return <Line options={options} data={chartData} />;
};

export const BarChart = ({ data }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Consommation mensuelle',
      },
    },
  };

  const chartData = {
    labels: data?.labels || ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Consommation (Go)',
        data: data?.values || [42, 38, 45, 52, 48, 50],
        backgroundColor: 'rgba(99, 102, 241, 0.8)',
      },
    ],
  };

  return <Bar options={options} data={chartData} />;
};
