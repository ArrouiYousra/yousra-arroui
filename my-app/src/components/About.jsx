import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">À propos</h2>
        </div>

        <div className="about-photo">
          <img 
            src={process.env.PUBLIC_URL + '/assets/photos/yousra-photo.jpg'} 
            alt="Yousra Arroui" 
            className="about-image"
          />
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Je suis <strong>Yousra Arroui</strong>, 24 ans, étudiante en informatique basée à Toulouse. 
              Passionnée par la programmation depuis 5 ans, j'ai commencé en autodidacte avec Python et C.
            </p>

            <p className="about-paragraph">
              Après une <strong>licence d'Informatique</strong> à l'Université Paul Sabatier, je poursuis actuellement 
              mon cursus à <strong>EPITECH Toulouse</strong> en Pré-Master of Science, avec pour objectif d'obtenir mon diplôme en 2028.
            </p>

            <p className="about-paragraph">
              Je recherche une <strong>alternance</strong> pour allier formation théorique et expérience pratique en entreprise. 
              Mon adaptabilité et ma rigueur me permettent de m'intégrer rapidement dans vos équipes et de contribuer efficacement à vos projets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
