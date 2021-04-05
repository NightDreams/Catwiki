import React from 'react';
// import GetBreed from './GetBreed';
import useBreed from '../apiHooks/useBreed';
import Breed from '../components/organism/Breed';

export const BreedComponent = ({ breedId }) => {
  const { BreedData, loading, error } = useBreed(breedId);
  // BreedData && console.log(BreedData);
  // BreedData && console.log(Breed.breeds[0].id);
  // error && console.log(error);
  if (BreedData) {
    return <Breed data={BreedData} />;
  }
  if (loading) {
    return <h2>loading component... </h2>;
  }
  if (error) {
    return <h2>error component... </h2>;
  }
};
