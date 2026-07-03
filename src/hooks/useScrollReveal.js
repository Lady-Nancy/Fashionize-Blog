import { useEffect } from 'react';

export const useScrollReveal = (selectorCSS) => {
  useEffect(() => {
    const scrollObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-on-scroll-active');
        } else {
          entry.target.classList.remove('reveal-on-scroll-active');
        }
      });
    }, {
      root: null,
      rootMargin: '-20px',
      threshold: 0.1      
    });

    // Find the elements specific to this page
    const targets = document.querySelectorAll(selectorCSS);

    targets.forEach((target) => {
      target.classList.add('reveal-on-scroll-hidden'); 
      scrollObserver.observe(target);                 
    });

    return () => scrollObserver.disconnect();
  }, [selectorCSS]); // Re-runs cleanly if selectors change
};