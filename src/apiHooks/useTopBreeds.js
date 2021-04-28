import React, { useEffect, useState } from 'react';

import axios from 'axios';

const useTopBreeds = (page) => {
  let [top10, setTop10] = useState({
    loading: true,
    error: false,
    data: {},
  });
  let rootURL = `https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`;

  var config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': '8f34cd37-dd49-45a2-a0e4-1ccd65f582b6s',
    },
  };

  useEffect(async () => {
    let ignore = false;
    await axios
      .get(rootURL, config)
      .then((e) => {
        !ignore && setTop10({ ...top10, loading: false, data: e.data });
      })
      .catch((error) => {
        // console.log('error objet ', error.toJSON());
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          setTop10({ ...top10, error: error?.response, loading: false });
          console.log('data ', error.response.data);
          console.log('status', error.response.status);
          console.log('headers', error.response.headers);
        } else if (error.request) {
          setTop10({ ...top10, error: error?.request, loading: false });
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          setTop10({ ...top10, error: error?.message, loading: false });
          console.log('Error', error.message);
        }
        setTop10({ ...top10, error: error?.config, loading: false });
        console.log('config', error.config);
      });

    return () => {
      ignore = true;
    };
  }, [page]);
  // Breed && console.log(Breed);
  return { top10 };
};

export default useTopBreeds;
