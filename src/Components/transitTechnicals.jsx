import React from 'react';
import '../Pages/transitTechnicals.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TransitTechnicals = () => {
  useScrollReveal('.transit-hero > *, .manifesto-grid-cell, .spec-row');

  
  const technicalSpecs = [
    {
      id: "SYS-01",
      sku: "TRN-09",
      category: "OUTER SHELL",
      title: "Modular Trench Architecture",
      name: "Packable Transit Mac",
      price: "$310",
      note: "Windproof shell with modular straps",
      details: "Detachable storage bays and an adjustable geometric drop tail engineered for rapid city displacement.",
      image: 'https://i.pinimg.com/736x/74/f1/87/74f1875c103353efed4f889e8780c158.jpg' 
    },
    {
      id: "SYS-02",
      sku: "CRG-04",
      category: "KINETIC LAYER",
      title: "Articulated Silhouette System",
      name: "Fluid Windbreaker & Cargo Set",
      price: "$285",
      note: "Dynamic range of motion panels",
      details: "Articulated structural joints mapping natural leg movement, paired with ultra-lightweight fluid windproofing panels.",
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-i8OE4MD-ME9GTRGw-jYrjwsUCtUG6DwCt97AxGLr1MjMKTE803BvBRE&s=10' 
    },
    {
      id: "SYS-03",
      sku: "MTRX-11",
      category: "ENGINE CORE",
      title: "Technical Micro-Weave System",
      name: "Thermal Regulatory Core Hood",
      price: "$195",
      note: "Hydrophobic element defense layer",
      details: "Hydrophobic external micro-weaves that violently repel weather elements on contact while utilizing thermal regulatory cores.",
      image: 'https://www.hunterselement.co.nz/cdn/shop/files/Core_Hood-Alpine-Front-RGB_1600x.jpg?v=1740015160' 
    }
  ];

  return (
    <div className="transit-wrapper">
      
     
      <div className="transit-hero">
        <span className="transit-badge">02 // SYSTEM CONTEXT</span>
        <h1>Fluid Movement</h1>
        <span className="hero-subline">ENGINEERED FOR THE CITY ARCHITECTURE</span>
      </div>

     
      <div className="manifesto-editorial-grid">
        <div className="manifesto-grid-cell design-intent">
          <span className="cell-label">DESIGN INTENT</span>
          <h2>Optimized for multi-climate city movement.</h2>
        </div>
        
        <div className="manifesto-grid-cell integration">
          <span className="cell-label">INTEGRATION</span>
          <p>Combining modular storage accents with highly technical, breathable fabrics that effortlessly repel the elements without losing an ounce of aesthetic.</p>
        </div>

        <div className="manifesto-grid-cell output">
          <span className="cell-label">SYSTEM METRICS</span>
          <div className="metrics-list">
            <span>// WATER-REPELLENT MICRO-WEAVES</span>
            <span>// THERMAL REGULATORY CORES</span>
          </div>
        </div>
      </div>

     
      <div className="transit-spec-matrix">
        {technicalSpecs.map((item) => (
          <div className="spec-row" key={item.id}>
            
           
            <div className="spec-image-frame">
              <img src={item.image} alt={item.name} className="spec-product-img" />
            </div>

            <div className="spec-id-block">
              <div className="spec-meta-top">
                <span className="spec-number">{item.id}</span>
                <span className="spec-sku">{item.sku}</span>
              </div>
              <span className="spec-category">{item.category}</span>
            </div>

           
            <div className="spec-content-block">
              <div className="spec-header-line">
                <h3>{item.title}</h3>
                <div className="spec-price-pill">{item.price}</div>
              </div>
              <span className="product-commercial-name">{item.name}</span>
              <p className="product-technical-details">{item.details}</p>
              <div className="product-system-note">
                <span className="note-bracket">[</span> {item.note} <span className="note-bracket">]</span>
              </div>
            </div>

          </div>
        ))}
      </div>

     
      <div className="transit-visual-anchor">
        <img 
          src="https://cdn.mos.cms.futurecdn.net/5UHJyv855VLphRvZ8TuuBY.jpg" 
          alt="Street transit architecture showcase" 
          className="transit-hero-image" 
        />
        <div className="visual-overlay-tag">FABRIC ENGINE // CONTEXT GRAPH 02</div>
      </div>
    </div>
  );
};

export default TransitTechnicals;