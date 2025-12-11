import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">Why I Created This Ebook</h2>
        <div className="about-content">
          <p>
            I built this guide because most men feel stuck with their jawline, believing it's 100% genetics — which is completely wrong. After years of studying facial aesthetics, muscle activation, mewing science, nutrition, and fat distribution, I realized the truth:
          </p>
          <p className="about-highlight">
            Your jawline can absolutely be improved with the right system.
          </p>
          <p>
            This e-book is the exact blueprint I wish I had starting out — simple, actionable, and designed for real-world results.
          </p>
          <p>
            If you're ready to build a sharper, more masculine look without expensive procedures or unrealistic expectations, this guide will give you everything you need.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
