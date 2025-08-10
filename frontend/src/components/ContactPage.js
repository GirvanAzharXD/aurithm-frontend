import React from 'react';

const ContactPage = ({ onGoHomeClick, appName = "Aurithm" }) => {
  return (
    <div className="page-container contact-page">
      <div className="contact-section">
        <h2 className="contact-title">Contact</h2>
        <p>
          Thank you for trying <strong>{appName}</strong>! If you have any questions, suggestions, or feedback, you can contact me through the following methods:
        </p>
      </div>

      <div className="contact-section">
        <h3>Contact Information</h3>
        <ul className="contact-list">
          <li>
            <strong>Email:</strong> <a href="mailto:girvanazharr@gmail.com">girvanazharr@gmail.com</a>
          </li>
          <li>
            <strong>Linkedin:</strong> <a href="https://www.linkedin.com/in/girvanazhar/" target="_blank" rel="noopener noreferrer">Mochamad Girvan Azhar</a>
          </li>
          <li>
            <strong>GitHub:</strong> <a href="https://github.com/GirvanAzharXD" target="_blank" rel="noopener noreferrer">GirvanAzharXD</a>
          </li>
        </ul>
        <p>
          I strive to respond as quickly as possible. Thank you for your interest in <strong>{appName}</strong>!
        </p>
      </div>

      <div className="contact-cta">
          <button onClick={onGoHomeClick} className="hero-button get-started back-button">
            <span className="arrow left-arrow">&larr;</span> Back to Home
          </button>
      </div>
    </div>
  );
};

export default ContactPage;
