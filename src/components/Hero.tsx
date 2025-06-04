import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="Accueil" 
      className="min-h-screen flex flex-col justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-300 dark:bg-teal-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-amber-300 dark:bg-amber-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6 inline-block">
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 text-sm font-medium">
              Développeur Full-Stack
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            <span className="block">Bonjour, je suis</span>
            <span className="bg-gradient-to-r from-blue-800 via-teal-500 to-amber-500 bg-clip-text text-transparent">
              Ljutvi Harryum
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            Développeur Web

Après avoir exploré divers horizons, je me suis plongé dans le monde fascinant du développement web. En pleine reconversion professionnelle, j’ai suivi une formation intensive de 7 mois en partant de zéro, qui m’a révélé un univers aussi complexe que captivant. Chaque ligne de code est une opportunité d’innover, de créer et d’exprimer ce que l'on est. Aujourd’hui, je souhaite développer des applications modernes et accessibles, avec une ambition claire : améliorer mes compétences, en acquérir de nouvelles avec passion et intérêt.
            Je développe des applications web élégantes, réactives et performantes avec les technologies modernes.
            Travaillons ensemble pour donner vie à vos projets.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <button 
              onClick={scrollToProjects}
              className="px-6 py-3 rounded-full bg-blue-800 text-white hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
            >
              Voir mes projets
            </button>
            <a 
              href="mailto:ljutvi.h@gmail.com" 
              className="px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-blue-800 dark:text-teal-400 border border-blue-800 dark:border-teal-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Me contacter
            </a>
          </div>
          
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/ljutvi31" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-teal-400 shadow-md hover:shadow-lg transition-all"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:ljutvi.h@gmail.com" 
              className="p-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-teal-400 shadow-md hover:shadow-lg transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#Apropos" 
          className="p-2 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-all"
          aria-label="Défiler vers le bas"
        >
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;