import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 'hacktogone',
      title: 'Certification - Hackathon IA 2025',
      type: 'Hackathon',
      image: '/assets/certifications/hacktogone.pdf'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <div className="certifications-header">
          <h2 className="certifications-title">Certifications</h2>
        </div>

        <div className="certifications-content">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              {cert.image && (
                <div className="certification-preview">
                  <iframe
                    src={process.env.PUBLIC_URL + cert.image + '#toolbar=0&navpanes=0'}
                    className="certification-image"
                    title={cert.title}
                    frameBorder="0"
                  />
                </div>
              )}
              <div className="certification-header-card">
                <h3 className="certification-title">{cert.title}</h3>
                <span className="certification-type">{cert.type}</span>
              </div>
              <p className="certification-description">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

