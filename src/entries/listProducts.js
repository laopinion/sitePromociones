import destacado from '../img/destacado.jpg'
import slide from '../img/slide-1.jpg'
import subProduct01 from '../img/sub_product_01.jpg'
import subProduct02 from '../img/sub_product_02.jpg'

const listProducts = [
  {
    id: '001',
    src: destacado,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit product 001.',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nihil perspiciatis, dolorem expedita doloribus praesentium iusto obcaecati soluta. Optio facere consequatur atque eligendi hic totam fugit esse cupiditate alias ab!',
    slide: slide,
    subproducts: [
      {
        id: '0001',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-001.',
        src: subProduct01
      },
      {
        id: '0002',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.',
        src: subProduct02
      },
      {
        id: '0003',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.',
        src: subProduct01
      },
      {
        id: '0004',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.',
        src: subProduct02
      },
      {
        id: '0005',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-005.',
        src: subProduct01
      },
      {
        id: '0006',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-006.',
        src: subProduct02
      }
    ]
  },
  {
    id: '002',
    src: destacado,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nihil perspiciatis, dolorem expedita doloribus praesentium iusto obcaecati soluta. Optio facere consequatur atque eligendi hic totam fugit esse cupiditate alias ab!',
    slide: slide,
    subproducts: [
      {
        id: '0001',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-001.',
        src: subProduct01
      },
      {
        id: '0002',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-001.',
        src: subProduct02
      },
      {
        id: '0003',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-001.',
        src: subProduct01
      },
      {
        id: '0004',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-001.',
        src: subProduct02
      }
    ]
  },
  {
    id: '003',
    src: destacado,
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit product 003.',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam nihil perspiciatis, dolorem expedita doloribus praesentium iusto obcaecati soluta. Optio facere consequatur atque eligendi hic totam fugit esse cupiditate alias ab!',
    slide: slide,
    subproducts: [
      {
        id: '0001',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-001.',
        src: subProduct01
      },
      {
        id: '0002',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.',
        src: subProduct02
      },
      {
        id: '0003',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.',
        src: subProduct01
      },
      {
        id: '0003',
        title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.',
        src: subProduct02
      }
    ]
  }
]

export default listProducts