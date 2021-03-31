import React from 'react';
import { Link } from '@reach/router';

const Cat = ({ id, name, img }) => {
  return (
    <Link to={`/breed/${id}`}>
      <div className="Breed">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <p>{name || Bengal}</p>
      </div>
    </Link>
    // rEST OF PIEZAS DEL COMPONENTE
  );
};

export default Cat;
