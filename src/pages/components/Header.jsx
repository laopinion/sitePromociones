import React from 'react';
import './header.sass';
import logo from '../../img/op.png';

const Header = () => {
  return (
    <header id='header'>
      <div className='container header'>
        <figure className='logo'>
          <img src={logo} alt='laopinión'/>
        </figure>
        <ul className='menu'>
          <li>boton #1</li>
          <li>boton #2</li>
          <li>boton #3</li>
        </ul>
        <form id='form'>
          <input type="text" placeholder='buscador'/>
        </form>
      </div>
    </header>
  )
}

export default Header;
