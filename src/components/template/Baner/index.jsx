import React from 'react';

import { MdSearch } from 'react-icons/md';
import CatwikiLogo from '../../../assets/CatwikiLogo.jsx';
import './styles.styl';
import HeroImg from '../../../assets/baner.png';

export const Baner = () => {
  return (
    <section className="baner">
      <div>
        <figure className="baner__figure">
          <CatwikiLogo id="logo--white" />
        </figure>
        <p>Get to know more about your cat breed</p>
        <button>
          search
          <MdSearch />
        </button>
      </div>
      <figure>
        <img className="hero" src={HeroImg} alt="Gatopng" />
      </figure>
    </section>
  );
};
