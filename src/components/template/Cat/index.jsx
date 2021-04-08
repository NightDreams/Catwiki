import React from 'react';
import './index.styl';
import { Link } from '@reach/router';

const Cat = ({ src, name, desc, imgID }) => {
  return (
    <Link to={`/breed/${imgID}`}>
      <div className="cat">
        <figure>
          <img src={src || ''} alt="GatoBengala  " />
        </figure>

        <div className="catData">
          <h3>{name || 'Bengal'}</h3>
          <p>
            {desc ||
              ` Bengals are a lot of fun to live with, but they're definitely not the
          cat for everyone, or for first-time cat owners. Extremely intelligent,
          curious and active, they demand a lot of interaction and woe betide
          the owner who doesn't provide it.`}
          </p>
        </div>
      </div>
    </Link>
  );
};
export default Cat;
