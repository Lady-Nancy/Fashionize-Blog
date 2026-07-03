import React, { useState } from 'react';
import '../Pages/contact.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Contact = () => {
    useScrollReveal('.contact-info-panel > *, .form-field, .btn-submit-form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Connect your submission handler mechanism here
    console.log('Fashionize Contact Submission:', formData);
  };

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        
        {/* Info Column */}
        <div className="contact-info-panel">
          <span className="panel-tag">Connect // Fashionize</span>
          <h1>Let's Talk Style</h1>
          <p>
            Whether you are discussing capsule curation, order logistics, media loops, 
            or career placements at our studio—we are listening.
          </p>

          <div className="info-details-strip">
            <div className="info-block">
              <h5>The Atelier</h5>
              <p>8442 Melrose Avenue<br />West Hollywood, CA 90069</p>
            </div>
            
            <div className="info-block">
              <h5>Direct Inquiries</h5>
              <p>studio@fashionize.com<br />+1 (310) 555-0192</p>
            </div>

            <div className="info-block">
              <h5>Operational Hours</h5>
              <p>Monday — Friday<br />09:00 AM — 06:00 PM PST</p>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-panel">
          <form onSubmit={handleSubmit} className="minimal-form">
            <div className="form-field">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="ENTER YOUR FULL NAME" 
                required 
              />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="YOUR.EMAIL@DOMAIN.COM" 
                required 
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message Brief</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="6" 
                placeholder="DESCRIBE YOUR INQUIRY OR CORE PROJECT DETAILS..." 
                required 
              />
            </div>

            <button type="submit" className="btn-submit-form">
              Transmit Transmission
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default Contact;