import React from 'react';
import '../Pages/workspaceCapsule.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WorkspaceCapsule = () => {
  useScrollReveal('.capsule-hero > *, .capsule-grid .spec-card');

 
  const capsuleItems = [
    { id: 1, name: 'Kinetic Tech Blazer', code: 'SYS-01', price: '$295', feature: 'Water-repellent stretch canvas', imgSrc:'img5-1.jpg' },
    { id: 2, name: 'Modular Commuter Pant', code: 'SYS-02', price: '$180', feature: 'Integrated hidden zip cavities', imgSrc:'img11-1.jpg' },
    { id: 3, name: 'Breathable Atelier Overshirt', code: 'SYS-03', price: '$145', feature: 'Anti-crease structural knit', imgSrc:'img17-1.jpg' },
    { id: 4, name: 'Vanguard Utility Vest', code: 'SYS-04', price: '$220', feature: 'Modular magnetic attach layers', imgSrc:'img24-1.jpg' }
  ];

  return (
    <div className="capsule-wrapper">
      <div className="capsule-hero">
        <span className="capsule-badge">CAPSULE 02 // TECHNICAL UTILITY</span>
        <h1>Workspace Capsule</h1>
        <p>Architected for modern professionals. High-performance garments engineered to balance comfort, clean lines, and daily commute utility.</p>
      </div>

     
      <div className="capsule-grid">
        {capsuleItems.map((item) => (
          <div className="spec-card" key={item.id}>
            <div className="spec-image-box">
              <span className="spec-code-tag">{item.code}</span>
              <img src={item.imgSrc} alt={item.name} className="spec-image-asset" />
            </div>
            <div className="spec-meta">
              <div className="spec-title-block">
                <h3>{item.name}</h3>
                <p className="spec-feature-text">{item.feature}</p>
              </div>
              <span className="spec-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkspaceCapsule;