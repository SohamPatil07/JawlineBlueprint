import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      title: '1. Expert Jawline Exercises',
      description: 'Targeted routines designed to activate underused facial and neck muscles for maximum definition.',
      icon: '💪'
    },
    {
      title: '2. Daily Habits for Long-Term Shape',
      description: 'Simple lifestyle tweaks that enhance and maintain your jawline 24/7.',
      icon: '⏰'
    },
    {
      title: '3. Science-Based Breakdown',
      description: 'Why these methods work, how the jaw structure responds, and what NOT to do.',
      icon: '🔬'
    },
    {
      title: '4. Diet + Water Retention Control',
      description: 'Reduce puffiness, improve definition, and optimize bone visibility with smarter choices.',
      icon: '🥗'
    },
    {
      title: '5. Before/After Progress System',
      description: 'Track your improvement with a guided 30-day plan included inside the e-book.',
      icon: '📊'
    },
    {
      title: '6. Bonus: LooksMax Basics',
      description: 'Small improvements in grooming, lighting, posture, and angles that upgrade your entire appearance.',
      icon: '✨'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">What's Inside The E-Book</h2>
          <p className="features-subtitle">
            A complete system to transform your jawline naturally and permanently
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
