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
          <a href='https://laopinion.com.co' target='_blanck'>
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
          <input type='text' placeholder='buscador' />
        </form>
      </div>
    </header>
  )
}

export default Header
