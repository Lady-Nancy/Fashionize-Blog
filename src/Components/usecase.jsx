import React from 'react';
import "../Pages/usecase.css"
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Usecase = () => {
    useScrollReveal('.blueprint-text > *, .blueprint-visual, .hub-card');
  return (
    <div className="usecase-container">
     
      <section className="usecase-hero">
        <div className="hero-inner">
          <span className="strategy-tag">Blueprints // Curation</span>
          <h1>Occasion Architecture</h1>
          <p>
            Garments structurally engineered for specific environments. Explore our 
            situational blueprints designed to maximize presence, comfort, and aura.
          </p>
        </div>
      </section>

      <section className="case-blueprint-section light-bg">
        <div className="blueprint-layout">
          <div className="blueprint-text">
            <span className="case-number">01 // CONTEXT</span>
            <h2>The Cyber-Urban Workspace</h2>
            <h3>Architectural Tailoring for High-Output Environments</h3>
            <p>
              Ditch the traditional corporate uniform. Our urban workwear is engineered 
              for modern creative and technical spaces where presence matters. We blend sharp, 
              geometric lines with high-stretch comfort fabrics that keep you immaculate from morning 
              briefs to late studio presentations.
            </p>
            <ul className="blueprint-specs">
              <li><strong>Core Pieces:</strong> Structured Blazers, Tech-Knit Coordinates, Deconstructed Trousers.</li>
              <li><strong>Fabric Engine:</strong> Wrinkle-resistant high-poly blends with dynamic recovery.</li>
            </ul>
            <Link to="/workspace-capsule" className="btn-aqua">Explore Workspace Capsule</Link>
          </div>
          <div className="blueprint-visual">
            <img src="fashion-african-woman-silk-dress-600nw-2147305099.webp" alt="Cyber-Urban Workspace Silhouette Preview" />
          </div>
        </div>
      </section>

     
      <section className="case-blueprint-section dark-bg">
        <div className="blueprint-layout reversed">
          <div className="blueprint-text">
            <span className="case-number aqua-text">02 // CONTEXT</span>
            <h2>High-Performance Street Transit</h2>
            <h3>Fluid Movement Engineered for the City Architecture</h3>
            <p>
              Designed for those constantly in transit. Our outerwear and street layers are optimized 
              for multi-climate city movement, combining modular storage accents with highly technical, 
              breathable fabrics that effortlessly repel the elements without losing an ounce of aesthetic.
            </p>
            <ul className="blueprint-specs dark-specs">
              <li><strong>Core Pieces:</strong> Modular Trench Coats, Cargo Silhouettes, Fluid Windbreakers.</li>
              <li><strong>Fabric Engine:</strong> Water-repellent technical micro-weaves with thermal regulatory cores.</li>
            </ul>
            <Link to="/transit-technicals" className="btn-white">Shop Transit Technicals</Link>
          </div>
          <div className="blueprint-visual">
            <img src="img20-1.jpg" alt="High-Performance Transit Layout Design" />
          </div>
        </div>
      </section>

     
      <section className="case-blueprint-section light-bg">
        <div className="blueprint-layout">
          <div className="blueprint-text">
            <span className="case-number">03 // CONTEXT</span>
            <h2>The After-Hours Statement</h2>
            <h3>Low-Light Avant-Garde for Cultural Drop Windows</h3>
            <p>
              Gallery open windows, underground fashion gatherings, and premium late-night social nodes. 
              This context demands maximum aura. Our after-hours designs focus on deep matte black profiles 
              that capture shadows perfectly, paired with unexpected silhouettes that stand out in any crowd.
            </p>
            <ul className="blueprint-specs">
              <li><strong>Core Pieces:</strong> Asymmetrical Evening Tunics, Heavyweight Structured Drapes, Accent Vests.</li>
              <li><strong>Fabric Engine:</strong> Heavy-drape premium tencel and raw tactile matte cotton formulations.</li>
            </ul>
            <Link to="/EveningDroplistPage" className="btn-aqua">Discover Evening Droplist</Link>
          </div>
          <div className="blueprint-visual">
            <img src="shotkit-dark-photography-0013.jpg" alt="After Hours Deep Accent Silhouette" />
          </div>
        </div>
      </section>

      
      <section className="usecase-selector-hub">
        <div className="hub-header">
          <h2>Shop by Atmosphere</h2>
          <p>Select your operational zone to configure your custom wardrobe capsule.</p>
        </div>
        <div className="hub-grid">
          <div className="hub-card">
            <h4>01 // High Creative Workspace</h4>
            <p>Tailored silhouettes designed for impact in high-profile professional hubs.</p>
          </div>
          <div className="hub-card">
            <h4>02 // Transit & Travel Modules</h4>
            <p>Lightweight, easily packable performance garments built for global movement.</p>
          </div>
          <div className="hub-card">
            <h4>03 // High-Voltage Social</h4>
            <p>Uncompromising, bold designs crafted to turn heads under late-night gallery spots.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Usecase;