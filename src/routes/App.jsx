import React from 'react';
import { Router } from '@reach/router';

import '../styles/mobile.css';
import '../styles/tablet.css';
import '../styles/desktop.css';
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
