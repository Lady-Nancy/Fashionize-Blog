import React from 'react';
import '../Pages/awards.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Awards = () => {
  useScrollReveal('.awards-hero > *, .award-row');

  return (
    <div className="awards-wrapper">
      <div className="awards-hero">
        <span className="awards-badge">COMMUNITY // DESIGN DISTINCTIONS</span>
        <h1>Recognitions</h1>
      </div>

      <div className="award-list">
        <div className="award-row">
          <div className="award-details">
            <h3>Excellence in Conscious Production</h3>
            <p>Global Studio Curation Council</p>
          </div>
          <span className="award-year">2025</span>
        </div>

        <div className="award-row">
          <div className="award-details">
            <h3>Aesthetic Innovation of the Year</h3>
            <p>Los Angeles Fashion Tech Summit</p>
          </div>
          <span className="award-year">2024</span>
        </div>
      </div>
    </div>
  );
};

export default Awards;