import React from 'react';
import './CV.css';

const CV = () => {

  return (
    <section id="cv" className="cv">
      <div className="cv-container">
        <div className="cv-header">
          <h2 className="cv-title">Curriculum Vitae</h2>
        </div>

        <div className="cv-content">
          <div className="cv-preview">
            <div className="cv-preview-container">
              <iframe
                src="/assets/documents/ARROUI Yousra.pdf.pdf"
                width="100%"
                height="600px"
                title="CV Yousra Arroui"
                className="cv-iframe"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CV;
