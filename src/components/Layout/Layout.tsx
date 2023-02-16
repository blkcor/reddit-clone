import React from 'react';
import NavBar from '../NavBar/NavBar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <NavBar />
    <main>{children}</main>
  </>
)
export default Layout;
