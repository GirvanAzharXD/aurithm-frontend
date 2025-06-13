import React from 'react';

const SupportPage = ({ onGoHomeClick, onContactClick, appName = "Aurithm" }) => {
  return (
    <div className="page-container support-page">
      <div className="support-section">
        <h2 className="support-title">Support</h2>
        <p>
          Welcome to the <strong>{appName}</strong> support page. Here you will find answers to common questions and helpful information about using the app.
        </p>
      </div>

      <div className="support-section">
        <h3>Frequently Asked Questions</h3>

        <div className="faq-item">
          <h4>How accurate is the color analysis?</h4>
          <p>
            The color analysis uses Google Gemini, an AI model with knowledge of the 12-season color analysis system to determine your color season. However, the quality of the input photo and lighting conditions can affect accuracy. For best results, use a bright photo with a neutral background.
          </p>
        </div>

        <div className="faq-item">
          <h4>Is my photo stored on your server?</h4>
          <p>
            <strong>No.</strong> We do not store your photo on any server. The image is sent to the backend only for analysis by the AI and is not saved after the process is complete. Your privacy is our priority.
          </p>
        </div>

        <div className="faq-item">
          <h4>How do I interpret the color palette results?</h4>
          <p>
            The color palette generated for you contains colors that complement your skin tone. These colors are generally suitable for clothing, accessories, and makeup. You can use this palette as a guide when shopping or choosing outfits.
          </p>
        </div>
      </div>

      <div className="support-section">
        <h3>Still Need Help?</h3>
        <p>
          If you can't find the answer you're looking for, feel free to contact me. You can reach me through the{' '}
          <button onClick={onContactClick} className="link-button">contact page</button>.
        </p>
      </div>

       <div className="support-cta">
          <button onClick={onGoHomeClick} className="hero-button get-started back-button">
            <span className="arrow left-arrow">&larr;</span> Back to Home
          </button>
      </div>
    </div>
  );
};

export default SupportPage;
