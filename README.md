# ConsoNet - Internet Mobile

Application web moderne et complète pour suivre, analyser et optimiser votre consommation de données mobiles en temps réel. Conçue avec les meilleures pratiques du développement web moderne.

## 📋 Table des Matières

- [Présentation](#-présentation)
- [Fonctionnalités](#-fonctionnalités)
- [Stack Technique](#️-stack-technique)
- [Installation](#-installation)
- [Scripts Disponibles](#️-scripts-disponibles)
- [Structure du Projet](#-structure-du-projet)
- [Architecture](#-architecture)
- [Développement](#-développement)
- [Tests](#-tests)
- [API](#-api)
- [Déploiement](#-déploiement)
- [Contribuer](#-contribuer)
- [Licence](#-licence)

## 🎯 Présentation

ConsoNet est une solution innovante qui permet aux utilisateurs de prendre le contrôle total de leur consommation de données mobiles. Dans un monde où la connectivité est essentielle mais les forfaits data sont limités, notre application offre une visibilité complète sur vos habitudes de consommation.

### Problématique Résolue

- **Manque de visibilité** sur la consommation réelle de données
- **Factures surprises** en fin de mois dûes aux dépassements
- **Gestion manuelle** complexe des différents types de connexions
- **Absence d'historique** détaillé pour analyser les tendances

### Solution Apportée

Une interface intuitive qui automatise le suivi, fournit des analyses pertinentes et aide à optimiser l'utilisation des données mobiles.

## 🚀 Fonctionnalités

### 📊 Suivi en Temps Réel

- **Monitoring automatique** de toutes les connexions réseau (4G/5G, Wi-Fi)
- **Détection intelligente** des applications gourmandes en données
- **Mises à jour instantanées** de l'interface utilisateur
- **Calcul précis** de la consommation en Go/Mo

### 📈 Analyse Détaillée

- **Graphiques interactifs** (courbes, barres, camemberts)
- **Analyse temporelle** (journalière, hebdomadaire, mensuelle)
- **Comparaison par application** et par type de connexion
- **Tendances et prédictions** basées sur l'historique

### 🔔 Alertes Personnalisées

- **Seuils configurables** (80%, 90%, 100% du forfait)
- **Notifications multi-canales** (navigateur, email, SMS)
- **Alertes intelligentes** basées sur les habitudes d'utilisation
- **Recommandations** d'optimisation

### 📱 Interface Responsive

- **Design adaptatif** pour tous les écrans (mobile, tablette, desktop)
- **Interface Material Design** moderne et intuitive
- **Mode sombre/clair** automatique ou manuel
- **Accessibilité** WCAG 2.1 AA compliant

### 💾 Export et Sauvegarde

- **Export CSV** pour analyse dans Excel/Google Sheets
- **Export PDF** des rapports mensuels
- **Sauvegarde cloud** des données historiques
- **API REST** pour intégration tierce

### 🔒 Sécurité et Confidentialité

- **Données locales** par défaut (localStorage)
- **Chiffrement** des informations sensibles
- **Aucun tracking** publicitaire
- **Conformité RGPD**

## 🛠️ Stack Technique

### Frontend Core

- **React 19** : Dernière version avec Concurrent Features
- **Vite 7** : Build tool ultra-rapide avec HMR
- **TypeScript Ready** : Support complet du typage statique

### Styling & UI

- **TailwindCSS 3.4** : Utility-first CSS framework
- **Lucide React** : Icônes modernes et cohérentes
- **CSS Variables** : Thématisation dynamique

### Data Visualization

- **Chart.js 4.5** : Bibliothèque de graphiques puissante
- **react-chartjs-2** : Intégration React optimisée
- **D3.js Ready** : Visualisations avancées (optionnel)

### Routing & State

- **React Router DOM 7** : Routing client-side
- **Context API** : Gestion d'état locale
- **Custom Hooks** : Logique réutilisable

### Development Tools

- **ESLint 9** : Linting avec règles React modernes
- **Prettier 3** : Formatage de code automatique
- **Husky** : Git hooks pour la qualité
- **lint-staged** : Optimisation des commits

### Testing

- **Vitest** : Framework de tests ultra-rapide
- **React Testing Library** : Tests utilisateur-focused
- **jsdom** : Environnement DOM virtuel
- **Coverage Reports** : Analyse de couverture

### API & Mock

- **JSON Server 0.17** : API REST mock complète
- **axios** : Client HTTP robuste
- **Custom Services** : Architecture modulaire

## 📦 Installation

### Prérequis

- **Node.js** 18.0+ (recommandé 20.x LTS)
- **npm** 9.0+ ou **yarn** 1.22+
- **Git** 2.30+

### Installation Pas à Pas

```bash
# 1. Cloner le dépôt
git clone https://github.com/votre-username/consonet.git
cd consonet

# 2. Accéder au répertoire web
cd web

# 3. Installer les dépendances
npm install

# 4. Vérifier l'installation
npm run lint

# 5. Démarrer le serveur de développement
npm run dev

# 6. Démarrer l'API mock (dans un autre terminal)
npm run server
```

### Configuration Initiale

1. **Variables d'environnement** (optionnel) :

```bash
cp .env.example .env.local
# Éditer .env.local avec vos configurations
```

2. **Configuration ESLint** :

```bash
# Personnaliser les règles dans eslint.config.js
```

3. **Configuration Prettier** :

```bash
# Adapter le formatage dans .prettierrc
```

## 🛠️ Scripts Disponibles

### Développement

```bash
npm run dev          # Serveur de développement (localhost:5173)
npm run server       # API mock (localhost:3001)
npm run preview      # Preview du build de production
```

### Build & Qualité

```bash
npm run build        # Build de production optimisé
npm run lint         # Vérification ESLint
npm run format       # Formatage Prettier
npm run format:check # Vérification du formatage
```

### Tests

```bash
npm run test         # Lancer tous les tests
npm run test:ui      # Interface visuelle des tests
npm run test:coverage # Rapport de couverture
```

### Git Hooks

```bash
npm run prepare      # Installation des hooks Husky
```

## 📁 Structure du Projet

```
consonet/
├── README.md                    # Documentation principale
├── web/                         # Application React
│   ├── public/                  # Assets statiques
│   │   ├── favicon.ico         # Icône du site
│   │   ├── manifest.json       # PWA manifest
│   │   └── robots.txt          # SEO robots
│   ├── src/                     # Code source
│   │   ├── components/         # Composants réutilisables
│   │   │   ├── ConsumptionChart.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── DataCard.jsx
│   │   │   └── Header.jsx
│   │   ├── pages/              # Pages principales
│   │   │   ├── Home.jsx        # Page d'accueil
│   │   │   ├── History.jsx     # Historique
│   │   │   └── Settings.jsx    # Paramètres
│   │   ├── hooks/              # Hooks personnalisés
│   │   │   ├── useConsumption.js
│   │   │   └── useRealConsumption.js
│   │   ├── services/           # Services et API
│   │   │   ├── api.js          # Client API
│   │   │   ├── mockData.js     # Données de test
│   │   │   └── networkTracker.js # Tracking réseau
│   │   ├── test/               # Configuration des tests
│   │   │   └── setup.js        # Setup global
│   │   ├── assets/             # Assets dynamiques
│   │   ├── App.jsx             # Composant racine
│   │   ├── App.css             # Styles globaux
│   │   ├── index.css           # Styles de base
│   │   └── main.jsx            # Point d'entrée
│   ├── db.json                 # Données API mock
│   ├── package.json            # Dépendances et scripts
│   ├── vite.config.js          # Configuration Vite
│   ├── vitest.config.js        # Configuration tests
│   ├── tailwind.config.js      # Configuration Tailwind
│   ├── eslint.config.js        # Configuration ESLint
│   ├── .prettierrc             # Configuration Prettier
│   ├── .prettierignore         # Fichiers ignorés par Prettier
│   ├── .husky/                 # Git hooks
│   │   └── pre-commit          # Hook pre-commit
│   └── node_modules/           # Dépendances installées
└── consonet_mobile/             # Application mobile (futur)
```

## 🏗️ Architecture

### Architecture Composants

```
App (Root)
├── Header (Navigation)
├── Router
│   ├── Home (Dashboard)
│   │   ├── DataCard (Statistiques)
│   │   └── ConsumptionChart (Graphiques)
│   ├── History (Historique)
│   │   ├── LineChart (Tendances)
│   │   ├── BarChart (Comparaisons)
│   │   └── DataTable (Détails)
│   └── Settings (Paramètres)
│       ├── AlertConfig
│       └── ExportOptions
└── Footer
```

### Flux de Données

1. **NetworkTracker** surveille les requêtes réseau
2. **localStorage** pour la persistance locale
3. **API Service** pour les données externes
4. **React Context** pour l'état global
5. **Custom Hooks** pour la logique métier

### Patterns Utilisés

- **Container/Presentation** : Séparation logique/UI
- **Custom Hooks** : Logique réutilisable
- **Service Layer** : Abstraction des appels API
- **Error Boundaries** : Gestion d'erreurs robuste

## 🔧 Développement

### Environnement de Développement

L'application utilise un environnement de développement moderne avec :

- **Hot Module Replacement** (HMR) pour le rechargement instantané
- **Source Maps** pour le débogage facile
- **Auto-formatage** au save avec Prettier
- **Linting en temps réel** avec ESLint

### Bonnes Pratiques

1. **Components** : Un composant = une responsabilité
2. **Hooks** : Logique réutilisable dans des hooks personnalisés
3. **Services** : Appels API centralisés
4. **Tests** : Tests unitaires pour toute logique métier
5. **Types** : TypeScript progressif pour plus de robustesse

### Conventions de Code

- **Naming** : camelCase pour les variables, PascalCase pour les composants
- **Imports** : Regroupés par type (React, librairies, composants locaux)
- **Exports** : Export par défaut pour les composants principaux
- **Comments** : JSDoc pour les fonctions complexes

### Git Workflow

```bash
# Créer une branche feature
git checkout -b feature/nouvelle-fonctionnalite

# Développer et tester
npm run test
npm run lint

# Commit avec hooks automatiques
git add .
git commit -m "feat: ajouter nouvelle fonctionnalite"

# Push et PR
git push origin feature/nouvelle-fonctionnalite
```

## 🧪 Tests

### Stratégie de Tests

L'application utilise une approche de testing pyramidale :

#### Tests Unitaires (70%)

- **Composants React** avec React Testing Library
- **Hooks personnalisés** avec testing-library/react-hooks
- **Services utilitaires** avec Vitest
- **Fonctions pures** et logique métier

#### Tests d'Intégration (20%)

- **Flux utilisateur** complets
- **Intégration API** avec mock servers
- **Navigation** entre pages

#### Tests E2E (10%)

- **Scénarios utilisateur** critiques
- **Tests multi-navigateurs** (optionnel)

### Écrire des Tests

```javascript
// Exemple de test de composant
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DataCard from '../components/DataCard';

describe('DataCard', () => {
  it('affiche la consommation correctement', () => {
    render(<DataCard value={2.5} unit="Go" label="Aujourd'hui" />);

    expect(screen.getByText('2.5 Go')).toBeInTheDocument();
    expect(screen.getByText("Aujourd'hui")).toBeInTheDocument();
  });
});
```

### Couverture de Code

```bash
# Lancer les tests avec couverture
npm run test:coverage

# Objectifs de couverture
- Statements: 80%+
- Branches: 75%+
- Functions: 80%+
- Lines: 80%+
```

## 📊 API

### Architecture API

L'application utilise une architecture RESTful avec :

- **JSON Server** pour le développement et les tests
- **Endpoints prédictibles** et cohérents
- **Gestion d'erreurs** centralisée
- **Validation** des entrées/sorties

### Endpoints Disponibles

#### Données de Consommation

```http
GET /api/data
# Retourne: Array<ConsumptionEntry>
```

```javascript
// Structure d'une entrée
{
  "id": 1,
  "date": "2024-01-15",
  "consumption": 2.5,
  "type": "mobile|wifi",
  "app": "Netflix"
}
```

#### Alertes

```http
GET /api/alerts
POST /api/alerts
PUT /api/alerts/:id
DELETE /api/alerts/:id
```

```javascript
// Structure d'une alerte
{
  "id": 1,
  "name": "Alerte limite 80%",
  "threshold": 80,
  "type": "percentage|absolute",
  "active": true
}
```

#### Statistiques

```http
GET /api/stats?period=day|week|month
```

```javascript
// Structure des statistiques
{
  "id": 1,
  "totalConsumption": 15.6,
  "mobileConsumption": 8.2,
  "wifiConsumption": 7.4,
  "period": "current_month",
  "trend": "up|down|stable"
}
```

### Client API

```javascript
// Utilisation du service API
import { api } from '../services/api';

// Récupérer les données
const data = await api.getData();

// Créer une alerte
const alert = await api.createAlert({
  name: 'Alerte personnelle',
  threshold: 90,
  type: 'percentage',
});
```

## 🚀 Déploiement

### Build de Production

```bash
# Build optimisé pour production
npm run build

# Résultat dans dist/
# - Code minifié et optimisé
# - Assets versionnés
# - Source maps pour le debug
```

### Options de Déploiement

#### Vercel (Recommandé)

```bash
# Installation Vercel CLI
npm i -g vercel

# Déploiement
vercel --prod
```

#### Netlify

```bash
# Build statique
npm run build

# Déployer le dossier dist/
```

#### Docker

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY dist ./dist
EXPOSE 3000
CMD ["npx", "serve", "-s", "dist", "-l", "3000"]
```

#### Configuration Nginx

```nginx
server {
    listen 80;
    server_name votre-domaine.com;
    root /var/www/consonet/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache des assets statiques
    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Environment Variables

```bash
# Production
VITE_API_URL=https://api.consonet.com
VITE_APP_VERSION=1.0.0
VITE_ENABLE_ANALYTICS=false
```

### Performance

- **Lighthouse Score** : 95+ Performance
- **Core Web Vitals** : Tous verts
- **Bundle Size** : < 500KB gzippé
- **First Contentful Paint** : < 1.5s

## 🤝 Contribuer

### Comment Contribuer

Nous apprécions toutes les contributions ! Voici comment participer :

#### 1. Issues et Bugs

- **Rechercher** les issues existantes
- **Créer une nouvelle issue** avec le template approprié
- **Fournir** un exemple reproductible minimal
- **Taguer** avec les labels pertinents

#### 2. Pull Requests

1. **Fork** le dépôt
2. **Créer** une branche descriptive :
   ```bash
   git checkout -b feature/ajouter-graphique-circulaire
   ```
3. **Développer** avec les bonnes pratiques
4. **Tester** votre code :
   ```bash
   npm run test
   npm run lint
   npm run build
   ```
5. **Committer** avec des messages clairs :
   ```bash
   git commit -m "feat(chart): ajouter graphique circulaire pour les stats"
   ```
6. **Push** et créer la PR

#### 3. Types de Contributions

- **🐛 Bug Fixes** : Corriger des problèmes
- **✨ Features** : Ajouter des fonctionnalités
- **📝 Documentation** : Améliorer la documentation
- **🎨 UI/UX** : Améliorer l'interface
- **⚡ Performance** : Optimiser les performances
- **🧪 Tests** : Améliorer la couverture de tests

### Standards de Code

#### Style Guide

- **ESLint** : Respecter toutes les règles configurées
- **Prettier** : Formatage automatique appliqué
- **Components** : Utiliser les functional components avec hooks
- **Naming** : Noms descriptifs en français ou anglais

#### Commit Messages

Format [Conventional Commits](https://conventionalcommits.org/) :

```
type(scope): description

[optional body]

[optional footer]
```

Types :

- `feat` : Nouvelle fonctionnalité
- `fix` : Correction de bug
- `docs` : Documentation
- `style` : Style/formatage
- `refactor` : Refactoring
- `test` : Tests
- `chore` : Maintenance

#### Review Process

1. **Auto-review** : Les hooks vérifient automatiquement
2. **Peer review** : Au moins un reviewer requis
3. **Tests** : Tous les tests doivent passer
4. **Documentation** : MAJ si nécessaire

### Reconnaissance

- **Contributors** : Liste dans le README
- **Release Notes** : Mention des contributions
- **Badges** : Reconnaissance sur GitHub

## 📄 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour les détails.

### Ce que la licence permet :

✅ **Utilisation commerciale**  
✅ **Modification** du code  
✅ **Distribution**  
✅ **Utilisation privée**

### Conditions :

📄 **Inclure la licence** dans les copies  
📄 **Mentionner l'auteur** original  
❌ **Pas de garantie** expresse

### Contact

- **Mainteneur principal** : [Votre Nom]
- **Email** : contact@consonet.app
- **Site web** : https://consonet.app
- **Issues** : GitHub Issues

---

**Merci d'utiliser ConsoNet !** 🎉

_Made with ❤️ and React_
