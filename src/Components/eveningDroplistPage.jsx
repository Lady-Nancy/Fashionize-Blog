import React, { useState } from 'react';
import "../Pages/eveningDroplistPage.css"

const INITIAL_DROPS = [
  { id: 1, name: "Midnight Eclipse Jacket", price: "$189", time: "8:00 PM", image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&auto=format&fit=crop&q=60" },
  { id: 2, name: "Twilight Cargo Pants", price: "$120", time: "8:00 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5B8tvF5nPyUNKWgiEeSnqKGudcYAo8Qj0n2S-edpazUJMOevwchIOQtG&s=10" },
  { id: 3, name: "Obsidian Elegance - Luxury Evening Wear Dress", price: "$240", time: "9:30 PM", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiHpTYzVxHobwDu99Cl_bzrIKq-XxIMMF7egOil5AOh4AIIl4yIN3D5A&s=10" },
];

export default function EveningDroplistPage() {
  const [showList, setShowList] = useState(false);

  const handleDiscoverClick = () => {
    setShowList(true);
    const element = document.getElementById('droplist-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-container">
    
      <nav className="navbar">
        <div className="nav-logo">NEXT_DROP</div>
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">How it Works</a>
        </div>
      </nav>

     
      <header className="hero-section">
        <div className="glow-effect"></div>
        <span className="badge">Tonight's Exclusive Releases</span>
        
        <h1 className="hero-title">
          The Dark Side of <br />
          <span className="gradient-text">Streetwear.</span>
        </h1>
        
        <p className="hero-subtitle">
          Highly limited quantities. Dropping tonight only. Once they are gone, they are locked in the vault forever.
        </p>

        <div className="button-container">
          <button className="btn-aqua" onClick={handleDiscoverClick}>
            Discover Evening Droplist
          </button>
          
          <div className="countdown-status">
            <span className="status-dot"></span>
            Next drop live in <span className="timer">02:14:55</span>
          </div>
        </div>
      </header>

      {/* Droplist Grid */}
      <main id="droplist-section" className={`droplist-main ${showList ? 'visible' : 'hidden'}`}>
        <div className="section-header">
          <h2>Tonight's Lineup</h2>
          <span className="item-count">3 Items Confirmed</span>
        </div>

        <div className="drop-grid">
          {INITIAL_DROPS.map((item) => (
            <div key={item.id} className="drop-card">
              <div className="card-image-wrapper">
                <img src={item.image} alt={item.name} className="card-image" />
                <div className="card-time-tag">{item.time}</div>
              </div>

              <div className="card-info">
                <h3 className="card-title">{item.name}</h3>
                <div className="card-footer">
                  <span className="card-price">{item.price}</span>
                  <button className="card-action-btn">Set Reminder →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}