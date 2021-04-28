import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rating from './Rating';
import useBreedGalery from '../../apiHooks/useBreedGalery';

const Breed = ({ data }) => {
  const tag = data.breeds[0];
  const id = tag.id;
  const { GaleryBreed } = useBreedGalery(id);

  // if (GaleryBreed?.loading) {
  //   return <div className="TopBreeds">loading component... </div>;
  // }
  // if (GaleryBreed?.error) {
  //   return <div className="TopBreeds">error component... </div>;
  // }
  return (
    <>
      <div className="BreedData">
        <figure>
          <img src={data.url} alt={name} />
          <div className="catBackground"></div>
        </figure>
        <div className="breed_data">
          <h3>{tag.name || 'Bengal'}</h3>
          <div className="tags">
            <p>{`${tag.description}`}</p>
            <li>
              <b>temperament:</b>
              {` ${tag.temperament}`}
            </li>
            <li>
              <b>origen: </b>
              {`${tag.origin}`}
            </li>
            <li>
              <b>life_span:</b>
              {` ${tag.life_span} years`}
            </li>
            <li>
              <b>adaptability:</b>
              <Rating score={tag.adaptability} tag="ab" />
            </li>
            <li>
              <b>affection_level:</b>
              <Rating score={tag.adaptability} tag="al" />
            </li>
            <li>
              <b>Child friendly:</b>
              <Rating score={tag.child_friendly} tag="cf" />
            </li>
            <li>
              <b>grooming</b>
              <Rating score={tag.grooming} tag="gmm" />
            </li>
            <li>
              <b>intelligence:</b>
              <Rating score={tag.intelligence} tag="iq" />
            </li>
            <li>
              <b>healt issues: </b>
              <Rating score={tag.health_issues} tag="hs" />
            </li>
            <li>
              <b>social needs:</b>
              <Rating score={tag.social_needs} tag="sn" />
            </li>
            <li>
              <b>stranger friendly:</b>
              <Rating score={tag.stranger_friendly} tag="sf" />
            </li>
          </div>
        </div>
      </div>
      <div className="Breed__pictures">
        <h3>other photos</h3>
        {GaleryBreed && (
          <div className="Breed__wrapper">
            {GaleryBreed?.data.map((e) => (
              <figure key={e.id}>
                <img src={e.url} alt={name} />
              </figure>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Breed;
