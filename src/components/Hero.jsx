import React from 'react';
import { MdSearch } from 'react-icons/md';

const Hero = () => (
  <div className="hero">
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
    <section className="galery">
      <h3> Most Searched Breeds</h3>
      <hr />
      <h2>66+ Breeds For you to discover</h2>
      <div className="galery_img">
        <div>
          <figure>
            <img src="" alt="g1" />
          </figure>
          <p>Bengal</p>
        </div>
        <div>
          <figure>
            <img src="" alt="g2" />
          </figure>
          <p>Savannah</p>
        </div>
        <div>
          <figure>
            <img src="" alt="g3" />
          </figure>
          <p>Norwegian Forest Cat</p>
        </div>
        <div>
          <figure>
            <img src="" alt="g4" />
          </figure>
          <p>Selkirk Rex</p>
        </div>
      </div>
    </section>
    <section className="post">
      <div className="row1">
        <h2>Why should you have a cat?</h2>
        <p>
          Having a cat around you can actually trigger the release of calming
          chemicals in your body which lower your stress and anxiety leves
        </p>
        <button className="link">READ MORE </button>
      </div>
      <div className="row">
        <div className="cats">
          <figure>
            <img src="" alt="cat1" />
            <img src="" alt="cat2" />
            <img src="" alt="cat3" />
          </figure>
        </div>
      </div>
    </section>
  </div>
);
export default Hero;
