import React from 'react';
import { Router } from '@reach/router';

import '../styles/mobile.styl';
import '../styles/tablet.styl';
import '../styles/desktop.styl';

// componnets
import Layout from '../components/Layout';
import Hero from '../containers/Hero';
import { BreedComponent } from '../containers/BreedComponent';
import TopBreeds from '../containers/TopBreeds';
import Search from '../containers/Search';

const App = () => {
  return (
    <Layout>
      <Router>
        <Hero path="/" />
        <TopBreeds path="/top10" />
        <Search path="/search" />
        <BreedComponent path="/breed/:breedId" />
      </Router>
    </Layout>
  );
};

export default App;
