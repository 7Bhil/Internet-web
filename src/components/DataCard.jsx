import React from 'react';

const DataCard = ({
  title,
  used,
  total,
  unit,
  type,
  percentage,
  color = 'blue',
}) => {
  const colorClasses = {
    blue: 'bg-blue-100 text-blue-800',
    purple: 'bg-purple-100 text-purple-800',
    green: 'bg-green-100 text-green-800',
  };

  const progressColors = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    green: 'bg-green-600',
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {type && (
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${colorClasses[color]}`}
          >
            {type}
          </span>
        )}
      </div>

      <div className="mb-4">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">{used}</span>
          <span className="text-lg text-gray-600 ml-1">{unit}</span>
          <span className="text-gray-500 ml-2">
            / {total} {unit}
          </span>
        </div>
        <div className="text-gray-600 mt-1">{percentage}% utilisé</div>
      </div>

      {/* Barre de progression */}
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${progressColors[color]}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm text-gray-600 mt-2">
        <span>0 {unit}</span>
        <span>
          {total} {unit}
        </span>
      </div>
    </div>
  );
};

export default DataCard;
