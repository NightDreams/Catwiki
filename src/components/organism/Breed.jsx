import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Breed = ({ data }) => {
  const tag = data.breeds[0];
  const id = tag.id;

  const urlImages = `https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${id}`;
  const [catPics, setcatPics] = useState(null);

  var config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '8f34cd37-dd49-45a2-a0e4-1ccd65f582b6s',
    },
  };
  useEffect(async () => {
    const catId = data.breeds[0].id;
    const gatos = await axios.get(urlImages, config);
    setcatPics(gatos.data);
  }, []);
  // catPics && console.log('pcitures para map', catPics);

  return (
    <>
      <div className="BreedData">
        <figure>
          <img src={data.url} alt={name} />
          <div className="catBackground"></div>
        </figure>
        <div className="breed_data">
          <h3>{tag.name || 'Bengal'}</h3>
          <p>{` Descripción ${tag.description}`}</p>
          <p>
            <b> temperament:</b>
            {`  ${tag.temperament}`}
          </p>
          <p>
            <b>origen: </b>
            {`${tag.origin}`}
          </p>
          <p>
            <b>life_span:</b>
            {` ${tag.life_span}`}
          </p>
          <p>
            <b>adaptability:</b> {` ${tag.adaptability}`}
          </p>
          <p>
            <b>friendly:</b>
            {` ${tag.child_friendly}`}
          </p>
          <p>
            <b>grooming</b>
            {` ${tag.grooming}`}
          </p>
          <p>
            <b>intelligence:</b>
            {` ${tag.intelligence}`}
          </p>
          <p>
            <b>healt issues: </b>
            {`${tag.health_issues}`}
          </p>
          <p>
            <b>social needs:</b>
            {` ${tag.social_needs}`}
          </p>
          <p>
            <b>stranger friendly:</b>
            {` ${tag.social_needs}`}
          </p>
        </div>
      </div>
      <div className="Breed__pictures">
        <h3>other photos</h3>
        <div className="Breed__wrapper">
          {catPics &&
            catPics.map((e) => (
              <figure key={e.id}>
                <img src={e.url} alt={name} />
              </figure>
            ))}
        </div>
      </div>
    </>
  );
};

export default Breed;
