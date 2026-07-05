import React from 'react';
import '../Pages/advisors.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Advisors = () => {
  useScrollReveal('.advisors-hero > *, .advisor-card');

  return (
    <div className="advisors-wrapper">
      <div className="advisors-hero">
        <span className="advisors-badge">STEERING MATRIX // GLOBAL EXPERTISE</span>
        <h1>Trusted Advisors</h1>
      </div>

      <div className="advisor-grid">
        <div className="advisor-card">
          <h3>Elena Rostova</h3>
          <span className="advisor-role">TEXTILE SUSTAINABILITY STRATEGIST</span>
          <p>Former director of materials engineering with 15+ years guiding clean loop closed architecture supply lines.</p>
        </div>

        <div className="advisor-card">
          <h3>Marcus Vance</h3>
          <span className="advisor-role">RETAIL SCALE OPERATIONS</span>
          <p>Managing partner specializing in digital consumer behavior mechanics and automated logistics setups.</p>
        </div>
      </div>
    </div>
  );
};

export default Advisors;