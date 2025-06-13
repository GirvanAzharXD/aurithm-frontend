import React from 'react';

const TermsOfService = ({ onBackHome, onPrivacyPolicy }) => (
  <div className="page-container terms-page">
    <h1 className="terms-title">Terms of Service</h1>
    <p>Thank you for using Aurithm. Please review these terms before using the service.</p>
    <ol className="terms-list">
      <li>
        <b>Agreement to Terms</b><br />
        By accessing or using Aurithm, you confirm that you accept these terms and agree to comply with all applicable laws. If you disagree with any part, please do not use this service.
      </li>
      <li>
        <b>Permitted Use</b><br />
        Aurithm is intended for your personal, non-commercial use. Any misuse or unauthorized use of the service is prohibited.
      </li>
      <li>
        <b>Privacy</b><br />
        Your privacy matters. For details on how your data is handled, please see the <button className="link-button" onClick={onPrivacyPolicy}>Privacy Policy</button>.
      </li>
      <li>
        <b>Ownership</b><br />
        All content and features of Aurithm are the property of the developer and protected by intellectual property laws.
      </li>
      <li>
        <b>No Warranty</b><br />
        Aurithm is provided as-is, without any guarantees. The accuracy of color analysis and recommendations is not assured.
      </li>
      <li>
        <b>Liability Limitation</b><br />
        Aurithm is not responsible for any damages or losses resulting from the use of this service.
      </li>
      <li>
        <b>Updates to Terms</b><br />
        These terms may be updated at any time. Continued use of Aurithm means you accept any changes.
      </li>
    </ol>
    <div className="terms-actions">
      <button className="action-button back-button hero-button get-started" onClick={onBackHome}>
        <span className="arrow left-arrow">&larr;</span> Back to Home
      </button>
    </div>
  </div>
);

export default TermsOfService;
