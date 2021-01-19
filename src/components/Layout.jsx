import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="logo">Logos</div>
      {children}
      <div>footer test </div>
    </div>
  );
};
export default Layout;
