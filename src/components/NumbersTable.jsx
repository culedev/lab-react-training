import React from 'react';

const NumbersTable = ({ limit }) => {
  const arrNumbers = [];
  
  for (let i = 1; i <= limit; i++) {
    arrNumbers.push(i);
  }

  const mainDiv = {
    display: "flex",
    flexWrap: "wrap",
    width: "300px",
  }

  return (
    <div style={mainDiv}>
      {arrNumbers.map((eachNum, i) => {
        const coloredNum = i % 2 !== 0 ? "red" : "white"
        return (
          <div style={{ border: "1px solid black", width: "50px", height: "50px", backgroundColor: coloredNum}}>
            <h3>{eachNum}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default NumbersTable;
