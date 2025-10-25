import React, { useState, useEffect } from 'react';
import './Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

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
      id: 'programming',
      title: 'Langages de Programmation',
      tag: 'Programmation',
      skills: [
        {
          name: 'Python',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
          name: 'JavaScript',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
        },
        {
          name: 'Java',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
        },
        {
          name: 'C',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg'
        },
        {
          name: 'OCaml',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ocaml/ocaml-original.svg'
        },
        {
          name: 'Shell',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg'
        }
      ]
    },
    {
      id: 'web',
      title: 'Technologies Web',
      tag: 'Web',
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
      id: 'ui',
      title: 'UI/UX Design',
      tag: 'Design',
      skills: [
        {
          name: 'Material UI',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg'
        },
        {
          name: 'Framer',
          logo: '/yousra-arroui/white-mark.png'
        },
        {
          name: 'Figma',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
        },
        {
          name: 'Canva',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg'
        }
      ]
    },
    {
      id: 'deployment',
      title: 'Déploiement & Hébergement',
      tag: 'Déploiement',
      skills: [
        {
          name: 'Bootstrap',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
        },
        {
          name: 'Pages',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        {
          name: 'Actions',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        }
      ]
    },
    {
      id: 'tools',
      title: 'Outils de Développement',
      tag: 'Outils',
      skills: [
        {
          name: 'VS Code',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg'
        },
        {
          name: 'Cursor',
          logo: '/yousra-arroui/cursor.svg'
        },
        {
          name: 'Atom',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/atom/atom-original.svg'
        },
        {
          name: 'Kate',
          logo: '/yousra-arroui/kate-source-original.svg'
        },
        {
          name: 'Git',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        },
        {
          name: 'GitHub',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        },
        {
          name: 'npm',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg'
        },
        {
          name: 'Replit',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/replit/replit-original.svg'
        },
        {
          name: 'Postman',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg'
        },
        {
          name: 'macOS',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg'
        }
      ]
    },
    {
      id: 'database',
      title: 'Bases de Données',
      tag: 'BDD',
      skills: [
        {
          name: 'MySQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        {
          name: 'PostgreSQL',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
        },
      ]
    },
    {
      id: 'data',
      title: 'Science des Données & Intelligence Artificielle',
      tag: 'IA',
      skills: [
        {
          name: 'NumPy',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg'
        },
        {
          name: 'Pandas',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg'
        },
        {
          name: 'Matplotlib',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg'
        },
        {
          name: 'Scikit-learn',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg'
        },
        {
          name: 'TensorFlow',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
        },
        {
          name: 'PyTorch',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg'
        },
        {
          name: 'Jupyter',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg'
        },
        {
          name: 'Google Colab',
          logo: '/yousra-arroui/png-transparent-google-colab-logo-tech-companies.png'
        }
      ]
    },
    {
      id: 'formal',
      title: 'Vérification Formelle',
      tag: 'Vérification',
      skills: [
        {
          name: 'Why3',
          logo: '/yousra-arroui/logo-converti-depuis-png.svg'
        }
      ]
    },
    {
      id: 'project',
      title: 'Gestion de Projet',
      tag: 'Gestion de Projet',
      skills: [
        {
          name: 'Jira',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg'
        },
        {
          name: 'Projects',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
        }
      ]
    },
    {
      id: 'languages',
      title: 'Langues',
      tag: 'Langues',
      skills: [
        {
          name: 'Français'
        },
        {
          name: 'Arabe'
        },
        {
          name: 'Anglais'
        }
      ]
    },
    {
      id: 'soft',
      title: 'Compétences Transversales',
      tag: 'Transverse',
      skills: [
        {
          name: 'Résolution de problèmes'
        },
        {
          name: 'Travail en équipe'
        },
        {
          name: 'Adaptabilité'
        }
      ]
    }
  ];

  const filterTags = [
    { id: 'all', label: 'Tout' },
    { id: 'Programmation', label: 'Programmation' },
    { id: 'Web', label: 'Web' },
    { id: 'Design', label: 'Design' },
    { id: 'Déploiement', label: 'Déploiement' },
    { id: 'Outils', label: 'Outils' },
    { id: 'BDD', label: 'BDD' },
    { id: 'IA', label: 'IA' },
    { id: 'Vérification', label: 'Vérification' },
    { id: 'Gestion de Projet', label: 'Gestion de Projet' },
    { id: 'Langues', label: 'Langues' },
    { id: 'Transverse', label: 'Transverse' }
  ];

  const filteredCategories = activeFilter === 'all' 
    ? skillCategories 
    : skillCategories.filter(category => category.tag === activeFilter);

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="skills-header">
          <h2 className="skills-title">Compétences</h2>
        </div>

        <div className="skills-filters">
          {filterTags.map((tag) => (
            <button
              key={tag.id}
              className={`filter-tag ${activeFilter === tag.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(tag.id)}
            >
              {tag.label}
            </button>
          ))}
        </div>

        <div className="skills-content">
          {filteredCategories.map((category, categoryIndex) => (
            <div 
              key={category.id} 
              className={`skill-category ${isVisible ? 'visible' : ''}`}
              style={{ '--delay': `${categoryIndex * 0.2}s` }}
            >
              {activeFilter === 'all' && (
                <div className="category-header">
                  <h3 className="category-title">
                    {category.title}
                  </h3>
                </div>
              )}

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
