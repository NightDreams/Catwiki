import React from 'react';
import styles from './topbreed.styl';
const TopBreeds = () => {
  return (
    <div className="TopBreeds">
      <h2>Top 10 most searched breeds</h2>
      <div className="catList">
        <div className="cat">
          <img src="" alt="GatoBengala  " />
          <h3>1. Bengal</h3>
          <p>
            Bengals are a lot of fun to live with, but they're definitely not
            the cat for everyone, or for first-time cat owners. Extremely
            intelligent, curious and active, they demand a lot of interaction
            and woe betide the owner who doesn't provide it.{' '}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopBreeds;
