import React from 'react';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-toggle-container">
      <button onClick={toggleTheme} className="theme-toggle-button" title="Ganti Tema">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
};
export default ThemeToggle;