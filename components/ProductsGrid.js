import data from '../data'
import Product from './Product'
import './products.sass'

const ProductsGrid = (props) => {
  return (
    <section id='Products' className='container'>
      <div className='header'>
        <h2 className='title'>Productos destacados</h2>
        <hr />
      </div>
      {
        data.map((item, index) => (
          <Product key={item.id} {...item} />
        ))
      }
    </section>
  )
}

export default ProductsGrid
