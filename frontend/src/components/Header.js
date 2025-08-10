import React from 'react';
import ThemeToggle from './ThemeToggle';

// Komponen SVG untuk logo Aurithm
const AurithmLogoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
        <style>
            {`
                .aurithm-grad-stop-1 { stop-color: var(--primary-color); }
                .aurithm-grad-stop-2 { stop-color: var(--tag-text); }
            `}
        </style>
        <circle cx="50" cy="50" r="15" stroke="url(#aurithm-grad-final)" strokeWidth="8"/>
        <circle cx="50" cy="50" r="30" stroke="url(#aurithm-grad-final)" strokeWidth="8" strokeOpacity="0.6"/>
        <circle cx="50" cy="50" r="45" stroke="url(#aurithm-grad-final)" strokeWidth="8" strokeOpacity="0.3"/>
        <defs>
            <linearGradient id="aurithm-grad-final" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
                <stop className="aurithm-grad-stop-1"/>
                <stop offset="1" className="aurithm-grad-stop-2"/>
            </linearGradient>
        </defs>
    </svg>
);


const AppHeader = ({ appName = "Aurithm", theme, toggleTheme, onLogoClick, onAboutClick, onContactClick, onSupportClick }) => {
  return (
    <header className="app-main-header">
      <div className="header-content">
        <div 
          className="logo-container" 
          onClick={onLogoClick} 
          title="Kembali ke Beranda"
        >
          <AurithmLogoIcon />
          <span className="logo-text">{appName}</span>
        </div>
        <div className="nav-container">
          <nav className="header-nav">
            <button onClick={onAboutClick} className="nav-link as-button">About</button>
            <button onClick={onContactClick} className="nav-link as-button">Contact</button>
            <button onClick={onSupportClick} className="nav-link as-button">Support</button>
          </nav>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
