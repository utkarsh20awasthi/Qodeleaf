import React, { useState } from 'react';

const ColorGenerator = () => {
  const [color, setColor] = useState('#ffffff');

  const generateColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div style={{ textAlign: 'center', padding: '30px' }}>
      <div
          style={{
               backgroundColor: color,
          width: '100px',
          height: '100px',
          margin: 'auto',
          border: '2px solid #000',
              
          }}
        className="showacase3"
      ></div>
      <p>Generated Color: {color}</p>
      <button onClick={generateColor}>Generate Color</button>
    </div>
  );
};

export default ColorGenerator;
