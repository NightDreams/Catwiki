import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Link } from '@reach/router';
import useBreedList from '../apiHooks/useBreedList';
import './search.styl';
import { MdSearch } from 'react-icons/md';
import { IconContext } from 'react-icons';

const Search = () => {
  const { BreedList } = useBreedList();
  const [search, setSearch] = useState('');
  const [on, seton] = useState(null);

  const searchInput = useRef(null);
  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };
  const filterBreeds = useMemo(
    () =>
      BreedList?.data.filter((breed) => {
        return breed.name.toLowerCase().includes(search.toLowerCase());
      }),
    [BreedList.data, search]
  );
  if (BreedList?.loading) {
    return <div className="TopBreeds">loading component... </div>;
  }
  if (BreedList?.error) {
    return <div className="TopBreeds">error component... </div>;
  }

  return (
    <div className="search">
      <div className="searchWrapper">
        <input
          ref={searchInput}
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search"
          onClick={() => (!on ? seton('on') : seton(''))}
        />

        <IconContext.Provider
          value={{
            size: '2rem',
            color: 'black',
          }}
        >
          <MdSearch />
        </IconContext.Provider>
      </div>

      <div className={`SearchList`} id={on}>
        {filterBreeds.map((e) => (
          <Link key={e.id} to={`/breed/${e.reference_image_id}`}>
            <p>{e.name}</p>
          </Link>
        ))}
        {/* {BreedList.map((e) => (
            <p key={e.id}>{e.name}</p>
          ))} */}
      </div>
    </div>
  );
};

export default Search;
