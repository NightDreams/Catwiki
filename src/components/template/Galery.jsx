import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';
import Cat from '../organism/Cat';

// Components

const Galery = () => {
  const [Breeds, setBreeds] = useState([]);
  // const url = `https://api.thecatapi.com/v1/breeds/`;
  const rootURL = `https://api.thecatapi.com/v1/images/search?breed_ids=`;
  const beng = `${rootURL}beng`;
  const norw = `${rootURL}norw`;
  const sava = `${rootURL}sava`;
  const srex = `${rootURL}srex`;

  var config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '8f34cd37-dd49-45a2-a0e4-1ccd65f582b6s',
    },
  };
  const Cats = [beng, norw];

  useEffect(async () => {
    const data1 = await axios.get(beng, config);
    const data2 = await axios.get(norw, config);
    const data3 = await axios.get(sava, config);
    const data4 = await axios.get(srex, config);
    setBreeds([...data1.data, ...data2.data, ...data3.data, ...data4.data]);
  }, []);
  Breeds && console.log('Galery', Breeds);
  return (
    <section className="galery">
      {/* {Breeds && Breeds.map((e) => console.log(e.breeds[0].name))} */}
      {/* {Breeds && Breeds.map((e) => console.log("Id de la raza"e.breeds[0].id))} */}
      {/* {(Breeds.lenght = 0) & Breeds.map((e) => console.log(e))} */}
      <h3> Most Searched Breeds</h3>
      <hr />
      <Link to="/top10">
        <div className="galery__title">
          <h2>66+ Breeds For you to discover</h2>
          <button className="link">SEE MORE</button>
        </div>
      </Link>

      <div className="galery_img">
        {Breeds &&
          Breeds.map((e) => (
            //set link here -id
            <Cat
              key={e.breeds[0].id}
              name={e.breeds[0].name}
              img={e.url}
              // id={e.breeds[0].id}
              id={e.id}
            />
          ))}
      </div>
    </section>
  );
};

export default Galery;
