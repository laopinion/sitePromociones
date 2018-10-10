import destacado1 from '../img/products/product_1.jpg'
import destacado2 from '../img/products/product_2.jpg'
import destacado3 from '../img/products/product_3.jpg'
import destacado4 from '../img/products/product_4.jpg'
// import slideOne from '../img/slide-1.jpg'
// import subProduct01 from '../img/sub_product_01.jpg'
// import subProduct02 from '../img/sub_product_02.jpg'
// import slideOneMovil from '../img/movil/slide-1.jpg'

// const screenWith = window.innerWidth
// let slide1 = slideOne
// let slide2 = slideOne

// if (screenWith <= 480) {
//   slide1 = slideOneMovil
// }

const listProducts = [
  {
    id: '001',
    src: destacado1,
    title: 'Aspiradora para auto',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nihil perspiciatis, dolorem expedita doloribus praesentium iusto obcaecati soluta. Optio facere consequatur atque eligendi hic totam fugit esse cupiditate alias ab!',
    slide: destacado1,
    subproducts: [
      {
        id: '0001',
        title: 'Aspiradora para auto',
        src: destacado1,
        id_parent: '001'
      },
      {
        id: '0002',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.',
        src: destacado2,
        id_parent: '001'
      },
      {
        id: '0003',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.',
        src: destacado3,
        id_parent: '001'
      },
      {
        id: '0004',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.',
        src: destacado4,
        id_parent: '001'
      }
    ]
  },
  {
    id: '002',
    src: destacado2,
    title: 'Set de ejercicio',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nihil perspiciatis, dolorem expedita doloribus praesentium iusto obcaecati soluta. Optio facere consequatur atque eligendi hic totam fugit esse cupiditate alias ab!',
    slide: destacado2,
    subproducts: [
      {
        id: '0001',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-001.',
        src: destacado2,
        id_parent: '002'
      },
      {
        id: '0002',
        title: 'Balones',
        src: destacado1,
        id_parent: '002'
      },
      {
        id: '0003',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-001.',
        src: destacado3,
        id_parent: '002'
      },
      {
        id: '0004',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-001.',
        src: destacado4,
        id_parent: '002'
      }
    ]
  },
  {
    id: '003',
    src: destacado3,
    title: 'Smart band',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nihil perspiciatis, dolorem expedita doloribus praesentium iusto obcaecati soluta. Optio facere consequatur atque eligendi hic totam fugit esse cupiditate alias ab!',
    slide: destacado3,
    subproducts: [
      {
        id: '0001',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-001.',
        src: destacado3,
        id_parent: '003'
      },
      {
        id: '0002',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.',
        src: destacado1,
        id_parent: '003'
      },
      {
        id: '0003',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.',
        src: destacado2,
        id_parent: '002'
      },
      {
        id: '0003',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.',
        src: destacado4,
        id_parent: '003'
      }
    ]
  },
  {
    id: '004',
    src: destacado4,
    title: 'Olla a presión HOME ELEMENTS',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nihil perspiciatis, dolorem expedita doloribus praesentium iusto obcaecati soluta. Optio facere consequatur atque eligendi hic totam fugit esse cupiditate alias ab!',
    slide: destacado4,
    subproducts: [
      {
        id: '0001',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-001.',
        src: destacado4,
        id_parent: '003'
      },
      {
        id: '0002',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.',
        src: destacado1,
        id_parent: '003'
      },
      {
        id: '0003',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.',
        src: destacado2,
        id_parent: '002'
      },
      {
        id: '0003',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.',
        src: destacado3,
        id_parent: '003'
      }
    ]
  }
]

export default listProducts
