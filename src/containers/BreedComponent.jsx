import React from 'react';
// import GetBreed from './GetBreed';
import useBreed from '../apiHooks/useBreed';
import Breed from '../components/organism/Breed';

export const BreedComponent = ({ breedId }) => {
  const { BreedData } = useBreed(breedId);
  if (BreedData?.loading) {
    return <h2>loading component... </h2>;
  }
  if (BreedData?.error) {
    return <h2>error component... </h2>;
  }
  return <Breed data={BreedData?.data} />;
};
