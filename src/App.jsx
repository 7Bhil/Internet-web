import { useState, useEffect } from 'react';
import {
  Download,
  Smartphone,
  TrendingUp,
  Shield,
  Zap,
  BarChart3,
  Wifi,
  Database,
} from 'lucide-react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header/Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wifi className="w-8 h-8 text-blue-400" />
              <span className="text-2xl font-bold text-white">ConsoNet</span>
            </div>
            <a
              href="#download"
              className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Télécharger
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Maîtrisez votre
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Consommation Réseau
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 animate-fade-in-delay">
              Suivez, analysez et optimisez votre utilisation de données mobiles
              en temps réel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-2">
              <a
                href="#download"
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center space-x-2"
              >
                <Download className="w-6 h-6" />
                <span>Télécharger l'APK</span>
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full font-bold text-lg transition-all duration-300 border border-white/20"
              >
                Découvrir les fonctionnalités
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pourquoi ConsoNet ?
            </h2>
            <p className="text-xl text-gray-400">
              Des fonctionnalités puissantes pour gérer vos données
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 bg-gradient-to-br from-blue-900/50 to-slate-900/50 rounded-2xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Tracking Intelligent
              </h3>
              <p className="text-gray-400">
                Système de snapshot qui capture votre consommation même lorsque
                l'app est fermée. Zéro impact sur la batterie.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-gradient-to-br from-cyan-900/50 to-slate-900/50 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Statistiques Précises
              </h3>
              <p className="text-gray-400">
                Utilise l'API Android TrafficStats pour des mesures 100% fiables
                et précises de votre consommation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-gradient-to-br from-purple-900/50 to-slate-900/50 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Confidentialité
              </h3>
              <p className="text-gray-400">
                Vos données restent sur votre appareil. Aucune collecte, aucun
                tracking externe, 100% privé.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-8 bg-gradient-to-br from-pink-900/50 to-slate-900/50 rounded-2xl border border-pink-500/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-pink-500/20 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Aucun Service Background
              </h3>
              <p className="text-gray-400">
                Pas de service en arrière-plan ni de notification permanente.
                Simple et efficace.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-8 bg-gradient-to-br from-green-900/50 to-slate-900/50 rounded-2xl border border-green-500/20 hover:border-green-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                <Database className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Historique Complet
              </h3>
              <p className="text-gray-400">
                Consultez votre consommation quotidienne, hebdomadaire et
                mensuelle avec des graphiques détaillés.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-8 bg-gradient-to-br from-orange-900/50 to-slate-900/50 rounded-2xl border border-orange-500/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                <Smartphone className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Interface Moderne
              </h3>
              <p className="text-gray-400">
                Design élégant et intuitif avec mode sombre, animations fluides
                et expérience utilisateur premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl border border-blue-500/30 backdrop-blur-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prêt à économiser vos données ?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Téléchargez ConsoNet v1.0.0-beta maintenant et prenez le
                contrôle de votre consommation réseau
              </p>
              <div className="flex flex-col items-center gap-6">
                <a
                  href="https://github.com/7Bhil/Internet-mobile/releases/download/v1.0.0-beta/app-release.apk"
                  className="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-full font-bold text-xl transition-all duration-300 hover:scale-110 shadow-2xl"
                >
                  <Download className="w-7 h-7 group-hover:animate-bounce" />
                  <span>Télécharger l'APK (50.5 MB)</span>
                </a>
                <p className="text-sm text-gray-400">
                  Version: v1.0.0-beta • Compatible Android 6.0+
                </p>
                <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                  <p className="text-yellow-200 text-sm">
                    ⚠️ Assurez-vous d'autoriser l'installation d'applications
                    tierces dans vos paramètres Android
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-950/50 border-t border-slate-800">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Wifi className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold text-white">ConsoNet</span>
          </div>
          <p className="text-gray-400 mb-4">
            Gérez intelligemment votre consommation réseau
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/7Bhil/Internet-mobile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">v1.0.0-beta</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
