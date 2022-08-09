import React from 'react';

const Random = ({ min, max }) => {
  const randomNum = Math.floor(Math.random() * max + min);
  return (
    <div>
      <h3>
        Random value between {min} and {max} => {randomNum}
      </h3>
    </div>
  );
};

export default Random;
