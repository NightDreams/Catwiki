import React from 'react';

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
            <img src="" alt="cat1" />
            <img src="" alt="cat2" />
            <img src="" alt="cat3" />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Post;
