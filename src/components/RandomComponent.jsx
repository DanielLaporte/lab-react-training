import React from 'react';


const RandomComponent = ({ min, max }) => {
  const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomValue = getRandomNumber(min, max);

  return (
    <div className="Random">
      <p>Random value between {min} y {max}: {randomValue}</p>
      
    </div>
  );
};

export default RandomComponent;