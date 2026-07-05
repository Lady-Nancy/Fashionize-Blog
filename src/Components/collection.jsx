import React, { useState, useEffect } from 'react';
import '../Pages/collection.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Collection = () => {
  useScrollReveal('.collection-hero > *, .collection-slider-window');

 
  const products = [
    { id: 1, name: 'Aura Silhouette Trench', price: '$340', imgSrc: 'img2-1.jpg' },
    { id: 2, name: 'Modular Atelier Blazer', price: '$280', imgSrc: 'img3-1.jpg' },
    { id: 3, name: 'Geometric Technical Trouser', price: '$190', imgSrc: 'guy.jpg' },
    { id: 4, name: 'Minimalist Luxury Parka', price: '$420', imgSrc: 'sexy-girl.jpg' },
    { id: 5, name: 'Cyberpunk Crop Layer', price: '$160', imgSrc: 'collect.jpg' },
    { id: 6, name: 'Atelier Core Coat', price: '$310', imgSrc: 'collect2.jpg' },
    { id: 7, name: 'Vanguard Silk Dress', price: '$450', imgSrc: 'collect3.jpg' },
    { id: 8, name: 'Shadow Studio Jacket', price: '$290', imgSrc: 'img10-1.jpg' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setCardsToShow(1);
      } else {
        setCardsToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - cardsToShow : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= products.length - cardsToShow ? 0 : prevIndex + 1
    );
  };

  const slideTranslation = currentIndex * (100 / cardsToShow);

  return (
    <div className="collection-wrapper">
      <div className="collection-hero">
        <span className="collection-badge">SEASONAL DROPS // CORE SYSTEM</span>
        <h1>The Collection</h1>
        <p>A curation of structural silhouettes designed for micro-climates and modern environments.</p>
      </div>

      <div className="collection-slider-container">
        
        <button className="slider-arrow arrow-left" onClick={handlePrev} aria-label="Previous slide">
          ✦
        </button>

        <div className="collection-slider-window">
          <div 
            className="collection-slider-track" 
            style={{ '--slide-transform': `-${slideTranslation}%` }}
          >
            {products.map((product) => (
              <div className="product-card" key={product.id}>
                
                {/* 📸 Real image container layout wrapper */}
                <div className="product-image-container">
                  <img 
                    src={product.imgSrc} 
                    alt={product.name} 
                    className="product-image-asset" 
                  />
                </div>

                <div className="product-info">
                  <h4>{product.name}</h4>
                  <span>{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="slider-arrow arrow-right" onClick={handleNext} aria-label="Next slide">
          ✦
        </button>

      </div>
    </div>
  );
};

export default Collection;