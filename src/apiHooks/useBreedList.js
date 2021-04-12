import React, { useEffect, useState } from 'react';

import axios from 'axios';

const useBreedList = () => {
  let [BreedList, setBreedList] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  let rootURL = `https://api.thecatapi.com/v1/breeds`;

  var config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '8f34cd37-dd49-45a2-a0e4-1ccd65f582b6s',
    },
  };

  useEffect(async () => {
    let ignore = false;
    setLoading(true);
    setError({});
    await axios
      .get(rootURL, config)
      .then((e) => {
        !ignore && setBreedList(e.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('data ', error.response.data);
          console.log('status', error.response.status);
          console.log('headers', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log('config', error.config);
      });

    return () => {
      ignore = true;
    };
  }, []);
  // Breed && console.log(Breed);
  return { BreedList, loading, error };
};

export default useBreedList;
