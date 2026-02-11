// Service pour suivre la consommation réseau
class NetworkTracker {
  constructor() {
    this.initialData = null;
    this.consumption = {
      today: 0,
      month: 0,
      history: [],
    };

    this.loadFromStorage();
    this.initializePerformanceObserver();
  }

  // Charger depuis localStorage
  loadFromStorage() {
    const saved = localStorage.getItem('consonet_data');
    if (saved) {
      this.consumption = JSON.parse(saved);
    }
  }

  // Sauvegarder dans localStorage
  saveToStorage() {
    localStorage.setItem('consonet_data', JSON.stringify(this.consumption));
  }

  // Observer les requêtes réseau
  initializePerformanceObserver() {
    if ('performance' in window && PerformanceObserver) {
      const observer = new PerformanceObserver(list => {
        list.getEntries().forEach(entry => {
          if (
            entry.initiatorType === 'fetch' ||
            entry.initiatorType === 'xmlhttprequest'
          ) {
            const size = entry.transferSize || 0;
            this.addConsumption(size);
          }
        });
      });

      observer.observe({ entryTypes: ['resource'] });
    }
  }

  // Ajouter consommation
  addConsumption(bytes) {
    const mb = bytes / (1024 * 1024);
    const today = new Date().toISOString().split('T')[0];

    // Mettre à jour consommation du jour
    this.consumption.today += mb;

    // Mettre à jour consommation du mois
    this.consumption.month += mb;

    // Ajouter à l'historique
    const todayEntry = this.consumption.history.find(
      entry => entry.date === today
    );
    if (todayEntry) {
      todayEntry.consumption += mb;
    } else {
      this.consumption.history.push({
        date: today,
        consumption: mb,
      });
    }

    this.saveToStorage();
  }

  // Obtenir les statistiques
  getStats() {
    return {
      today: this.consumption.today,
      month: this.consumption.month,
      history: this.consumption.history.slice(-30), // 30 derniers jours
      average:
        this.consumption.history.length > 0
          ? this.consumption.history.reduce(
              (sum, day) => sum + day.consumption,
              0
            ) / this.consumption.history.length
          : 0,
    };
  }

  // Réinitialiser les données
  resetData() {
    this.consumption = {
      today: 0,
      month: 0,
      history: [],
    };
    this.saveToStorage();
  }
}

export const networkTracker = new NetworkTracker();
