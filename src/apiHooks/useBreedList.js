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
    const fetchProduct = async () => {
      setLoading(true);
      try {
        setError({});
        const { data } = await axios.get(rootURL, config);
        !ignore && setBreedList(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchProduct();
    return () => {
      ignore = true;
    };
  }, []);
  // Breed && console.log(Breed);
  return { BreedList, loading, error };
};

export default useBreedList;
