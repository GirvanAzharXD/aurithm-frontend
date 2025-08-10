import React from 'react';

const AboutPage = ({ onGetStartedClick, appName = "Aurithm" }) => {
  return (
    <div className="page-container about-page">
      <div className="about-section">
        <h2 className="about-title">About {appName}</h2>
        <p>
          <strong>{appName}</strong> is a web application that analyzes your color features (skin, hair, and eyes) to generate a personalized color palette. The app will accept your uploaded photo and provide a list of colors that best suit you based on the 12-season analysis system.
        </p>
      </div>

      <div className="about-section">
        <h3>Features</h3>
        <ul>
          <li>Color analysis using advanced AI.</li>
          <li>Personal palette generation based on the 12-season system.</li>
          <li>Photo upload support from your device.</li>
          <li>Privacy first: your photo is never stored on our server.</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>How does it work?</h3>
        <p>
          Color theory is a complex science about how colors interact. What <strong>{appName}</strong> does is try to find the colors that harmonize best with you. The results may be affected by the lighting in the photo, but this will give you a good idea of what colors suit you. You can then use this information as a guide when shopping for new clothes.
        </p>
      </div>

      <div className="about-section">
        <h2>Sounds Good, But...</h2>

        <h3>What will you do with my photo?</h3>
        <p>
          <strong>{appName}</strong> is a project aimed at helping people find their best colors. This app <strong>WILL NOT</strong> store any user's photo or personal information. All analysis processes happen temporarily and data is deleted immediately after.
        </p>

        <h3>Who are you and why should I trust you?</h3>
        <p>
          Glad you asked! My name is <strong>Girvan Azhar</strong>. I'm a developer passionate about building useful and beautiful tools. You can find my other projects on my GitHub profile <a href="https://github.com/GirvanAzharXD" target="_blank" rel="noopener noreferrer">here</a>. This project was inspired by a social media trend where professional stylists recommend clothing based on skin tone. I thought it would be cool to build a tool that could do this for everyone.
        </p>

        <h3>How is this done?</h3>
        <p>
          This app sends your uploaded image to <strong>Google Gemini</strong>, one of the most advanced AI models, to perform color analysis. The results are then used to generate a color palette, which you can use to:
        </p>
        <ul>
            <li>Save the recommended color palette as a reference.</li>
            <li>Avoid buying clothes in colors that don't match.</li>
            <li>Share the results and see what your friends think.</li>
        </ul>
      </div>

      <div className="about-cta">
          <button onClick={onGetStartedClick} className="hero-button get-started">
            Sounds great! Let's get started <span className="arrow">&rarr;</span>
          </button>
      </div>
    </div>
  );
};

export default AboutPage;
