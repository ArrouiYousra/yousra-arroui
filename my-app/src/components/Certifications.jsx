import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      id: 'hacktogone',
      title: 'Hacktogone',
      type: 'Hackathon',
      description: 'Certification obtenue lors de la participation au hackathon Hacktogone.',
      date: '2024'
    }
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="certifications-container">
        <div className="certifications-header">
          <h2 className="certifications-title">Certifications</h2>
          <div className="certifications-icon">🏆</div>
        </div>

        <div className="certifications-content">
          {certifications.map((cert) => (
            <div key={cert.id} className="certification-card">
              <div className="certification-header-card">
                <h3 className="certification-title">{cert.title}</h3>
                <span className="certification-type">{cert.type}</span>
              </div>
              <p className="certification-description">{cert.description}</p>
              <div className="certification-date">{cert.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

