import React, { useState, useEffect } from 'react';
import './Experience.css';

const Experience = () => {
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

    const experienceSection = document.getElementById('experience');
    if (experienceSection) {
      observer.observe(experienceSection);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 'domaine',
      title: 'Serveuse Extra',
      company: 'Domaine de la Peyrolade',
      period: 'Juillet 2023 - Août 2023',
      location: 'Daux, France',
      description: 'Service en salle et organisation d\'événements dans un domaine viticole. Gestion des réservations, service des clients et participation à l\'organisation d\'événements privés.',
      technologies: ['Service en Salle', 'Organisation d\'Événements', 'Relation Client', 'Travail Saisonnier'],
      type: 'CDD'
    },
    {
      id: 'casino',
      title: 'Employée Polyvalente',
      company: 'Casino Rangueil',
      period: 'Octobre 2021 - Juin 2022',
      location: 'Toulouse, France',
      description: 'Service client, gestion de la caisse, mise en rayon et approvisionnement. Développement de compétences en relation client et gestion d\'équipe dans un environnement commercial dynamique.',
      technologies: ['Service Client', 'Gestion de Caisse', 'Travail d\'Équipe', 'Polyvalence'],
      type: 'CDD'
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="experience-header">
          <h2 className="experience-title">Expérience Professionnelle</h2>
        </div>

        <div className={`experience-content ${isVisible ? 'visible' : ''}`}>
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-item ${isVisible ? 'visible' : ''}`}
              style={{ '--delay': `${index * 0.2}s` }}
            >
              <div className="experience-card">
                <div className="experience-header-card">
                  <div className="experience-meta">
                    <h3 className="experience-job-title">{exp.title}</h3>
                    <p className="experience-company">
                      {exp.id === 'domaine' ? (
                        <a href="https://64d007e568937.site123.me" target="_blank" rel="noopener noreferrer">
                          {exp.company}
                        </a>
                      ) : exp.id === 'casino' ? (
                        <a href="https://www.franchise-groupecasino.fr" target="_blank" rel="noopener noreferrer">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </p>
                    <div className="experience-details">
                      <span className="experience-period">{exp.period}</span>
                      <span className="experience-location">{exp.location}</span>
                    </div>
                    <span className={`experience-type ${exp.type.toLowerCase().replace(' ', '-')}`}>
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="experience-content-card">
                  <p className="experience-description">{exp.description}</p>
                  
                  <div className="experience-technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
