import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className='header-nav'>
        <ul className='header-ul'>
          <li>Home</li>
          <li>Products</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
