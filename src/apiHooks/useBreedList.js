import React, { useEffect, useState } from 'react';

import axios from 'axios';

const useBreedList = () => {
  const [BreedList, setBreedList] = useState({
    loading: true,
    error: false,
    data: [],
  });
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
        if (error.response) {
          setBreedList({
            ...BreedList,
            error: error.response,
            loading: false,
          });
        } else if (error.request) {
          setBreedList({ ...BreedList, error: error.request, loading: false });
        } else {
          setBreedList({ ...BreedList, loading: false, error: error });
        }
      });

    return () => {
      ignore = true;
    };
  }, []);
  return { BreedList };
};

export default useBreedList;
