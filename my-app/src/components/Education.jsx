import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education-container">
        <div className="education-header">
          <h2 className="education-title">Éducation</h2>
          <div className="education-icon">🎓</div>
        </div>

        <div className="education-content">
          <div className="education-timeline">
            <div className="timeline-item timeline-right">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-logo-right">
                  <a href="https://www.epitech.eu" target="_blank" rel="noopener noreferrer">
                    <img src="/yousra-arroui/Epitech.gif" alt="Logo EPITECH" />
                  </a>
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-period">2025 - 2028</div>
                <h3 className="timeline-title">
                  <a href="https://www.epitech.eu/formation-alternance/pre-msc-post-bac2/" target="_blank" rel="noopener noreferrer">
                    Master Architecture des Systèmes d'Information
                  </a>
                </h3>
                <h4 className="timeline-school">EPITECH Toulouse</h4>
                <p className="timeline-description">
                  Formation d'excellence intensive de 4 mois suivie d'un rythme alterné en entreprise. <br />
                  Acquisition des bases en administration systèmes, programmation orientée objet et développement web.
                </p>
                <div className="timeline-status current">En cours</div>
              </div>
            </div>

            <div className="timeline-item timeline-left">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-logo-left">
                  <a href="https://www.univ-tlse3.fr" target="_blank" rel="noopener noreferrer">
                    <img src="/yousra-arroui/Logo_Université_Toulouse_3-2015.png" alt="Logo Université de Toulouse" />
                  </a>
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-period">2021 - 2025</div>
                <h3 className="timeline-title">
                  <a href="https://www.univ-tlse3.fr/syllabus/SYL_L_INF.pdf" target="_blank" rel="noopener noreferrer">
                    Licence d'Informatique
                  </a>
                </h3>
                <h4 className="timeline-school">Université Paul Sabatier, Toulouse</h4>
                <p className="timeline-description">
                  Formation complète en informatique avec un focus sur l'algorithmique, 
                  la programmation et les bases théoriques de l'informatique.
                </p>
                <div className="timeline-status completed">Terminé</div>
              </div>
            </div>

            <div className="timeline-item timeline-right">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-logo-right">
                  <a href="https://www.univ-tlse3.fr" target="_blank" rel="noopener noreferrer">
                    <img src="/yousra-arroui/Logo_Université_Toulouse_3-2015.png" alt="Logo Université de Toulouse" />
                  </a>
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-period">2018 - 2021</div>
                <h3 className="timeline-title">
                  <a href="https://www.univ-tlse3.fr/decouvrir-nos-diplomes/licence-mention-mathematiques" target="_blank" rel="noopener noreferrer">
                    Licence de Mathématiques
                  </a>
                </h3>
                <h4 className="timeline-school">Université Paul Sabatier, Toulouse</h4>
                <p className="timeline-description">
                  Formation solide en mathématiques pures et appliquées, 
                  développant rigueur analytique et pensée logique.
                </p>
                <div className="timeline-status completed">Terminé</div>
              </div>
            </div>

            <div className="timeline-item timeline-left">
              <div className="timeline-marker">
                <div className="timeline-dot"></div>
                <div className="timeline-logo-left">
                  <a href="https://liad-alger.fr" target="_blank" rel="noopener noreferrer">
                    <img src="/yousra-arroui/logo-liad-3-600x468.png" alt="Logo Lycée International Alexandre Dumas" />
                  </a>
                </div>
              </div>
              <div className="timeline-content">
                <div className="timeline-period">2018</div>
                <h3 className="timeline-title">Bac Général série S spécialité Mathématiques</h3>
                <h4 className="timeline-school">Lycée International Alexandre Dumas, Alger</h4>
                <p className="timeline-description">
                  Le bac S a disparu en 2019-2020. La réforme du lycée initiée en 2018 a confirmé l'abandon des séries S, ES et L du Bac général. 
                  C'est l'équivalent du Bac Général d'aujourd'hui pour les élèves qui souhaitent faire de longues études comme l'informatique, 
                  l'ingénierie, la biologie, etc.
                </p>
                <div className="timeline-status completed">Obtenu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
