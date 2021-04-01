import React from 'react';

const Stat = ({ statId, rating }) => {
  let statStyle = 'blanck';
  if (rating > statId) {
    statStyle = 'fill';
  }
  return <span className={statStyle}></span>;
};

const Rating = ({ score, tag }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {stars.map((star, i) => (
        <Stat key={`${tag} ${i}`} statId={i} rating={score} />
      ))}
    </div>
  );
};

export default Rating;
