import React from 'react';
import Cat1 from '../../assets/image 2.png';
import Cat2 from '../../assets/image 1.png';
import Cat3 from '../../assets/image 3.png';
const Post = () => {
  return (
    <section className="post">
      <div className="row1">
        <hr />
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
            <img className="cat__1" src={Cat1} alt="cat1" />
            <img className="cat__2" src={Cat2} alt="cat2" />
          </figure>
          <figure className="cat__3">
            <img src={Cat3} alt="cat3" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Post;
