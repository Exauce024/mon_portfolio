import { Project } from '../types/index.js';

export class ProjectService {
  private static projects: Project[] = [
    {
      id: 'leave-go',
      title: 'Leave Go',
      subtitle: 'Plateforme de gestion & suivi des congés et absences',
      client: 'Institution Publique',
      category: 'fullstack',
      description: 'Solution d\'entreprise dédiée à la numérisation complète du circuit de validation des demandes de congés et d\'autorisations d\'absence avec suivi hiérarchique et tableau de bord RH.',
      longDescription: 'Leave Go est une application web conçue pour une grande institution publique permettant de fluidifier et sécuriser la gestion du capital humain. Elle remplace les circuits papiers traditionnels par des workflows de validation dynamiques à plusieurs niveaux, un calcul automatique des soldes de congés, et la génération de rapports RH analytiques.',
      technologies: ['Laravel', 'PHP 8', 'MySQL', 'Tailwind CSS', 'JavaScript', 'UML'],
      features: [
        'Workflow de validation hiérarchique dynamique à 3 niveaux',
        'Calcul automatique et en temps réel des solde de congés statutaires',
        'Notification automatique des responsables par email et in-app',
        'Exportation de plannings et d\'états décisionnels en PDF/Excel',
        'Journal d\'audit complet et gestion fine des rôles (RBAC)'
      ],
      metrics: 'Réduction de 70% du temps de traitement des demandes de congés',
      architectureNotes: 'Architecture MVC structurée sous Laravel, modélisation UML des cas d\'utilisation, base MySQL optimisée avec indexation sur les historiques de congés.',
      githubUrl: 'https://github.com/exaucebanza/leave-go',
      featured: true
    },
    {
      id: 'supply-chain',
      title: 'Chaîne d\'Approvisionnement',
      subtitle: 'Système de suivi des stocks et matières premières (FIFO)',
      client: 'Industrie Agroalimentaire',
      category: 'backend',
      description: 'Système d\'information logistique appliquant la méthode d\'épuisement des stocks FIFO pour le suivi rigoureux des entrées, sorties et péremptions des matières premières.',
      longDescription: 'Conçu pour répondre aux exigences industrielles du secteur agroalimentaire, ce système backend avec APIs RESTful garantit une traçabilité sans faille des lots de matières premières. L\'algorithme FIFO assure le déstockage chronologique prioritaire pour minimiser le gaspillage et optimiser le taux de rotation.',
      technologies: ['Django REST Framework', 'Node.js', 'Express', 'MySQL', 'TypeScript', 'Docker'],
      features: [
        'Algorithme FIFO automatique pour la sortie des lots prioritaires',
        'Alertes automatiques de seuil critique et de péremption imminente',
        'Traçabilité par code-barres/QR code des emplacements d\'entreposage',
        'APIs RESTful sécurisées pour l\'interconnexion avec l\'ERP existant',
        'Graphiques de consommation et prévisions de réapprovisionnement'
      ],
      metrics: 'Diminution de 95% des pertes de matières premières liées aux péremptions',
      architectureNotes: 'Architecture découplée API First avec Django REST Framework & Microservice Node.js pour les notifications temps réel. Schéma relationnel MySQL normalisé (3NF).',
      githubUrl: 'https://github.com/exaucebanza/supply-chain',
      featured: true
    },
    {
      id: 'pre-registration',
      title: 'Pré-enregistrement & File d\'Attente',
      subtitle: 'Module de pré-inscription pour capture des permis de conduire',
      client: 'Agence Gouvernementale',
      category: 'web',
      description: 'Plateforme web citoyenne et back-office d\'enrôlement permettant la pré-saisie des données biographiques et la gestion ordonnée des files d\'attente.',
      longDescription: 'Développé pour une agence gouvernementale, ce module simplifie le processus d\'obtention de documents officiels en permettant aux requérants de remplir leurs informations et d\'obtenir un rendez-vous horodaté avec QR code avant leur passage au centre d\'enregistrement.',
      technologies: ['Node.js', 'Express.js', 'EJS', 'MariaDB', 'Bootstrap', 'JavaScript'],
      features: [
        'Formulaire multi-étapes avec validation biométrique des pièces fournies',
        'Génération automatique de récépissé numéroté avec QR Code sécurisé',
        'Gestion prioritaire de la file d\'attente physique au guichet',
        'Module de contrôle pour les opérateurs d\'enrôlement avec scanner',
        'Statistiques journalières de flux et de taux de fréquentation'
      ],
      metrics: '+400 inscriptions traitées par jour par centre avec zéro engorgement',
      architectureNotes: 'Rendu côté serveur Express/EJS pour des performances optimales sur connexions à faible débit, base MariaDB configurée avec réplication.',
      githubUrl: 'https://github.com/exaucebanza/preregistration',
      featured: true
    },
    {
      id: 'gestion-commerciale-facturation',
      title: 'Gestion Commerciale & Facturation',
      subtitle: 'Application SaaS de vente, stock et génération de factures PDF',
      client: 'Solution SaaS PME',
      category: 'management',
      description: 'Application de gestion commerciale complète intégrant la gestion des ventes au comptoir, l\'inventaire dynamique et la génération de factures normalisées.',
      longDescription: 'Solution clé en main destinée aux PME pour centraliser la comptabilité de niveau 1, suivre l\'état des stocks en magasin, appliquer les taxes réglementaires et éditer instantanément des factures PDF imprimables ou envoyées par mail.',
      technologies: ['PHP 8', 'MySQL', 'JavaScript (ES6+)', 'HTML5/CSS3', 'Dompdf', 'Tailwind CSS'],
      features: [
        'Interface de caisse rapide (Point of Sale) avec raccourcis clavier',
        'Génération instantanée de factures et devis au format PDF conforme',
        'Suivi du chiffre d\'affaires, bénéfices nets et créances clients',
        'Gestion multi-magasins et transferts de stocks inter-dépôts',
        'Historique complet des transactions et annulations sécurisées'
      ],
      metrics: 'Adopté par plus de 15 commerces et PME locales avec 100% de fiabilité',
      architectureNotes: 'Architecture monolithique modulaire PHP/MySQL avec requêtes AJAX asynchrones pour des opérations de caisse ultra-rapides sans rechargement.',
      githubUrl: 'https://github.com/exaucebanza/gestion-commerciale-pdf',
      featured: true
    }
  ];

  public static getAllProjects(): Project[] {
    return this.projects;
  }

  public static getProjectById(id: string): Project | undefined {
    return this.projects.find((p) => p.id === id);
  }

  public static getProjectsByCategory(category: string): Project[] {
    if (category === 'all') return this.projects;
    return this.projects.filter((p) => p.category === category);
  }
}
