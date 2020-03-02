const destacado1 = '/products/mayo/slide-1.jpg'
const destacado2 = '/products/mayo/slide-2.jpg'
const destacado3 = '/products/slideProduct_3.jpg'
const destacado4 = '/products/slideProduct_4.jpg'

const plancha = '/products/octubre/slide-1.jpg'
const autos = '/products/octubre/slide-2.jpg'
const morral = '/products/febrero/slide3.jpg'
const espejo = '/products/febrero/slide2.jpg'
const sarten = '/products/febrero/slide6.jpg'
const ventilador = '/products/febrero/slide7.jpg'
const productplancha = '/products/octubre/product_1.jpg'
const productAutos = '/products/octubre/product_2.jpg'
const productMorral = '/products/febrero/product3.jpg'
const productEspejo = '/products/febrero/product2.jpg'
const productSarten = '/products/febrero/product6.jpg'
const productVentilador = '/products/febrero/product7.jpg'

const product1 = '/products/mayo/product_1.jpg'
const product2 = '/products/mayo/product_2.jpg'
const product3 = '/products/product_3.jpg'
const product4 = '/products/product_4.jpg'

const destacado1Movil = '/movil/mayo/slide-1.jpg'
const destacado2Movil = '/movil/mayo/slide-2.jpg'
const planchaMovil = '/movil/octubre/slide-1.jpg'
const autosMovil = '/movil/octubre/slide-2.jpg'
const morralMovil = '/movil/febrero/slide3.jpg'
const espejoMovil = '/movil/febrero/slide2.jpg'
const sartenMovil = '/movil/febrero/slide6.jpg'
const ventiladorMovil = '/movil/febrero/slide7.jpg'

const screenWith = window.innerWidth
let slide1 = destacado1
let slide2 = destacado2
let slide3 = plancha
let slide4 = autos
let slide5 = morral
let slide6 = espejo
let slide7 = sarten
let slide8 = ventilador

if (screenWith <= 480) {
  slide1 = destacado1Movil
  slide2 = destacado2Movil
  slide3 = planchaMovil
  slide4 = autosMovil
  slide5 = morralMovil
  slide6 = espejoMovil
  slide7 = sartenMovil
  slide8 = ventiladorMovil
}

const listProducts = [
  {
    id: '010',
    src: productVentilador,
    title: 'VENTILADOR PEDESTAL NEGRO 16 HECRSF-16BI ',
    active: false,
    special: false,
    price: '70000',
    priceDomicilio: '78000',
    summary: null,
    description: `
      <h3>Características</h3>
      <p>
      ·        3 velocidades para un bajo consumo de energía <br/>
      ·        Rejilla metálica para mayor resistencia <br/>
      ·         Oscilación horizontal de 90º e inclinación vertical de 30º <br/>
      ·        Motor eficiente <br/>
      ·        Base estable antideslizante para mayor seguridad <br/>
      ·        Altura ajustable hasta 130 cm <br/>
      ·        Fácil de mover y transportar <br/>
      ·        Ideal para espacios intermedios <br/>
      ·        120V ~ 60Hz 45W <br/>
      </p>
    `,
    slide: slide8,
    slug: 'ventilador',
    subproducts: [
      {
        id: '0001',
        title: 'Espejo de aumento con luz LED',
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
    id: '009',
    src: productSarten,
    title: 'SET SARTENES FUSIONE 22 Y 24 CM',
    active: true,
    special: false,
    price: '70000',
    priceDomicilio: '73000',
    summary: 'SIN TAPA 1,8MM TIERRA FUSIONE',
    description: `
      <h3>Características</h3>
      <p>
        ·        Materia prima de origen italiano <br/>
        ·         6 capas de antiadherente <br/>
        ·         Novedoso diseño con acabado tipo mármol <br/>
        ·         Antiadherente exterior <br/>
      </p>
    `,
    slide: slide7,
    slug: 'sarten',
    subproducts: [
      {
        id: '0001',
        title: 'Espejo de aumento con luz LED',
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
    id: '008',
    src: productEspejo,
    title: 'Espejo de aumento con luz LED',
    active: true,
    special: false,
    price: '45000',
    priceDomicilio: '48000',
    summary: null,
    description: `
      <h3>Características</h3>
      <p>
      -         20 cm de diámetro <br/>
      -         Rotación 360° <br/>
      -         Luces LED brillantes, color blanco <br/>
      -         Aumento 5x <br/>
      -         Requiere 3 baterías AAA no incluidas <br/>
      </p>
    `,
    slide: slide6,
    slug: 'espejo',
    subproducts: [
      {
        id: '0001',
        title: 'Espejo de aumento con luz LED',
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
    id: '007',
    src: productMorral,
    title: 'Morral Antirrobo',
    active: true,
    special: false,
    price: '88000',
    priceDomicilio: '91000',
    summary: 'Con candado y protector para la lluvia',
    description: `
      <h3>Características</h3>
      <p>
        -         Medidas 26.5 * 42 cm <br/>
        -         Material Poliéster 300D <br/>
        -         Líneas reflectivas <br/>
        -         Bolsillos para artículos personales <br/>
        -         Cierre oculto <br/>
        -         Bolsillo para Tablet y Portátil <br/>
        -         Protector para lluvia <br/>
        -         se desprende para lavar <br/>
        -         Puente para tus dispositivos USB ( Powerbank y Audífonos) <br/>
        -         Candado incorporado con clave <br/>
      </p>
    `,
    slide: slide5,
    slug: 'morral',
    subproducts: [
      {
        id: '0001',
        title: 'Morral Antirrobo',
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
    id: '006',
    src: productAutos,
    title: 'Autos de carreras',
    active: false,
    special: false,
    price: '22500',
    priceDomicilio: '26500',
    summary: 'Autos de carreras',
    description: `
      <h3>Características</h3>
      <p>
        •	Réplicas a escala reducida 1:43 <br/>
        •	Alto nivel de detalle <br/>
        •	Modelos originales <br/>
        •	Fabricados en metal y plástico <br/>
        •	10  modelos diferentes <br/>
      </p>
    `,
    slide: slide4,
    slug: 'autos',
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
    id: '005',
    src: productplancha,
    title: 'Plancha a vapor portátil',
    active: false,
    special: true,
    price: '85500',
    priceDomicilio: '91500',
    summary: 'Plancha de vapor portátil, vertical, eficiente y fácil de manejar. Incluye cepillo quita pelusas, removible.',
    description: `
      <h3>Características</h3>
      <p>
        •	Capacidad 500 ml <br/>
        •	Aspas mezcladoras <br/>
        •	Cuchillas en acero inoxidables <br/>
        •	Botón de turbo <br/>
        •	Vaso plástico transparente <br/>
      </p>
    `,
    slide: slide3,
    slug: 'plancha',
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
    id: '001',
    src: product1,
    title: 'Picatodo',
    active: false,
    description: `
      <h3>Características</h3>
      <p>
        •	Capacidad 500 ml <br/>
        •	Aspas mezcladoras <br/>
        •	Cuchillas en acero inoxidables <br/>
        •	Botón de turbo <br/>
        •	Vaso plástico transparente <br/>
      </p>
    `,
    slide: slide1,
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
    active: false,
    description: `
      <h3>Características</h3>
      <p>
      •	Luces led que indican el estado de preparación: verde, lista para disfrutar! <br/>
      •	Diseño y tamaño perfecto para guardar en cualquier espacio de la cocina  <br/>
      •	Sistema de cierre con seguro <br/>
      •	Color: Negro <br/> 
      •	Material: Acero <br/>
      </p>
    `,
    slide: slide2,
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
