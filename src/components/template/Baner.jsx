import React from 'react';
import { MdSearch } from 'react-icons/md';

const Baner = () => {
  return (
    <section className="baner">
      <div>
        <figure>
          <img src="" alt="catwiki" />
        </figure>
        <p>Get to know more about your cat breed</p>
        <button>
          search
          <MdSearch />
        </button>
      </div>
      <figure>
        <img src="" alt="Gatopng" />
      </figure>
    </section>
  );
};

export default Baner;
