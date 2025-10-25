import React, { useState, useEffect, useCallback } from 'react';
import './Projects.css';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      observer.observe(projectsSection);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 'portfolio',
      title: 'Portfolio Personnel',
      description: 'Site web portfolio développé avec React, présentant mes compétences, projets et parcours académique. Design moderne avec animations et interface responsive.',
      image: '/yousra-arroui/23d25f92483d3ece840f54c65a524b0b.gif',
      technologies: ['React', 'CSS3', 'JavaScript', 'HTML5'],
      status: 'Terminé',
      github: 'https://arrouiyousra.github.io/yousra-arroui',
      featured: true
    },
    {
      id: 'linkeup',
      title: 'LinkUp - Plateforme de Recrutement',
      description: 'Plateforme de recrutement connectant talents et entreprises. Interface intuitive pour la recherche d\'emploi et la gestion des candidatures.',
      image: '/yousra-arroui/reallogo.png',
      technologies: ['Next.js', 'TypeScript', 'React', 'Tailwind', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Looping'],
      status: 'Terminé',
      github: 'https://github.com/yousra-arroui/linkeup',
      featured: true
    },
    {
      id: 'digitalresume',
      title: 'Digital Resume',
      description: 'Application web pour créer des CV numériques interactifs. Fonctionnalités de personnalisation et export en PDF.',
      image: '/yousra-arroui/digi.png',
      technologies: ['HTML5', 'CSS3'],
      status: 'Terminé',
      github: 'https://github.com/EpitechMscProPromo2028/T-WEB-500-digitalResume-TLS_yousra-arroui',
      featured: false
    },
    {
      id: 'ian',
      title: 'IAn - Vulgarisation IA Générative',
      description: 'Guide complet des outils d\'IA générative avec contenu théorique et pratique. Explorez les meilleurs générateurs de texte, images, vidéos et sons par IA avec des exemples concrets.',
      image: '/yousra-arroui/ian.png',
      technologies: ['Sphinx', 'GitHub Pages', 'GitHub Actions', 'GitHub Projects', 'HTML', 'CSS', 'JavaScript', 'Markdown', 'MyST'],
      status: 'Terminé',
      github: 'https://github.com/Yousraarroui/TestSphinx',
      demo: 'https://yousraarroui.github.io/TestSphinx/',
      featured: true
    },
    {
      id: 'vote',
      title: 'Système de Scrutin',
      description: 'Système de vote avancé implémentant plusieurs méthodes (Condorcet, Schulze, Majoritaire, Uninominal). Développé en C avec authentification SHA256 et gestion des données CSV.',
      image: '/yousra-arroui/4 copia.png.webp',
      technologies: ['C', 'Makefile', 'GitHub', 'Algorithmes', 'Structures de Données', 'SHA256'],
      status: 'Terminé',
      github: 'https://github.com/PrincessBeta/Info4.ProjetAvance',
      featured: false
    },
    {
      id: 'champions',
      title: 'Champion\'s League Predictor',
      description: 'Analyse approfondie des données de la Ligue des Champions utilisant la régression linéaire et Random Forest pour prédire les résultats. Application du clustering K-Means pour regrouper les équipes par performance. Évaluation avec précision, rappel, F1-score et AUC-ROC. Visualisation des données avec Pandas et Matplotlib.',
      image: '/yousra-arroui/myCANAL_Cover_web_2760x720___2025_09_26T120242.791.webp',
      technologies: ['Jupyter Notebook', 'Python', 'Machine Learning', 'Data Analysis', 'CSV', 'Benchmark', 'K-Means', 'Logistic Regression', 'Random Forest', 'Pandas', 'Matplotlib'],
      status: 'Terminé',
      github: 'https://github.com/Yousraarroui/Data-Analyse',
      featured: true
    }
  ];

  const nextProject = useCallback(() => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  }, [projects.length]);

  const prevProject = useCallback(() => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  }, [projects.length]);

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowLeft') {
        prevProject();
      } else if (event.key === 'ArrowRight') {
        nextProject();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [nextProject, prevProject]);

  const currentProjectData = projects[currentProject];

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Projets</h2>
        </div>

        <div className={`projects-content ${isVisible ? 'visible' : ''}`}>
          <div className="project-navigation">
            <button 
              className="nav-arrow nav-arrow-left" 
              onClick={prevProject}
              aria-label="Projet précédent"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>

            <div className="project-card">
              <div className="project-image-container">
                <img 
                  src={currentProjectData.image} 
                  alt={currentProjectData.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-status">
                    <span className={`status-badge ${currentProjectData.status.toLowerCase().replace(' ', '-')}`}>
                      {currentProjectData.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{currentProjectData.title}</h3>
                <p className="project-description">{currentProjectData.description}</p>
                
                <div className="project-technologies">
                  {currentProjectData.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {currentProjectData.github && (
                    <a 
                      href={currentProjectData.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github-link"
                      title="Voir le code source"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  
                  {currentProjectData.demo && (
                    <a 
                      href={currentProjectData.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link demo-link"
                      title="Voir la démonstration"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M10.59 13.41c.41.39.41 1.03 0 1.42-.39.39-1.03.39-1.42 0a5.003 5.003 0 0 1 0-7.07l3.54-3.54a5.003 5.003 0 0 1 7.07 0 5.003 5.003 0 0 1 0 7.07l-1.49 1.49c.01-.82-.12-1.64-.4-2.42l.47-.48a2.982 2.982 0 0 0 0-4.24 2.982 2.982 0 0 0-4.24 0l-3.53 3.53a2.982 2.982 0 0 0 0 4.24zm2.82-4.24c.39-.39 1.03-.39 1.42 0a5.003 5.003 0 0 1 0 7.07l-3.54 3.54a5.003 5.003 0 0 1-7.07 0 5.003 5.003 0 0 1 0-7.07l1.49-1.49c-.01.82.12 1.64.4 2.42l-.47.48a2.982 2.982 0 0 0 0 4.24 2.982 2.982 0 0 0 4.24 0l3.53-3.53a2.982 2.982 0 0 0 0-4.24z"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>

            <button 
              className="nav-arrow nav-arrow-right" 
              onClick={nextProject}
              aria-label="Projet suivant"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
          </div>

          <div className="project-indicators">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentProject ? 'active' : ''}`}
                onClick={() => goToProject(index)}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
