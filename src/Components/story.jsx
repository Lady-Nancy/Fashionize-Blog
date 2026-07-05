import React from 'react';
import '../Pages/story.css';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Story = () => {
  useScrollReveal('.story-hero > *, .story-body p');

  return (
    <div className="story-wrapper">
      <div className="story-hero">
        <span className="story-badge">EST. 2022 // REBEL ORIGINS</span>
        <h1>Our Story</h1>
      </div>
      <div className="story-body">
        <p>
          Fashionize began in a small apartment workshop with a simple, disruptive idea: luxury construction shouldn't require a legacy retail markup. We noticed an industry bloated with intermediaries and massive waste cycles, and decided to build an alternative path.
        </p>
        <p>
          By creating an on-demand manufacturing loop and prioritizing structural geometric tailoring, we built a brand ecosystem centered around confidence, accessibility, and high-performance design principles.
        </p>
      </div>
    </div>
  );
};

export default Story;