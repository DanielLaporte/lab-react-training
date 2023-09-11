import React from 'react';

const BoxColor = ({ r, g, b }) => {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;

  const rgbToHex = (r, g, b) => {
    return `#${((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase()}`;
  };

  const boxStyle = {
    backgroundColor,
    width: '500px', 
    height: '100px', 
    border: '3px solid #000', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: backgroundColor === 'rgb(255, 0, 0)' ? 'white' : 'black',
  };

  const paragraphStyle = {
    margin: '2px ', // Ajusta el espaciado entre las líneas
  };

  return (
    <div className="BoxColor" style={boxStyle}>
      <p style={paragraphStyle}>rgb ({r}, {g}, {b})</p>
      <p style={paragraphStyle}> {rgbToHex(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
