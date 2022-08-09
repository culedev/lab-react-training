import React from 'react';

const DriverCard = ({ name, rating, img, car: { model, licensePlate } }) => {
  const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#455eb5',
    padding: '10px',
    margin: '10px',
    color: 'white',
    textAlign: 'left',
  };

  const stars = (value) => {
    let starRating = Math.round(value);

    if (starRating === 0) {
      return <p>☆☆☆☆☆</p>;
    } else if (starRating === 1) {
      return <p>★☆☆☆☆</p>;
    } else if (starRating === 2) {
      return <p>★★☆☆☆</p>;
    } else if (starRating === 3) {
      return <p>★★★☆☆</p>;
    } else if (starRating === 4) {
      return <p>★★★★☆</p>;
    } else if (starRating === 5) {
      return <p>★★★★★</p>;
    }
  };
  return (
    <div style={cardStyle}>
      <img
        src={img}
        alt=""
        width={'150px'}
        height={'150px'}
        style={{ borderRadius: '100px' }}
      />
      <div style={{ marginLeft: '20px' }}>
        <h3>{name}</h3>
        {stars(rating)}
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
};

export default DriverCard;
