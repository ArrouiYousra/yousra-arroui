import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">À propos</h2>
          <div className="about-icon">💻</div>
        </div>

        <div className="about-photo">
          <img 
            src={process.env.PUBLIC_URL + '/yousra-photo.jpg'} 
            alt="Yousra Arroui" 
            className="about-image"
          />
        </div>

        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
              Je suis <strong>Yousra Arroui</strong>, 24 ans, étudiante passionnée basée à Toulouse. 
              Originaire d'Algérie, j'ai grandi dans un environnement familial où l'informatique était omniprésente. 
              Mon père et mon frère, tous deux ingénieurs en informatique, ont nourri ma curiosité pour ce domaine 
              à travers leurs discussions sur les avancées technologiques et leurs projets.
            </p>

            <p className="about-paragraph">
              Après un <strong>BAC S spécialité Mathématiques</strong> obtenu au Lycée International 
              Alexandre Dumas d'Alger en 2018, j'ai intégré l'Université Paul Sabatier de Toulouse pour une 
              licence <strong>d'Informatique</strong>. Cette formation m'a apporté un solide bagage théorique, 
              mais j'ai rapidement ressenti le besoin de concrétiser mes connaissances.
            </p>

            <p className="about-paragraph">
              Influencée par mon frère qui préparait son Master IHM, j'ai commencé à apprendre la programmation 
              en autodidacte. Mes premiers pas se sont faits avec <strong>Python et C</strong> sur Replit, 
              il y a 5 ans. Cette expérience a confirmé ma passion pour le développement.
            </p>

            <p className="about-paragraph">
              Aujourd'hui, je poursuis mon cursus à <strong>EPITECH Toulouse</strong> en Pré-Master of Science, 
              avec l'objectif d'obtenir mon diplôme en 2028. Actuellement en première année, je participe 
              activement aux "piscines" en Python, Java et technologies web (JavaScript, HTML, CSS, PHP, SQL, React).
            </p>

            <p className="about-paragraph">
              Mon <strong>adaptabilité</strong> constitue mon principal atout&nbsp;: que ce soit en travail individuel 
              ou en équipe, sur des projets courts ou longs, je m'engage pleinement à livrer des résultats 
              de qualité dans les délais impartis. Je recherche actuellement une <strong>alternance</strong> 
              pour compléter ma formation théorique par une expérience pratique en entreprise.
            </p>

            <p className="about-paragraph">
              Mon parcours, alliant <strong>rigueur mathématique</strong> et <strong>passion technologique</strong>, 
              me prépare à exceller dans le domaine de l'informatique. 
              Prête à relever tous les défis, je suis déterminée à contribuer significativement au monde de la technologie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
