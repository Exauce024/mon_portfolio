export interface ClientProject {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'backend' | 'fullstack' | 'management';
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  metrics?: string;
  architectureNotes?: string;
  githubUrl?: string;
  featured: boolean;
}

export const PROJECTS_DATA: ClientProject[] = [
  {
    id: 'leave-go',
    title: 'Leave Go',
    subtitle: 'Plateforme de gestion & suivi des congés et absences',
    category: 'fullstack',
    description: 'Solution d\'entreprise dédiée à la numérisation complète du circuit de validation des demandes de congés et d\'autorisations d\'absence avec suivi hiérarchique.',
    longDescription: 'Leave Go est une application web d\'envergure conçue pour une grande institution publique. Elle numérise les circuits d\'autorisations de congés en éliminant le papier, en instaurant un workflow d\'approbation hiérarchique multi-niveaux et en calculant en temps réel les soldes statutaires.',
    technologies: ['Laravel', 'PHP 8', 'MySQL', 'Tailwind CSS', 'JavaScript', 'UML'],
    features: [
      'Workflow d\'approbation à 3 niveaux (Chef de service, Direction RH, DG)',
      'Calcul automatique des droits et soldes de congés annuels',
      'Notifications automatisées en temps réel par courriel et in-app',
      'Tableau de bord RH interactif avec statistiques de présence',
      'Génération d\'attestations et titres de congés au format PDF sécurisé'
    ],
    metrics: 'Gain de 70% sur le délai de traitement administratif des congés',
    architectureNotes: 'Architecture MVC Laravel robuste. Modélisation UML complète sous Enterprise Architect (Diagrammes de séquences et d\'états-transitions). Base de données MySQL normalisée en 3NF.',
    githubUrl: 'https://github.com/exaucebanza/leave-go',
    featured: true
  },
  {
    id: 'supply-chain',
    title: 'Chaîne d\'Approvisionnement',
    subtitle: 'Suivi des stocks et matières premières selon la méthode FIFO',
    category: 'backend',
    description: 'Système d\'information logistique appliquant la méthode d\'épuisement des stocks FIFO pour la traçabilité des matières premières brassicoles.',
    longDescription: 'Développé pour optimiser le département logistique d\'une grande industrie, ce système d\'information garantit un suivi précis des flux d\'entrée et sortie des matières premières. L\'application de l\'algorithme FIFO évite les pertes dues aux péremptions.',
    technologies: ['Django REST Framework', 'Node.js', 'Express', 'MySQL', 'TypeScript', 'Docker'],
    features: [
      'Algorithme automatique d\'attribution des lots selon la règle FIFO',
      'Alertes proactives de franchissement de seuil de réapprovisionnement',
      'Gestion des numéros de lots, dates de fabrication et d\'expiration',
      'APIs RESTful sécurisées avec authentification JWT pour ERP',
      'Tableau de suivi des rotations de stocks et consommation journalière'
    ],
    metrics: '95% de réduction du taux de perte de matières premières',
    architectureNotes: 'Architecture micro-services hybride Django REST & Node.js/Express. Conteneurisation complète sous Docker pour déploiement rapide sur VPS.',
    githubUrl: 'https://github.com/exaucebanza/supply-chain',
    featured: true
  },
  {
    id: 'pre-registration',
    title: 'Pré-enregistrement & File d\'Attente',
    subtitle: 'Module web de pré-inscription pour la capture des permis',
    category: 'web',
    description: 'Plateforme citoyenne et module opérateur permettant la pré-saisie des données biographiques pour accélérer l\'enrôlement des permis de conduire.',
    longDescription: 'Ce module web moderne permet aux citoyens de remplir en ligne leurs données d\'état civil et de téléverser leurs pièces justificatives avant de se présenter aux centres d\'enrôlement, réduisant drastiquement les files d\'attente.',
    technologies: ['Node.js', 'Express.js', 'EJS', 'MariaDB', 'Bootstrap', 'JavaScript'],
    features: [
      'Portail citoyen avec vérification dynamique des champs obligatoires',
      'Génération de récépissé d\'inscription horodaté avec QR Code',
      'Interface d\'accueil guichet avec lecteur de QR Code',
      'Gestion dynamique et ordonnée de la file d\'attente physique',
      'Base MariaDB hautement disponible et sécurisée'
    ],
    metrics: 'Plus de 400 dossiers d\'enrôlement fluidifiés par jour et par centre',
    architectureNotes: 'Architecture SSR (Server-Side Rendering) avec Express et EJS pour garantir un temps d\'affichage instantané sur tout type de terminal.',
    githubUrl: 'https://github.com/exaucebanza/preregistration',
    featured: true
  },
  {
    id: 'gestion-commerciale-facturation',
    title: 'Gestion Commerciale & Facturation',
    subtitle: 'Application SaaS de vente, stock et factures PDF automatisées',
    category: 'management',
    description: 'Application de gestion d\'entreprise complète couvrant les ventes, la gestion de caisse, l\'inventaire et l\'émission de factures normalisées.',
    longDescription: 'Une solution digitale intégrée permettant aux commerces et PME de suivre leurs ventes journalières, de surveiller les mouvements de stock en temps réel et d\'émettre automatiquement des factures et reçus professionnels.',
    technologies: ['PHP 8', 'MySQL', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Dompdf', 'Tailwind CSS'],
    features: [
      'Point de vente (POS) rapide avec recherche instantanée d\'articles',
      'Édition et génération automatique de factures PDF professionnelles',
      'Rapprochement de caisse quotidien et rapports de rentabilité',
      'Alerte automatique de stock minimal par produit',
      'Multi-utilisateurs avec droits d\'accès personnalisés (Vendeur, Gérant, Admin)'
    ],
    metrics: '+15 entreprises accompagnées dans la digitalisation de leur comptabilité',
    architectureNotes: 'Structure PHP POO modulaire, requêtes AJAX pour une réactivité optimale et moteur Dompdf pour la génération de documents au pixel près.',
    githubUrl: 'https://github.com/exaucebanza/gestion-commerciale-pdf',
    featured: true
  }
];
