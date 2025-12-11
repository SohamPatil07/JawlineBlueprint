import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo.jpg" alt="JawlineBlueprint Logo" />
        </div>
        <p className="footer-tagline">
          Elevating confidence through professional jawline enhancement
        </p>
        <p className="footer-email">
          Email: <a href="mailto:sohampatil7799@gmail.com">sohampatil7799@gmail.com</a>
        </p>
        <p className="footer-copyright">
          &copy; 2025 JawlineBlueprint. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
