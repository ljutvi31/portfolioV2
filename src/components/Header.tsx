import React, { useState, useEffect } from 'react'; // Import de React et des hooks useState/useEffect
import { Menu, X, Moon, Sun } from 'lucide-react'; // Import des icônes
import { useTheme } from '../context/ThemeContext'; // Import du contexte de thème

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour ouvrir/fermer le menu mobile
  const [scrolled, setScrolled] = useState(false); // État pour savoir si la page a défilé
  const { theme, toggleTheme } = useTheme(); // Récupère le thème actuel et la fonction pour le changer
  
  useEffect(() => {
    // Fonction pour gérer le scroll et changer l'état "scrolled"
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Ajoute un fond au header si on a scrollé
      } else {
        setScrolled(false); // Header transparent si on est en haut
      }
    };
    window.addEventListener('scroll', handleScroll); // Ajoute l'écouteur d'événement scroll
    return () => window.removeEventListener('scroll', handleScroll); // Nettoie l'écouteur au démontage
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Ouvre/ferme le menu mobile
  };

  // Fonction pour scroller vers une section précise
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId); // Récupère l'élément cible
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Scroll fluide vers la section
      setIsOpen(false); // Ferme le menu mobile après clic
    }
  };

  return (
    // Header principal, fixe en haut de la page
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' // Fond si scroll
          : 'bg-transparent py-5' // Transparent sinon
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo ou titre du site, clique pour aller en haut */}
        <button 
          onClick={() => scrollToSection('accueil')}
          className="text-xl md:text-2xl font-bold text-blue-900 dark:text-white flex items-center"
        >
          <span className="bg-gradient-to-r from-blue-800 to-teal-500 bg-clip-text text-transparent">
            Portfolio
          </span>
        </button>
        
        {/* Navigation principale (desktop) */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {[
              { id: 'accueil', label: 'Accueil' },
              { id: 'about', label: 'À propos' },
              { id: 'skills', label: 'Compétences' },
              { id: 'projects', label: 'Projets' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-teal-400 transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          {/* Bouton pour changer le thème */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Changer le thème"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>
        
        {/* Menu mobile : bouton thème + menu burger */}
        <div className="flex items-center md:hidden space-x-4">
          {/* Bouton pour changer le thème (mobile) */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Changer le thème"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          {/* Bouton menu burger */}
          <button
            onClick={toggleMenu}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-800 dark:hover:text-teal-400"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Menu mobile déroulant */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0 border-t border-gray-200 dark:border-gray-800">
          <ul className="py-4">
            {[
              { id: 'accueil', label: 'Accueil' },
              { id: 'about', label: 'À propos' },
              { id: 'skills', label: 'Compétences' },
              { id: 'projects', label: 'Projets' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-6 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header; // Export du composant Header