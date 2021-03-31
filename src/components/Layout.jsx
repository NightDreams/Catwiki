import React from 'react';
import CatwikiLogo from '../assets/CatwikiLogo';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <figure className="logo">
        <CatwikiLogo />
      </figure>
      {children}
      <div className="footer">
        <figure>
          <img src="" alt="catwiki" />
        </figure>
        <p>© You name - devchallenge.io 2020</p>
      </div>
    </div>
  );
};
export default Layout;
