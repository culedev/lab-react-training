import React from 'react';

const Rating = ({ children }) => {
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
  <div>
    {stars(children)}
  </div>
  )
};

export default Rating;
