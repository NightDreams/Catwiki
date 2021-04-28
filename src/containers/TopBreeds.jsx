import React, { useState } from 'react';
import useTopBreeds from '../apiHooks/useTopBreeds';
import Cat from '../components/template/Cat';
import './topbreed.styl';

const TopBreeds = () => {
  const [page, setpage] = useState(0);
  const { top10 } = useTopBreeds(page);
  // top10 && console.log(top10);

  if (top10?.loading) {
    return <div className="TopBreeds">loading component... </div>;
  }
  if (top10?.error) {
    return <div className="TopBreeds">error component... </div>;
  }
  return (
    <div className="TopBreeds">
      <h2>Top 10 most searched breeds</h2>
      <button onClick={async () => await setpage(page + 1)}>next </button>
      <div className="catList">
        {top10?.data.map((e) => (
          <Cat
            key={e?.id}
            src={e?.image?.url}
            name={e?.name}
            desc={e?.description}
            imgID={e?.image?.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TopBreeds;
