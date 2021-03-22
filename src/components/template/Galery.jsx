import React from 'react';

const Galery = () => {
  return (
    <section className="galery">
      <h3> Most Searched Breeds</h3>
      <hr />
      <div className="galery__title">
        <h2>66+ Breeds For you to discover</h2>
        <button className="link">SEE MORE</button>
      </div>
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
  );
};

export default Galery;
