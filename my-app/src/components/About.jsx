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
              <strong>Yousra Arroui</strong>, 24 ans, développeuse transformant des lignes de code en solutions innovantes. 
            </p>

            <p className="about-paragraph">
              Diplômée d'une <strong>licence d'Informatique</strong> à l'Université Paul Sabatier, je perfectionne actuellement mes compétences 
              à <strong>EPITECH Toulouse</strong> en Pré-Master of Science. Mon objectif ? Obtenir mon diplôme en 2028 et acquérir de l'expérience en entreprise.
            </p>

            <p className="about-paragraph">
              Je recherche une <strong>alternance</strong> où je pourrai être formée et vous aider à réaliser vos projets et à augmenter votre chiffre d'affaires. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
