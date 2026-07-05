import React from 'react';
import '../Pages/studioProcess.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const StudioProcess = () => {
  useScrollReveal('.studio-hero > *, .process-timeline .step-block');

  return (
    <div className="studio-wrapper">
      <div className="studio-hero">
        <span className="studio-badge">MINIMAL WASTE // ON-DEMAND METRICS</span>
        <h1>Our Studio Process</h1>
        <p>How we take an architectural design sketch from concept layout to physical alignment.</p>
      </div>

      <div className="process-timeline">
        <div className="step-block">
          <span className="step-number">01 / Architectural Sketching</span>
          <h3>Structural Form Drafts</h3>
          <p>We map out garments using high-precision layout measurements, anticipating movement dynamics and true fit contours before selecting fabrics.</p>
        </div>

        <div className="step-block">
          <span className="step-number">02 / Technical Sourcing</span>
          <h3>Premium Textile Auditing</h3>
          <p>Our workspace sources dynamic-stretch, premium, and breathable textiles exclusively from mills that provide transparent compliance tracking sheets.</p>
        </div>

        <div className="step-block">
          <span className="step-number">03 / On-Demand Assembly</span>
          <h3>Zero-Waste Manufacturing</h3>
          <p>Instead of stockpiling massive inventory volumes, your garment is tailored on-demand to minimize global fabric landfill contributions.</p>
        </div>
      </div>
    </div>
  );
};

export default StudioProcess;