import React, { useEffect, useState } from 'react';
import Breed from '../components/organism/Breed';
import axios from 'axios';
// import useBreed from '../apiHooks/useBreed';

const GetBreed = ({ id }) => {
  // const [BreedID] = useBreed(id);
  const [BreedID, setBreedID] = useState(null);
  var rootURL = `https://api.thecatapi.com/v1/images/${id}`;

  var config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '8f34cd37-dd49-45a2-a0e4-1ccd65f582b6s',
    },
  };

  useEffect(async () => {
    const { data } = await axios.get(rootURL, config);
    setBreedID(data);
  }, []);
  console.log(BreedID);
  return BreedID && <Breed data={BreedID} />;
};

export default GetBreed;
