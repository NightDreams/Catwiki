import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useBreedGalery = (id) => {
  const [GaleryBreed, setGaleryBreed] = useState({
    loading: true,
    error: false,
    data: [],
  });
  const urlImages = `https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${id}`;

  var config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '8f34cd37-dd49-45a2-a0e4-1ccd65f582b6s',
    },
  };
  useEffect(async () => {
    let ignore = false;
    await axios
      .get(urlImages, config)
      .then((e) => {
        !ignore &&
          setGaleryBreed({ ...GaleryBreed, loading: false, data: e.data });
      })
      .catch((error) => {
        if (error.response) {
          setGaleryBreed({
            ...GaleryBreed,
            error: error?.response,
            loading: false,
          });
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
        } else if (error.request) {
          setGaleryBreed({
            ...GaleryBreed,
            error: error?.request,
            loading: false,
          });

          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
        } else {
          // Something happened in setting up the request that triggered an Error
          setGaleryBreed({
            ...GaleryBreed,
            error: error?.message,
            loading: false,
          });
        }
      });
    return () => {
      ignore = true;
    };
  }, [id]);
  return { GaleryBreed };
};

export default useBreedGalery;
