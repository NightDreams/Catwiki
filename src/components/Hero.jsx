import React from 'react';

const Hero = () => (
  <div className="hero">
    <section className="baner">
      <div>
        <figure>
          <img src="" alt="catwiki" />
        </figure>
        <p>Get to know more about your cat breed</p>
        <button>search </button>
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
  </div>
);
export default Hero;
