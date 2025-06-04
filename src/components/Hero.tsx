import React from "react";
import { ArrowDown, Github, Mail } from "lucide-react";

// Composant principal de la section Hero (accueil avec présentation)
const Hero: React.FC = () => {
  // Fonction de scroll fluide vers la section "projects"
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Section principale avec fond en dégradé et animations
    <section
      id="Accueil"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
    >
      {/* Bloc de contenu central : titre, texte, boutons */}
      <div className="relative z-10 px-4 text-center">
        {/* Badge "Développeur Full Stack" */}
        <span className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          Développeur Full Stack
        </span>

        {/* Titre principal avec le nom coloré */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Bonjour, je suis{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-amber-500">
            Ljutvi Harryum
          </span>
        </h1>

        {/* Paragraphe de présentation */}
        <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg mb-10 leading-relaxed">
          Développeur Web Après avoir exploré divers horizons, je me suis plongé
          dans le monde fascinant du développement web. En pleine reconversion
          professionnelle, j’ai suivi une formation intensive de 7 mois en
          partant de zéro, qui m’a révélé un univers aussi complexe que
          captivant...
        </p>

        {/* Boutons de navigation ("Voir mes projets", "Me contacter") */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-800 text-white rounded-full font-medium hover:bg-blue-900 transition-colors"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-800 text-blue-800 dark:text-blue-300 rounded-full font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Me contacter
          </a>
        </div>

        {/* Icônes sociales (GitHub, mail) */}
        <div className="flex justify-center gap-4 text-gray-600 dark:text-gray-300 mb-6">
          <a
            href="https://github.com/ljutvi31"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a href="mailto:ljutvi.h@gmail.com">
            <Mail />
          </a>
        </div>

        {/* Bouton flèche vers le bas avec animation rebond */}
        <button onClick={scrollToProjects}>
          <div className="mx-auto mt-6 flex justify-center items-center w-10 h-10 rounded-full shadow-md bg-white dark:bg-gray-800 hover:scale-105 animate-bounce transition-transform">
            <ArrowDown className="w-6 h-6 text-gray-800 dark:text-white" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
