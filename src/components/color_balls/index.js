import React from 'react';
import './style.css'; // Importa os estilos

const ColorBalls = ({ bgColor = 'blue', direction = 'horizontal',className = '' }) => {
    return (
        <div className={`color-ball-container ${className} ${direction}`}>
            <div className="color-ball" style={{ backgroundColor: bgColor }}></div>
        </div>
  );
};

export default ColorBalls;