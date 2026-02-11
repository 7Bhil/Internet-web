import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    dailyLimit: 2,
    monthlyLimit: 100,
    unit: 'Go',
    notifications: {
      email: true,
      push: true,
      threshold: 80,
    },
    theme: 'light',
  });

  const handleInputChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleNotificationChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [key]: value,
      },
    }));
  };

  const handleSave = () => {
    // Sauvegarder dans localStorage
    localStorage.setItem('consonet-settings', JSON.stringify(settings));

    // Appliquer les limites au hook de consommation
    window.dispatchEvent(
      new CustomEvent('settings-updated', { detail: settings })
    );

    alert('Paramètres sauvegardés !');
  };

  // Charger les settings au démarrage
  React.useEffect(() => {
    const savedSettings = localStorage.getItem('consonet-settings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 space-y-8">
        <h1 className="text-2xl font-bold text-gray-800">Paramètres</h1>

        {/* Limites de consommation */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">
            Limites de consommation
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Limite quotidienne ({settings.unit})
              </label>
              <input
                type="number"
                step="0.1"
                value={settings.dailyLimit}
                onChange={e =>
                  handleInputChange('dailyLimit', parseFloat(e.target.value))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Limite mensuelle ({settings.unit})
              </label>
              <input
                type="number"
                value={settings.monthlyLimit}
                onChange={e =>
                  handleInputChange('monthlyLimit', parseFloat(e.target.value))
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unité de mesure
              </label>
              <select
                value={settings.unit}
                onChange={e => handleInputChange('unit', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Mo">Mo</option>
                <option value="Go">Go</option>
              </select>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700">Notifications</h2>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Notifications par email</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.email}
                  onChange={e =>
                    handleNotificationChange('email', e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700">Notifications push</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications.push}
                  onChange={e =>
                    handleNotificationChange('push', e.target.checked)
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Seuil de notification (%)
              </label>
              <input
                type="range"
                min="50"
                max="100"
                value={settings.notifications.threshold}
                onChange={e =>
                  handleNotificationChange(
                    'threshold',
                    parseInt(e.target.value)
                  )
                }
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-sm text-gray-600 mt-1">
                Alerte à {settings.notifications.threshold}% de la limite
              </div>
            </div>
          </div>
        </div>

        {/* Bouton de sauvegarde */}
        <div className="pt-4">
          <button
            onClick={handleSave}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition duration-200"
          >
            Sauvegarder les paramètres
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
