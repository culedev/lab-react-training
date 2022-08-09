import { useState } from 'react';

const LikeButton = () => {
  const colorArr = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const [counter, setCounter] = useState(0);
  const [color, setColor] = useState('white');

  const increaseLikes = () => {
    setCounter(counter + 1);
  };
  const handleColor = () => {
    let randomNum = Math.floor(Math.random() * colorArr.length);
    let randomColor = colorArr[randomNum];
    setColor(randomColor);
  };

  const bothFunc = () => {
    increaseLikes();
    handleColor();
  }

  return (
    <div>
      <button style={{ backgroundColor: color }} onClick={bothFunc}>
        {counter} Likes
      </button>
    </div>
  );
};

export default LikeButton;
