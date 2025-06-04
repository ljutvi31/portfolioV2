import React, { useState } from 'react'; // Import de React et du hook useState
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react'; // Import des icônes

// Définition du type Project pour typer les projets
type Project = {
  id: number; // Identifiant unique du projet
  title: string; // Titre du projet
  description: string; // Description courte
  image: string; // URL de l'image
  tags: string[]; // Liste des technologies utilisées
  githubUrl?: string; // Lien GitHub (optionnel)
  status: 'finished' | 'ongoing'; // Statut du projet
  details?: string; // Détails supplémentaires (optionnel)
};

const Projects: React.FC = () => {
  // État pour filtrer entre projets terminés et en cours
  const [activeStatus, setActiveStatus] = useState<'finished' | 'ongoing'>('finished');
  // État pour savoir quel projet est déplié (voir plus)
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  
  // Liste des projets
  const projects: Project[] = [
    {
      id: 1,
      title: "Booki",
      description: "Site d'agence de voyage, création de la page d'accueil.",
      image: "https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["HTML", "CSS"],
      githubUrl: "https://github.com/ljutvi31/P2-pageWeb.git",
      status: "finished"
    },
    {
      id: 2,
      title: "Sophie Bluel",
      description: "Portfolio dynamique d'architecte développé en JavaScript avec gestion d'API.",
      image: "https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["JavaScript", "HTML", "CSS", "API REST"],
      githubUrl: "https://github.com/ljutvi31/projet3.git",
      status: "finished",
      details: `Objectif
Dynamiser une page statique avec JavaScript et gérer les requêtes API.

Compétences acquises
✔ Récupérer et afficher des données d'une API.
✔ Gérer l'authentification utilisateur avec un token.
✔ Modifier dynamiquement le contenu de la page avec JavaScript (DOM).

Difficultés rencontrées et solutions
• Problème : Comprendre la logique des appels API et leur réponse.
  Solution : J'ai utilisé fetch() et async/await pour mieux comprendre le fonctionnement des promesses et la gestion des erreurs.
• Problème : Gérer les erreurs d'authentification et de connexion.
  Solution : Mise en place d'une gestion d'erreur et affichage de messages d'erreur explicites pour l'utilisateur.
• Problème : Structurer mon code pour qu'il soit plus lisible.
  Solution : J'ai séparé la logique en plusieurs fonctions réutilisables et organisé mon code en modules.`
    },
    {
      id: 3,
      title: "Nina Carducci",
      description: "Site vitrine de photographe avec optimisation SEO.",
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["HTML", "CSS", "JavaScript", "SEO", "Lighthouse", "Wave"],
      githubUrl: "https://github.com/ljutvi31/Projet4-Debug-site-.git",
      status: "finished"
    },
    {
      id: 4,
      title: "Kasa",
      description: "Application web de location immobilière développée avec React.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "React Router", "SASS"],
      githubUrl: "https://github.com/ljutvi31/Projet5-LocationImmo-React.git",
      status: "finished",
      details: `Objectif
Développer une application avec React et organiser le code en composants réutilisables.

Compétences acquises
✔ Utilisation de React Router pour la navigation.
✔ Manipulation du state avec useState et useParams.
✔ Structuration d'un projet en composants réutilisables.

Difficultés rencontrées et solutions
• Problème : Organisation des fichiers dans un projet React.
  Solution : J'ai suivi les conventions de structuration des fichiers React et séparé les composants et les pages pour une meilleure lisibilité.
• Problème : Gérer les données dynamiquement sans rafraîchir la page.
  Solution : Utilisation du state et des hooks React pour assurer une mise à jour dynamique.
• Problème : Correction des erreurs React, notamment les clés dans .map().
  Solution : Ajout d'une clé unique à chaque élément de liste pour éviter les erreurs de rendu.`
    },
    {
      id: 5,
      title: "Mon Vieux Grimoire",
      description: "Site de notation de livres - Backend API avec Node.js",
      image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt", "Sharp"],
      githubUrl: "https://github.com/ljutvi31/P6-MonVieuxGrimmoire.git",
      status: "finished"
    },
    {
      id: 6,
      title: "MERN Stack Project",
      description: "Application en cours de développement utilisant MongoDB, Express, React et Node.js",
      image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["MongoDB", "Express", "React", "Node.js"],
      githubUrl: "https://github.com/ljutvi31/mern.git",
      status: "ongoing"
    },
    {
      id: 7,
      title: "Studio Nephew",
      description: "Projet de site web pour un studio de production musicale",
      image: "https://images.pexels.com/photos/164938/pexels-photo-164938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js", "Express"],
      githubUrl: "https://github.com/ljutvi31/studionephew.git",
      status: "ongoing"
    },
    {
      id: 8,
      title: "Moonlysa",
      description: "Site web en développement pour un projet personnel",
      image: "https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["React", "Node.js"],
      githubUrl: "https://github.com/ljutvi31/moonlysa.git",
      status: "ongoing"
    }
  ];

  // Filtre les projets selon le statut sélectionné
  const filteredProjects = projects.filter(project => project.status === activeStatus);

  // Fonction pour ouvrir/fermer les détails d'un projet
  const toggleProjectDetails = (projectId: number) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    // Section principale des projets
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        {/* Titre et description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Projets
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-800 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez mes projets terminés et en cours de développement. Chaque projet reflète 
            mon engagement pour la qualité et l'innovation.
          </p>
        </div>
        
        {/* Boutons pour filtrer les projets */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveStatus('finished')}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeStatus === 'finished'
                ? 'bg-blue-800 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Projets terminés
          </button>
          <button
            onClick={() => setActiveStatus('ongoing')}
            className={`px-6 py-3 rounded-lg transition-all ${
              activeStatus === 'ongoing'
                ? 'bg-blue-800 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            }`}
          >
            Projets en cours
          </button>
        </div>
        
        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image du projet */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-between items-center">
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                  {/* Lien GitHub si disponible */}
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 bg-opacity-70 rounded-full text-white hover:bg-blue-800 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
              {/* Contenu du projet */}
              <div className="p-6">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                {/* Tags/technos */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Détails supplémentaires (voir plus) */}
                {project.details && (
                  <div className="mt-4 border-t border-gray-200 dark:border-gray-700 pt-4">
                    <button
                      onClick={() => toggleProjectDetails(project.id)}
                      className="flex items-center justify-between w-full text-blue-800 dark:text-teal-400 hover:underline"
                    >
                      <span>Voir plus</span>
                      {expandedProject === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>
                    {expandedProject === project.id && (
                      <div className="mt-4 text-gray-700 dark:text-gray-300 whitespace-pre-line">
                        {project.details}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; // Export du composant Projects