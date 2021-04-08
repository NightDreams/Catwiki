import React, { useState, useRef, useMemo, useEffect } from 'react';
import useBreedList from '../apiHooks/useBreedList';
import './search.styl';
import { MdSearch } from 'react-icons/md';
import { IconContext } from 'react-icons';

const Search = () => {
  const { BreedList, loading, error } = useBreedList();
  const [search, setSearch] = useState('');
  const [on, seton] = useState(null);

  const searchInput = useRef(null);
  const handleSearch = () => {
    setSearch(searchInput.current.value);
  };

  useEffect(() => {}, [on, search, BreedList, loading, error]);
  // top10 && console.log(top10);
  BreedList && console.log(BreedList.length);
  if (loading) {
    return <div className="TopBreeds">loading component... </div>;
  }

  if (BreedList) {
    const filterBreeds = BreedList.filter((breed) => {
      return breed.name.toLowerCase().includes(search.toLowerCase());
    });

    // const filterBreeds = useMemo(
    //   () =>
    //     BreedList.filter((breed) => {
    //       return breed.name.toLowerCase().includes(search.toLowerCase());
    //     }),
    //   [BreedList, search]
    // );
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

        <div className={`catList`} id={on}>
          {filterBreeds.map((e) => (
            <p key={e.id}>{e.name}</p>
          ))}
          {/* {BreedList.map((e) => (
            <p key={e.id}>{e.name}</p>
          ))} */}
        </div>
      </div>
    );
  }
  if (error) {
    return <div className="TopBreeds">error component... </div>;
  }
};

export default Search;
