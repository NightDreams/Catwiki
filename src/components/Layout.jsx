import React from 'react';
import CatwikiLogo from '../assets/CatwikiLogo';
import { Link } from '@reach/router';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Link to="/">
        <figure className="logo">
          <CatwikiLogo />
        </figure>
      </Link>
      {children}
      <footer className="footer">
        <Link to="/">
          <CatwikiLogo id="logo--white" />
        </Link>
        <a
          className="repo"
          target="blank"
          href="https://github.com/NightDreams/Catwiki"
        >
          © created by <b>NightDreams </b> - devChallenge.io 2021
        </a>
      </footer>
    </div>
  );
};
export default Layout;
