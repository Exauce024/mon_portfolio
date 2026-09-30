# Portfolio Full-Stack - Exaucé Banza 🚀

> **Développeur Full Stack & Analyste Développeur**  
> *"Conception de solutions web sur mesure, d'APIs robustes et d'architectures de bases de données optimisées pour la gestion d'entreprise."*

---

## 🛠️ Tech Stack & Architecture

- **Backend** : Node.js, Express.js, TypeScript, Architecture en couches (Controllers, Services, Routes, Middlewares).
- **Frontend** : HTML5 Sémantique, TypeScript (Strict), Tailwind CSS, Vite, Lucide Icons, Glassmorphism, animations fluides.
- **Thème** : Support complet du **Mode Sombre** & **Mode Clair** (Dark/Light mode avec sauvegarde `localStorage`).
- **Contact Hub** : Hub de contact direct ultra-rapide (Email 1-clic avec Toast, WhatsApp direct, LinkedIn, GitHub, GitLab).

---

## 📁 Structure du Projet

```text
Portfolio/
├── src/
│   ├── server/              # Backend Express + TypeScript
│   │   ├── controllers/     # Gestionnaires de requêtes API
│   │   ├── services/        # Logique métier & données
│   │   ├── routes/          # Définitions des routes API
│   │   ├── middlewares/     # Securité & Error Handler
│   │   ├── types/           # Interfaces & types TS
│   │   ├── app.ts           # Configuration Express
│   │   └── index.ts         # Serveur Express
│   └── client/              # Frontend Vite + Tailwind + TypeScript
│       ├── index.html       # Application web
│       ├── styles/          # Tailwind CSS & thèmes bimodal
│       └── scripts/         # Theme switcher, modals, filter, toast & API
├── package.json             # Dépendances et scripts
├── tsconfig.json            # Configuration TypeScript Client
├── tsconfig.server.json     # Configuration TypeScript Serveur
├── vite.config.ts           # Configuration Vite + Proxy API Express
└── tailwind.config.js       # Système de design Tailwind bimodal
```

---

## 🚀 Démarrage Rapide

### 1. Installation des dépendances
```bash
npm install
```

### 2. Lancer l'environnement de développement
Pour exécuter le serveur Backend (Express API sur `http://localhost:5000`) et le Client Frontend (Vite sur `http://localhost:3000`) en simultané :
```bash
npm run dev
```

### 3. Builder pour la production
```bash
npm run build
npm start
```
