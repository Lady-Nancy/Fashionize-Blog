import React from 'react';
import '../Pages/newArrivals.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const NewArrivals = () => {
  useScrollReveal('.arrivals-hero > *, .arrival-editorial-grid .arrival-item');

  
  const freshDrops = [
    { id: 1, name: 'Asymmetric Drape Vest', type: 'Capsule 04', price: '$210', imgSrc: 'img7-1.jpg' },
    { id: 2, name: 'Monochrome Studio Blazer', type: 'Atelier Line', price: '$315', imgSrc: 'img13-1.jpg' },
    { id: 3, name: 'Fluid Silhouette Skirt', type: 'Core Collection', price: '$185', imgSrc: 'img19-1.jpg' },
    { id: 4, name: 'Heavy Canvas Utility Shell', type: 'Outerwear Matrix', price: '$380', imgSrc: 'img12-1.jpg' }
  ];

  return (
    <div className="arrivals-wrapper">
      <div className="arrivals-hero">
        <span className="arrivals-badge">JUST RELEASED // LIMITED QUANTITIES</span>
        <h1>New Arrivals</h1>
        <p>Explore the latest architectural garments fresh from our Los Angeles workshop cutting tables.</p>
      </div>

     
      <div className="arrival-editorial-grid">
        {freshDrops.map((item) => (
          <div className="arrival-item" key={item.id}>
            <div className="arrival-image-frame">
              <img src={item.imgSrc} alt={item.name} className="arrival-image-asset" />
            </div>
            <div className="arrival-meta">
              <div className="arrival-title-group">
                <span className="arrival-type">{item.type}</span>
                <h3>{item.name}</h3>
              </div>
              <span className="arrival-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;