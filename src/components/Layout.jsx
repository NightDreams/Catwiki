import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="logo">Logos</div>
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
