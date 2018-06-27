import React from 'react'
import './header.sass'
import logo from '../../img/op.png'

const menu = [
  {
    href: '/boton-1',
    title: 'Boton #1'
  },
  {
    href: '/boton-2',
    title: 'Boton #2'
  },
  {
    href: '/boton-3',
    title: 'Boton #3'
  }
]

const Header = () => {
  return (
    <header id='Header'>
      <hr />
      <div className='container header'>
        <figure className='logo'>
          <a href='/'>
            <img src={logo} alt='laopinión' />
          </a>
        </figure>
        <ul className='menu'>
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <a href={item.href}>{item.title}</a>
              </li>
            )
          })}
        </ul>
        <form id='form'>
          <input id='search' type='text' />
          <i className='lupa' />
        </form>
      </div>
    </header>
  )
}

export default Header
