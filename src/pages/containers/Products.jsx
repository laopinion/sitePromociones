import React, { Component } from 'react'
import ProductsLayout from '../components/Products-layout.jsx'
import Product from '../components/Product.jsx'
import destacado from '../../img/destacado.jpg'

const listProducts = [
  {
    id: '001',
    src: destacado,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nihil perspiciatis, dolorem expedita doloribus praesentium iusto obcaecati soluta. Optio facere consequatur atque eligendi hic totam fugit esse cupiditate alias ab!'
  },
  {
    id: '002',
    src: destacado,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nihil perspiciatis, dolorem expedita doloribus praesentium iusto obcaecati soluta. Optio facere consequatur atque eligendi hic totam fugit esse cupiditate alias ab!'
  },
  {
    id: '003',
    src: destacado,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nihil perspiciatis, dolorem expedita doloribus praesentium iusto obcaecati soluta. Optio facere consequatur atque eligendi hic totam fugit esse cupiditate alias ab!'
  }
]

class Products extends Component {
  constructor (props) {
    super(props)
    this.state = {
      initial: 0
    }
  }

  render () {
    return (
      <ProductsLayout>
        {
          listProducts.map((item, index) => {
            return <Product key={index} {...item} />
          })
        }
      </ProductsLayout>
    )
  }
}

export default Products
