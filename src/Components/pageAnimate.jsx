import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../Pages/pageAnimate.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PageAnimate = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    const sections = document.querySelectorAll('.usecase-container, .contact-container, .resources-container, .platform-container, .company-container, .home-container, section');

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1, // Fires layout animation when 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add the active display class when scrolled into view
          entry.target.classList.add('section-reveal-active');
          
          // Find text layers/cards inside this specific section to stagger them top to bottom
          const childElements = entry.target.querySelectorAll('h1, h2, h3, p, .resource-card, .hub-card, .blueprint-visual, .form-field');
          childElements.forEach((el, index) => {
            el.style.setProperty('--reveal-delay', `${index * 0.1}s`);
            el.classList.add('element-cascade-active');
          });
          
          // Stop watching this section once it has animated onto the screen cleanly
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      // Set initial structural fade classes safely
      section.classList.add('section-reveal-base');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [location]); // Resets and re-runs perfectly if they switch route tabs

  return <div className="global-viewport-wrapper">{children}</div>;
};

export default PageAnimate;