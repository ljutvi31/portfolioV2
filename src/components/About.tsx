import React from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            A propos
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-800 to-teal-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
 Ayant terminé la formation il y'a peu de temps, je reste un débutant et je découvre le monde du developpement web avec intérêt et passion
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        Je cherche à comprendre comment bien développer mes compétences entre lectures, veille technologiques et exercices d'applications. 
J'utilise l'intelligence artificielle pour m'aider à avancer plus sereinement dans un domaine qui est marqué par un avancement très rapide en terme de d'évolution technologique. 
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              J'apprends de manière constante, j'explore ce domaine sous différentes coutures, entre les frameworks, bibliothèques, documentations et je tente de rester aux aguêts concernant les nouveautés.
            Mon but est d'avoir la possibilité de créer ce que j'imagine ou de mettre en place ce qu'un client envisage et par ce fait, de developper mes compétences au travers des tâches à effectuer. 
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-3">
                  <Briefcase size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Education</h4>
                <p className="text-gray-700 dark:text-gray-300">Formation "Développeur web - FullStack" Open CLassrooms - 7 mois</p>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full mb-3">
                  <Award size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">Projects</h4>
                <p className="text-gray-700 dark:text-gray-300">7 projets avec Open Classrooms et 3 projets en cours (un site de phytothérapie, un site de partage de productions musicales et un site pour reprendre les bases en developpement web (html, css, javascript etc.)  </p>
              </div>
            </div>
            
            <a 
              href="/resume.pdf" 
              className="inline-flex items-center text-blue-800 dark:text-teal-400 font-medium hover:underline"
            >
              CV à télécharger
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </a>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="w-full h-80 md:h-96 lg:h-[450px] relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-teal-600/80 mix-blend-multiply"></div>
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-64 h-64 bg-amber-200 dark:bg-amber-800/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse z-0"></div>
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-blue-200 dark:bg-blue-800/40 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;