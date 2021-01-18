import React from 'react';
import { Router } from '@reach/router';

import '../styles/mobile.styl';
import '../styles/tablet.styl';
import '../styles/desktop.styl';
import Layout from '../components/Layout';
import Hero from '../components/Hero';

const App = () => (
  <>
    <Router>
      <Layout path="/">
        <Hero path="/hero" />
      </Layout>
    </Router>
  </>
);

export default App;
