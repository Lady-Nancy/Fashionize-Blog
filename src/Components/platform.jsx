import React from 'react';
import '../Pages/platform.css';
import { useScrollReveal } from '../hooks/useScrollReveal'; 

const Platform = () => {
  useScrollReveal('.hero-content > *, .feature-card, .showcase-text, .showcase-visual, .platform-footer-cta > *');
  return (
    <div className="platform-container">
      {/* Editorial Hero Section */}
      <section className="platform-hero">
        <div className="hero-content">
          <span className="badge">The Fashionize Experience</span>
          <h1>A New Dimension of Style</h1>
          <p>
            We are redefining the modern wardrobe. Explore our high-performance 
            design ecosystem, curated digital styling engines, and zero-waste studio pipeline.
          </p>
          <div className="cta-group">
            <button className="btn-primary">Explore The Collection</button>
            <button className="btn-secondary">Our Studio Process</button>
          </div>
        </div>
      </section>

      {/* The Pillars of Our Fashion Platform */}
      <section className="platform-features">
        <div className="section-header">
          <h2>The Retail Innovation</h2>
          <p>How we blend tactile luxury with forward-thinking curation.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="card-icon">✦</div>
            <h3>Intelligent Wardrobes</h3>
            <p>
              Curated collections that adapt to your personal style profile. Every piece is designed 
              to mix, match, and elevate your personal presence effortlessly.
            </p>
          </div>

          <div className="feature-card">
            <div className="card-icon">✦</div>
            <h3>Virtual Fitting Room</h3>
            <p>
              Skip the guesswork. Our high-fidelity interactive preview system allows you to accurately 
              visualize the exact drape, fit, and movement of garments on your silhouette.
            </p>
          </div>

          <div className="feature-card">
            <div className="card-icon">✦</div>
            <h3>Conscious Production</h3>
            <p>
              Style shouldn't cost the planet. Our on-demand studio model minimizes textile waste 
              by matching actual inventory output precisely to global community demand.
            </p>
          </div>
        </div>
      </section>

      {/* Brand Identity / Design Pipeline */}
      <section className="tech-showcase">
        <div className="showcase-layout">
          <div className="showcase-text">
            <span className="sub-title">CRAFTED IN LOS ANGELES</span>
            <h2>Architected for Style. Tailored for Confidence.</h2>
            <p>
              Every garment starts as an architectural sketch in our studio. We obsess over the micro-details: 
              the structural weight of the fabric, the alignment of the seams, and the sensory experience of 
              putting it on for the first time. 
            </p>
            
            <ul className="spec-list">
              <li><strong>Premium Textiles</strong> — Hand-selected, dynamic-stretch, and breathable fabrics.</li>
              <li><strong>Perfect Fit Guarantee</strong> — Tailored blueprints optimized for true-to-life sizing.</li>
              <li><strong>Radical Transparency</strong> — Ethical sourcing and premium quality at fair pricing.</li>
            </ul>
          </div>
          <div className="showcase-visual">
            <img src="hmm.jpg" alt="Fashionize design process and atelier preview" />
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="platform-footer-cta">
        <h2>Change Your Aura Today.</h2>
        <p>Step into an uncompromising world of premium designs and bold silhouettes.</p>
        <button className="btn-dark">Discover New Arrivals</button>
      </section>
    </div>
  );
};

export default Platform;