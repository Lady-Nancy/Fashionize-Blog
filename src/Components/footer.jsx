import React from 'react';
import { Link } from 'react-router-dom';
import '../Pages/footer.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
useScrollReveal('.footer-section');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Brand Column */}
        <div className="footer-brand-column">
          <Link to="/" className="footer-logo">
            FASHIONIZE<span className="logo-dot">.</span>
          </Link>
          <p className="brand-moto">
            Architected for style. Tailored for absolute confidence. Defining the blueprint of the modern wardrobe.
          </p>
          <div className="footer-socials">
            <a href="#instagram" className="social-link">Instagram</a>
            <a href="#tiktok" className="social-link">TikTok</a>
            <a href="#pinterest" className="social-link">Pinterest</a>
          </div>
        </div>

        {/* Directory Links Matrix */}
        <div className="footer-links-matrix">
          <div className="links-column">
            <h5>Ecosystem</h5>
            <Link to="/platform">Platform</Link>
            <Link to="/usecases">Use Cases</Link>
            <a href="#collections">Collections</a>
          </div>

          <div className="links-column">
            <h5>House</h5>
            <Link to="/company">Company</Link>
            <Link to="/resources">Resources</Link>
            <a href="#journal">Studio Journal</a>
          </div>

          <div className="links-column">
            <h5>Assistance</h5>
            <Link to="/contact">Contact Support</Link>
            <a href="#shipping">Shipping & Returns</a>
            <a href="#faq">Size Matrix FAQ</a>
          </div>
        </div>

      </div>

     
      <div className="footer-baseline">
        <div className="baseline-container">
          <p className="copyright-text">
            &copy; {currentYear} FASHIONIZE. All Rights Reserved.
          </p>
          <div className="compliance-links">
            <a href="#privacy">Privacy Protocol</a>
            <a href="#terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;