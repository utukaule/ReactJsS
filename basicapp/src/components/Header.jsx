import React from 'react';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
  return (
    <>
      <nav>

        <h1>Basic web</h1>
        <main>
          <HashLink to={'/'}>Home</HashLink>
          <HashLink to={'/about'}>About</HashLink>
          <HashLink to={'/contact'}>Contact</HashLink>
          <HashLink to={'/product'}>Product</HashLink>
        </main>
      </nav>
    </>
  )
}

export default Header