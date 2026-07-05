import React from 'react';
import "../Pages/careersPage.css"

const DEPARTMENTS = [
  { name: 'Engineering', count: 4 },
  { name: 'Design & UX', count: 2 },
  { name: 'Product Management', count: 1 },
  { name: 'Data & Analytics', count: 3 }
];

const PERKS = [
  { title: 'Remote-First', desc: 'Work from anywhere in the world with core collaboration hours.' },
  { title: 'Growth Budget', desc: 'Annual stipend for courses, books, and attending global conferences.' },
  { title: 'Health & Wellness', desc: 'Comprehensive medical cover plus physical/mental fitness allowances.' }
];

export default function CareersPage() {
  const handleScrollToJobs = () => {
    const element = document.getElementById('jobs-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="careers-container">
     
      <section className="hero-banner">
        <div className="hero-content">
          <span className="subtitle-tag">WE ARE HIRING</span>
          <h1 className="hero-main-title">
            Build the future of technology <br />
            <span className="highlight-text">with us.</span>
          </h1>
          <p className="hero-body-text">
            We are a tight-knit team of creators, builders, and thinkers working together to solve incredibly challenging problems. Explore our open roles below.
          </p>
          
         
          <div className="hero-cta-wrapper">
            <button className="btn-aqua" onClick={handleScrollToJobs}>
              View Open Positions
            </button>
          </div>
        </div>
      </section>

    
      <section className="perks-section">
        <div className="section-title-block">
          <h2>Why you'll love working here</h2>
          <p>We take care of our people so they can focus on doing their best work.</p>
        </div>
        
        <div className="perks-grid">
          {PERKS.map((perk, i) => (
            <div key={i} className="perk-card">
              <div className="perk-icon-placeholder">✓</div>
              <h3>{perk.title}</h3>
              <p>{perk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="jobs-section" className="jobs-list-section">
        <div className="section-title-block left-align">
          <h2>Open Positions</h2>
          <p>Find the role that fits your skills and ambitions.</p>
        </div>

        <div className="departments-list">
          {DEPARTMENTS.map((dept, index) => (
            <div key={index} className="dept-row">
              <div className="dept-info">
                <h3>{dept.name}</h3>
                <span className="role-count">{dept.count} open roles</span>
              </div>
              <button className="dept-view-btn" onClick={handleScrollToJobs}>
                Browse Roles →
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}