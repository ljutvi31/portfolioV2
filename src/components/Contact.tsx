import React, { useState } from 'react'; // Import de React et du hook useState
import { Send, MapPin, Mail } from 'lucide-react'; // Import des icônes

const Contact: React.FC = () => {
  // État pour stocker les valeurs du formulaire
  const [formData, setFormData] = useState({
    name: '',      // Nom de l'utilisateur
    email: '',     // Email de l'utilisateur
    subject: '',   // Sujet du message
    message: ''    // Message
  });
  
  // État pour stocker les erreurs de validation
  const [errors, setErrors] = useState<Record<string, string>>({});
  // État pour savoir si le formulaire est en cours de soumission
  const [isSubmitting, setIsSubmitting] = useState(false);
  // État pour afficher un message de succès ou d'erreur après soumission
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  
  // Fonction de validation du formulaire
  const validate = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'; // Vérifie si le nom est vide
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"; // Vérifie si l'email est vide
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide"; // Vérifie le format de l'email
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis'; // Vérifie si le sujet est vide
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis'; // Vérifie si le message est vide
    }
    
    setErrors(newErrors); // Met à jour les erreurs
    return Object.keys(newErrors).length === 0; // Retourne true si aucune erreur
  };
  
  // Fonction appelée à chaque changement dans un champ du formulaire
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target; // Récupère le nom et la valeur du champ
    setFormData({ ...formData, [name]: value }); // Met à jour la valeur du champ
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' }); // Efface l'erreur si l'utilisateur corrige le champ
    }
  };
  
  // Fonction appelée lors de la soumission du formulaire
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Empêche le rechargement de la page
    
    if (validate()) { // Si la validation passe
      setIsSubmitting(true); // Active l'état de soumission
      
      // Simule l'envoi du message (remplacer par un appel API réel)
      setTimeout(() => {
        setIsSubmitting(false); // Désactive l'état de soumission
        setSubmitMessage({
          type: 'success',
          text: 'Votre message a été envoyé avec succès ! Je vous répondrai bientôt.'
        }); // Affiche un message de succès
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        }); // Réinitialise le formulaire
        
        setTimeout(() => {
          setSubmitMessage(null); // Efface le message après 5 secondes
        }, 5000);
      }, 1500);
    }
  };

  return (
    // Section principale du contact
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        {/* Titre et description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Me Contacter
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-800 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Vous avez un projet en tête ou souhaitez collaborer ? N'hésitez pas à me contacter via le formulaire ci-dessous ou mes coordonnées.
          </p>
        </div>
        
        {/* Grille contenant les infos et le formulaire */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* Colonne infos de contact */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Informations de Contact
            </h3>
            
            <div className="space-y-6">
              {/* Bloc localisation */}
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mr-4">
                  <MapPin size={20} /> {/* Icône localisation */}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Localisation</h4>
                  <p className="text-gray-800 dark:text-gray-200">Paris, France</p>
                </div>
              </div>
              
              {/* Bloc email */}
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full mr-4">
                  <Mail size={20} /> {/* Icône email */}
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">Email</h4>
                  <a href="mailto:ljutvi.h@gmail.com" className="text-gray-800 dark:text-gray-200 hover:text-blue-800 dark:hover:text-teal-400">
                    ljutvi.h@gmail.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Réseaux sociaux */}
            <div className="mt-8">
              <h4 className="text-gray-800 dark:text-gray-200 mb-4">Me suivre</h4>
              <div className="flex space-x-4">
                {/* Lien GitHub */}
                <a 
                  href="https://github.com/ljutvi31" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-blue-800 dark:hover:text-teal-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {/* Icône GitHub */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                </a>
                {/* Lien LinkedIn */}
                <a 
                  href="https://www.linkedin.com/in/harryum-ljutvi-818526337" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:text-blue-800 dark:hover:text-teal-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {/* Icône LinkedIn */}
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Colonne formulaire de contact */}
          <div className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Envoyez-moi un message
            </h3>
            
            {/* Message de succès ou d'erreur */}
            {submitMessage && (
              <div className={`p-4 mb-6 rounded-lg ${
                submitMessage.type === 'success' 
                  ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' 
                  : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300'
              }`}>
                {submitMessage.text}
              </div>
            )}
            
            {/* Formulaire de contact */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Champ nom */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                      errors.name 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500 dark:focus:ring-teal-500'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.name}
                    </p>
                  )}
                </div>
                
                {/* Champ email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Votre Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:ring-blue-500 dark:focus:ring-teal-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              
              {/* Champ sujet */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                    errors.subject 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-blue-500 dark:focus:ring-teal-500'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.subject}
                  </p>
                )}
              </div>
              
              {/* Champ message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:outline-none dark:bg-gray-800 dark:border-gray-700 dark:text-white ${
                    errors.message 
                      ? 'border-red-500 focus:ring-red-500' 
                      : 'border-gray-300 focus:ring-blue-500 dark:focus:ring-teal-500'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>
              
              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-3 bg-blue-800 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                <Send size={18} /> {/* Icône d'envoi */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; // Export du composant