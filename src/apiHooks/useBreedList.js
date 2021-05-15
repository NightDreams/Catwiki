import React, { useEffect, useState } from 'react';

import axios from 'axios';

const useBreedList = () => {
  const [BreedList, setBreedList] = useState({
    loading: true,
    error: false,
    data: [],
  });
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  let rootURL = `https://api.thecatapi.com/v1/breeds`;

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
        !ignore && setBreedList({ ...BreedList, loading: false, data: e.data });
      })
      .catch((error) => {
        console.log('trigger error');

        if (error.response) {
          console.log('trigger response');
          console.count('response');
          setBreedList({
            ...BreedList,
            error: error?.response,
            loading: false,
          });
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('data ', error.response.data);
          console.log('status', error.response.status);
          console.log('headers', error.response.headers);
        } else if (error.request) {
          console.count('request');

          setBreedList({ ...BreedList, error: error?.request, loading: false });

          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          // setBreedList({ ...BreedList, error: 'bernie', loading: false });
          setBreedList({ ...BreedList, loading: false, error: error });
          console.log(error);
          // console.log('Error', error.error.message);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);
  // Breed && console.log(Breed);
  return { BreedList };
};

export default useBreedList;
