import React from 'react';

import { MdSearch } from 'react-icons/md';
import CatwikiLogo from '../../../assets/CatwikiLogo.jsx';
import './styles.styl';
import HeroImg from '../../../assets/baner.png';
import Search from '../../../containers/Search';
export const Baner = () => {
  return (
    <div className="baner">
      <div>
        <figure className="baner__figure">
          <CatwikiLogo id="logo--white" />
        </figure>
        <p>Get to know more about your cat breed</p>
        <Search />
        {/* <button>
          search
          <MdSearch />
        </button> */}
      </div>
      <figure>
        <img className="hero" src={HeroImg} alt="Gatopng" />
      </figure>
    </div>
  );
};
