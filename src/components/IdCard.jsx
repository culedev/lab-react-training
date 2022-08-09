import { findByLabelText } from '@testing-library/react';
import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const divStyle = {
    display: 'flex',
    width: '100%',
    border: '1px solid black',
    margin: '10px',
    padding: '10px',
  };

  const formatDate = (date) => {
    let dateArr = date.toString().split(' ').splice(0, 4).join(' ');
    return dateArr;
  };

  return (
    <div style={divStyle}>
      <img src={picture} alt="" width={'200px'} />
      <div>
        <h4>First name: {firstName}</h4>
        <h4>Last name: {lastName}</h4>
        <h4>Gender: {gender}</h4>
        <h4>Height: {height}m</h4>
        <h4>Birth: {formatDate(birth)}</h4>
      </div>
    </div>
  );
};

export default IdCard;
