import React from 'react';
import '../Pages/resources.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Resources = () => {
    // Targets your editorial asset list, resource grids, and lookbook item panels
useScrollReveal('.resources-hero > *, .featured-resource, .resource-card, .resources-footer-cta > *');
  return (
    <div className="resources-container">
      {/* Editorial Header */}
      <section className="resources-hero">
        <div className="hero-inner">
          <span className="hub-tag">The Library // Fashionize</span>
          <h1>Intel & Curation</h1>
          <p>
            Your seasonal blueprints, fabric longevity guides, and interactive lookbooks. 
            Everything you need to optimize the life and impact of your wardrobe.
          </p>
        </div>
      </section>

      {/* Featured Resource Download / Highlight */}
      <section className="featured-resource">
        <div className="featured-layout">
          <div className="featured-text">
            <span className="pulse-badge">New Release</span>
            <h2>The Fall/Winter Lookbook</h2>
            <p>
              An immersive 80-page layout detailing silhouette layering, transitional coordinates, 
              and texture pairings architectural engineered for the upcoming season.
            </p>
            <button className="btn-aqua">Download Lookbook [PDF]</button>
          </div>
          <div className="featured-image">
            <img src="img26-1.jpg" alt="Latest Fashionize Seasonal Lookbook Cover" />
          </div>
        </div>
      </section>

      {/* Resource Category Grid */}
      <section className="resources-grid-section">
        <div className="grid-header">
          <h2>Essential Guides</h2>
          <p>Select a category to elevate your garment knowledge.</p>
        </div>

        <div className="resources-grid">
          {/* Card 1 */}
          <div className="resource-card">
            <span className="card-index">01</span>
            <h3>Fabric Care Manual</h3>
            <p>Learn how to properly wash, steam, and store premium textiles to maximize their lifecycle and aura retention.</p>
            <a href="#read" className="card-link">Read Guide →</a>
          </div>

          {/* Card 2 */}
          <div className="resource-card">
            <span className="card-index">02</span>
            <h3>Sizing Architecture</h3>
            <p>A comprehensive breakdown of volumetric cuts, proportional fits, and exact measurements for true-to-silhouette framing.</p>
            <a href="#read" className="card-link">View Sizing →</a>
          </div>

          {/* Card 3 */}
          <div className="resource-card">
            <span className="card-index">03</span>
            <h3>Sustainability Audit</h3>
            <p>Review our annual data matrix mapping out textile sourcing transparency, carbon scoring, and atelier waste metrics.</p>
            <a href="#read" className="card-link">Download Report →</a>
          </div>
        </div>
      </section>

      {/* Bottom Newsletter Block */}
      <section className="resources-footer-cta">
        <h2>Never Miss a Curation Drop</h2>
        <p>Get exclusive early access to digital seasonal lookbooks, private capsule invites, and design updates.</p>
        <div className="newsletter-input-group">
          <input type="email" placeholder="ENTER YOUR EMAIL ADDRESS" />
          <button className="btn-submit">Subscribe</button>
        </div>
      </section>
    </div>
  );
};

export default Resources;