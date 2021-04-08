import React, { useEffect, useState } from 'react';

import axios from 'axios';

const useTopBreeds = (page) => {
  let [top10, setTop10] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  let rootURL = `https://api.thecatapi.com/v1/breeds?limit=10&page=${page}`;

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
        !ignore && setTop10(data);
      } catch (err) {
        setError(err);
      }
      setLoading(false);
    };

    fetchProduct();
    return () => {
      ignore = true;
    };
  }, [page]);
  // Breed && console.log(Breed);
  return { top10, loading, error };
};

export default useTopBreeds;
