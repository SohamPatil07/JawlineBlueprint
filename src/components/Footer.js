import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h2 className="footer-logo">DapperMix</h2>
            <p className="footer-tagline">
              Elevating confidence through professional jawline enhancement
            </p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h3>Company</h3>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#testimonials">Testimonials</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-column">
              <h3>Resources</h3>
              <a href="#faq">FAQ</a>
              <a href="#blog">Blog</a>
              <a href="#guides">Guides</a>
              <a href="#support">Support</a>
            </div>
            <div className="footer-column">
              <h3>Legal</h3>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 DapperMix. All rights reserved.</p>
          <div className="social-links">
            <a href="#instagram">Instagram</a>
            <a href="#twitter">Twitter</a>
            <a href="#facebook">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
