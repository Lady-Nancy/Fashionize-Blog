import React from 'react';
import '../Pages/company.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Company = () => {
    // Targets your brand mission statements, team grids, and history rows
useScrollReveal('.company-hero > *, .mission-statement, .team-card, .history-row, .manifesto-layout, .company-culture > *');
  return (
    <div className="company-container">
      {/* Editorial Corporate Hero */}
      <section className="company-hero">
        <div className="hero-inner">
          <span className="brand-tag">Our House // Fashionize</span>
          <h1>Behind the Silhouettes</h1>
          <p>
            Founded in Los Angeles, Fashionize bridges the gap between architectural structure 
            and fluid everyday movement. We don't just create collections—we establish an aura.
          </p>
        </div>
      </section>

      {/* Brand Numbers / Milestones */}
      <section className="company-metrics">
        <div className="metric-box">
          <span className="metric-num">01 //</span>
          <h3>Global Community</h3>
          <p>5M+ active tastemakers defining the future of street style.</p>
        </div>
        <div className="metric-box">
          <span className="metric-num">02 //</span>
          <h3>Zero Waste Engine</h3>
          <p>On-demand manufacturing structure that respects the earth.</p>
        </div>
        <div className="metric-box">
          <span className="metric-num">03 //</span>
          <h3>Studio Roots</h3>
          <p>Designed, tested, and tailored at our California headquarters.</p>
        </div>
      </section>

      {/* The Core Manifesto */}
      <section className="company-manifesto">
        <div className="manifesto-layout">
          <div className="manifesto-visual">
            <img src="shotkit-dark-photography-0013.jpg" alt="Fashionize studio atmosphere" />
          </div>
          <div className="manifesto-text">
            <span className="accent-label">THE MANIFESTO</span>
            <h2>Radical Design. Fair Realities.</h2>
            <p>
              We believe great style shouldn't carry an compromise. By operating directly from 
              our atelier to your wardrobe, we cut out traditional industry middle-men markups. 
              The result is exceptional material quality, immaculate tailoring, and radically fair pricing.
            </p>
            <blockquote>
              "Fashion isn't armor; it is the ultimate expression of your internal environment."
            </blockquote>
          </div>
        </div>
      </section>

      {/* The Team / Pillars */}
      <section className="company-culture">
        <div className="culture-header">
          <h2>Our Studio Pillars</h2>
          <p>The collective standards driving every sketch, seam, and drop.</p>
        </div>
        <div className="culture-grid">
          <div className="culture-card">
            <h4>The Atelier</h4>
            <p>Where patterns are obsessively modeled in three dimensions to verify accurate drapes and proportions.</p>
          </div>
          <div className="culture-card">
            <h4>Sourcing</h4>
            <p>Sourcing advanced performance textiles that maintain crisp shapes while delivering breathable comfort.</p>
          </div>
          <div className="culture-card">
            <h4>Community</h4>
            <p>An ecosystem built on direct collaboration with creators, artists, and our global audience.</p>
          </div>
        </div>
      </section>

      {/* Corporate Call To Action */}
      <section className="company-footer-cta">
        <h2>Join the Fashionize Movement</h2>
        <p>Explore opportunities within our design, engineering, and logistics studios.</p>
        <button className="btn-aqua">View Open Positions</button>
      </section>
    </div>
  );
};

export default Company;