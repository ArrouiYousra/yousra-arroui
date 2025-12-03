import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
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

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      id: 'systems',
      title: 'Systèmes & Réseaux',
      skills: [
        {
          name: 'Linux',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg'
        },
        {
          name: 'Shell',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'
        }
      ]
    },
    {
      id: 'web',
      title: 'Développement Web',
      skills: [
        {
          name: 'React',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
          name: 'Node.js',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
        },
        {
          name: 'Express',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
        },
        {
          name: 'HTML5',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
        },
        {
          name: 'CSS3',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
        },
        {
          name: 'PHP',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
        }
      ]
    },
    {
      id: 'database',
      title: 'Bases de Données',
      skills: [
        {
          name: 'MySQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        {
          name: 'PostgreSQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
        {
          name: 'Supabase',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg'
        }
      ]
    },
    {
      id: 'ml',
      title: 'Machine Learning',
      skills: [
        {
          name: 'Pandas',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
        },
        {
          name: 'NumPy',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg'
        },
        {
          name: 'Scikit-learn',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg'
        }
      ]
    },
    {
      id: 'ai',
      title: 'IA générative',
      skills: [
        {
          name: 'LangChain',
          logo: 'https://avatars.githubusercontent.com/u/126733545?s=200&v=4'
        },
        {
          name: 'ElevenLabs',
          logo: 'https://www.elevenlabs.io/favicon.ico'
        },
        {
          name: 'Llama',
          logo: 'https://llama.meta.com/favicon.ico'
        },
        {
          name: 'Hugging Face',
          logo: 'https://huggingface.co/favicon.ico'
        }
      ]
    },
    {
      id: 'versioning',
      title: 'Versionning',
      skills: [
        {
          name: 'Git',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        {
          name: 'GitHub',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Compétences</h2>
        </div>

        <div className="skills-content">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.id} 
              className={`skill-category ${isVisible ? 'visible' : ''}`}
              style={{ '--delay': `${categoryIndex * 0.2}s` }}
            >
              <div className="category-header">
                <h3 className="category-title">
                  {category.title}
                </h3>
              </div>

              <div className="skills-row">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name}
                    className={`skill-icon ${isVisible ? 'visible' : ''}`}
                    style={{ '--delay': `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s` }}
                  >
                    {skill.logo && <img src={skill.logo} alt={`Logo ${skill.name}`} />}
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
