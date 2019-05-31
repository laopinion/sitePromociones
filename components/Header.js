// import Link from 'next/link';

// const linkStyle = {
//   marginRight: 15
// };

// const Header = () => (
//   <div>
//     <Link href="/">
//       <a style={linkStyle}>Home</a>
//     </Link>
//     <Link href="/about">
//       <a style={linkStyle}>About</a>
//     </Link>
//   </div>
// );

// export default Header;
import Link from 'next/link'
import Search from './containers/Search'
import './header.sass'

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

const Header = (props) => {
  return (
    <header id='Header'>
      <hr />
      <div className='container header'>
        <figure className='logo'>
          <Link href='/'>
            <a>
              <img src='/static/images/logo-op.svg' alt='laopinión' />
            </a>
          </Link>
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
        <Search listProducts={props.products} />
      </div>
    </header>
  )
}

export default Header
