import React from 'react';

type Skill = {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
  icon?: string;
};

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
       
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className={`h-2.5 rounded-full ${
            skill.category === 'frontend' 
              ? 'bg-gradient-to-r from-blue-600 to-blue-400' 
              : skill.category === 'backend' 
                ? 'bg-gradient-to-r from-teal-600 to-teal-400' 
                : 'bg-gradient-to-r from-amber-600 to-amber-400'
          }`}
       
        ></div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const frontendSkills: Skill[] = [
    { name: 'HTML/CSS', level: 80, category: 'frontend' },
    { name: 'JavaScript', level: 6, category: 'frontend' },
    { name: 'React', level: 70, category: 'frontend' },
    { name: 'Tailwind CSS', level: 70, category: 'frontend' },
  ];

  const backendSkills: Skill[] = [
    { name: 'Node.js', level: 65, category: 'backend' },
    { name: 'Express', level: 65, category: 'backend' },
    { name: 'MongoDB', level: 70, category: 'backend' },
  ];

  const toolsSkills: Skill[] = [
    { name: 'Git', level: 85, category: 'tools' },
    { name: 'Webpack', level: 70, category: 'tools' },
    { name: 'AWS', level: 60, category: 'tools' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Mes Compétences
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-800 to-teal-500 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          J'ai acquis un ensemble diversifié de compétences tout au long de mon parcours de développeur. Voici un aperçu de mon expertise technique et de mes niveaux de compétence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Frontend
            </h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Backend
            </h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
          
          <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Outils & technologies
            </h3>
            {toolsSkills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;