import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useBreedGalery = (id) => {
  const [GaleryBreed, setGaleryBreed] = useState(null);
  const urlImages = `https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${id}`;

  var config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '8f34cd37-dd49-45a2-a0e4-1ccd65f582b6s',
    },
  };
  useEffect(async () => {
    // const catId = data.breeds[0].id;
    const gatos = await axios.get(urlImages, config);
    setGaleryBreed(gatos.data);
  }, []);
  return [GaleryBreed];
};

export default useBreedGalery;
