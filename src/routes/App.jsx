import React from 'react';
import { Router } from '@reach/router';

import '../styles/mobile.styl';
import '../styles/tablet.styl';
import '../styles/desktop.styl';

// componnets
import Layout from '../components/Layout';
import Hero from '../containers/Hero';

export const Fese3 = () => <h3>fefefe</h3>;
export const Category = ({ id }) => (
  <div>
    <h1>Vamos putas perras del mal</h1>
    <h3> {id} </h3>;
  </div>
);

const App = () => {
  return (
    <Layout>
      <Router>
        <Hero path="/" />
        <Fese3 path="greg" />
        <Category path="/breed/:id" />
      </Router>
    </Layout>
  );
};

export default App;
