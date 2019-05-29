import destacado1 from '../img/products/mayo/slide-1.jpg'
import destacado2 from '../img/products/mayo/slide-2.jpg'
import destacado3 from '../img/products/slideProduct_3.jpg'
import destacado4 from '../img/products/slideProduct_4.jpg'

import product1 from '../img/products/mayo/product_1.jpg'
import product2 from '../img/products/mayo/product_2.jpg'
import product3 from '../img/products/product_3.jpg'
import product4 from '../img/products/product_4.jpg'
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
    src: product1,
    title: 'Picatodo',
    active: true,
    description: `
      <h3>CARACTERÍASTICAS</h3>
      <p>
        •	Capacidad 500 ml <br/>
        •	Aspas mezcladoras <br/>
        •	Cuchillas en acero inoxidables <br/>
        •	Botón de turbo <br/>
        •	Vaso plástico transparente <br/>
      </p>
    `,
    slide: destacado1,
    slug: 'picatodo',
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
    src: product2,
    title: 'Sandwichera',
    active: true,
    description: `
      <h3>CARACTERÍASTICAS</h3>
      <p>
      •	Luces led que indican el estado de preparación: verde, lista para disfrutar! <br/>
      •	Diseño y tamaño perfecto para guardar en cualquier espacio de la cocina  <br/>
      •	Sistema de cierre con seguro <br/>
      •	Color: Negro <br/> 
      •	Material: Acero <br/>
      </p>
    `,
    slide: destacado2,
    slug: 'sandwichera',
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
    src: product3,
    title: 'Smart band',
    active: false,
    description: `
      <h3>FUNCIONES</h3>
      <p>
      •	Presión Sanguínea <br/>
      •	Calorías Quemadas <br/>
      •	Distancia Recorrida <br/>
      •	Notificación de Llamadas <br/>
      •	SMS, QQ, WECHAT Y WHATSAPP <br/>
      •	Frecuencia Cardiaca <br/>
      •	Cuenta Pasos <br/>
      •	Monitor de Sueños <br/>
      •	Captura Remota <br/>
      •	No es aprueba de agua <br/>
      •	Incluye  cable de carga USB      <br/> 
      </p>
      <p>Unidades disponibles: 158</p>
    `,
    slide: destacado3,
    slug: 'smart-band',
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
    src: product4,
    title: 'Olla a presión HOME ELEMENTS',
    active: false,
    description: `
      <h3>Características</h3>
      <p>
      •	Capacidad 4,2 litros <br/> 
      •	Incluye vaporera <br/> 
      •	Viene con 5 sistemas de seguridad integrados <br/> 
      •	Pin de seguridad: evita que la olla se abra cuando tiene presión <br/> 
      •	Rejilla antibloqueo: impide que la válvula principal se obstruya <br/> 
      •	Válvula secundaria de alivio: funciona como refuerzo para regular la presión <br/> 
      •	Válvula de alarma: emite un sonido cuando la olla supera la presión <br/> 
      •	Sistema expulsor de empaque: permite que el vapor salga sin riesgo   <br/> 
      </p>
      <p>Unidades disponibles: 170 unidades</p>
    `,
    slide: destacado4,
    slug: 'olla-a-presion-home-elements',
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
