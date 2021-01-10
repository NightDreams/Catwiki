import React from 'react';
import { Router } from '@reach/router';

import '../styles/mobile.styl';
import '../styles/tablet.styl';
import '../styles/desktop.styl';
import Layout from '../components/Layout';

const Dash = () => <div>Dash</div>;

const App = () => (
  <>
    <Router>
      <Layout path="/" />
      <Dash path="dashboard" />
    </Router>
  </>
);

export default App;
