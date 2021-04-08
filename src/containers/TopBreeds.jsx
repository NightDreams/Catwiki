import React, { useState } from 'react';
import Cat from '../components/template/Cat';
import useTopBreeds from '../apiHooks/useTopBreeds';

const TopBreeds = () => {
  const [page, setpage] = useState(0);
  const { top10, loading, error } = useTopBreeds(page);
  // top10 && console.log(top10);

  if (loading) {
    return <div className="TopBreeds">loading component... </div>;
  }

  if (top10) {
    return (
      <div className="TopBreeds">
        <h2>Top 10 most searched breeds</h2>
        <button onClick={() => setpage(page + 1)}>next </button>
        <div className="catList">
          {top10.map((e) => (
            <Cat
              key={e.id}
              src={e.image.url}
              name={e.name}
              desc={e.description}
              imgID={e.image.id}
            />
          ))}
        </div>
      </div>
    );
  }
  if (error) {
    return <div className="TopBreeds">error component... </div>;
  }
};

export default TopBreeds;
