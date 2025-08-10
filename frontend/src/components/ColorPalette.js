import React, { useState } from 'react';

const getContrastColor = (hex) => {
  if (!hex) return '#000000';
  const hexValue = hex.charAt(0) === '#' ? hex.substring(1, 7) : hex;
  const r = parseInt(hexValue.substring(0, 2), 16);
  const g = parseInt(hexValue.substring(2, 4), 16);
  const b = parseInt(hexValue.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#FFFFFF';
};

// Tambahkan kembali prop 'description'
const ColorPalette = ({ title, description, palette, onColorClick }) => {
  const [hoveredHex, setHoveredHex] = useState(null);

  if (!palette || palette.length === 0) {
    return null;
  }

  return (
    <div className="palette-card">
      <h3>{title}</h3>
      {/* Tampilkan deskripsi jika ada */}
      {description && <p className="palette-description">{description}</p>}
      <div className="palette-grid">
        {palette.map((color, index) => (
          <div 
            key={index}
            className="color-swatch-container"
            onClick={() => onColorClick(color.hex)}
            onMouseEnter={() => setHoveredHex(color.hex)}
            onMouseLeave={() => setHoveredHex(null)}
            title={`Klik untuk melihat pratinjau warna ini`}
          >
            <div 
              className="color-swatch" 
              style={{ backgroundColor: color.hex }}
            >
              {hoveredHex === color.hex && (
                <div 
                  className="swatch-info-text" 
                  style={{ color: getContrastColor(color.hex) }}
                >
                  <span>{color.name}</span>
                  <small>{color.hex}</small>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ColorPalette;
