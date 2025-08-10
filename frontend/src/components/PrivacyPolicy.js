import React from 'react';

const PrivacyPolicy = ({ onBackHome, onContactPage }) => (
  <div className="page-container privacy-page">
    <h1 className="privacy-title">Privacy Policy</h1>
    <p>Your privacy is important to us. This policy describes how Aurithm handles your information when you use our service.</p>
    <ol className="privacy-list">
      <li>
        <b>Information Collected</b><br />
        Aurithm only collects the minimum information needed to operate the service, such as photos you upload for color analysis. These files are processed temporarily and are not stored on our servers.
      </li>
      <li>
        <b>Use of Information</b><br />
        The information you provide is used solely to deliver and improve the color analysis and recommendations, enhance your experience, and respond to your support requests.
      </li>
      <li>
        <b>Data Security</b><br />
        We use reasonable measures to protect your data. However, no method of electronic storage or transmission is completely secure, so we cannot guarantee absolute protection.
      </li>
      <li>
        <b>Third-Party Services</b><br />
        Aurithm may use third-party tools to improve functionality. These providers have their own privacy practices regarding your information.
      </li>
      <li>
        <b>Your Rights</b><br />
        You may request access, correction, or deletion of your personal data. To do so, please contact us via the <button className="link-button" onClick={onContactPage}>Contact page</button>.
      </li>
      <li>
        <b>Policy Updates</b><br />
        This policy may be updated occasionally. Any changes will be posted on this page, so please review it regularly.
      </li>
      <li>
        <b>Contact</b><br />
        For questions about this policy, reach out through the <button className="link-button" onClick={onContactPage}>Contact page</button>.
      </li>
    </ol>
    <div className="privacy-actions">
      <button className="action-button back-button hero-button get-started" onClick={onBackHome}>
        <span className="arrow left-arrow">&larr;</span> Back to Home
      </button>
    </div>
  </div>
);

export default PrivacyPolicy;
