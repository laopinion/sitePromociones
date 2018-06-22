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
    <header id='header'>
      <hr />
      <div className='container header'>
        <figure className='logo'>
          <img src={logo} alt='laopinión' />
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
          <input type='text' placeholder='buscador' />
        </form>
      </div>
    </header>
  )
}

export default Header
