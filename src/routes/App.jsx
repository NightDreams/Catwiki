import React from 'react';
import { Router } from '@reach/router';

import '../styles/mobile.styl';
import '../styles/tablet.styl';
import '../styles/desktop.styl';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

export const Fese3 = () => <h3>fefefe</h3>;

const App = () => {
  return (
    <Layout>
      <Router>
        <Hero path="/" />
        <Fese3 path="greg" />
      </Router>
    </Layout>
  );
};

export default App;
