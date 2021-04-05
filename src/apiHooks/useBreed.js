import React, { useEffect, useState } from 'react';

import axios from 'axios';

const useBreed = (id) => {
  const [BreedData, setBreedData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  var rootURL = `https://api.thecatapi.com/v1/images/${id}`;

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
        !ignore && setBreedData(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchProduct();
    return () => {
      ignore = true;
    };
  }, [id]);
  // Breed && console.log(Breed);
  return { BreedData, loading, error };
};

export default useBreed;
