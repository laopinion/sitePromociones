const destacado1 = "/products/mayo/slide-1.jpg"
const destacado2 = "/products/mayo/slide-2.jpg"
const destacado3 = "/products/slideProduct_3.jpg"
const destacado4 = "/products/slideProduct_4.jpg"

const plancha = "/products/octubre/slide-1.jpg"
const autos = "/products/octubre/slide-2.jpg"
const morral = "/products/febrero/slide3.jpg"
const espejo = "/products/febrero/slide2.jpg"
const sarten = "/products/febrero/slide6.jpg"
const ventilador = "/products/febrero/slide7.jpg"
const productplancha = "/products/octubre/product_1.jpg"
const productAutos = "/products/octubre/product_2.jpg"
const productMorral = "/products/febrero/product3.jpg"
const productEspejo = "/products/febrero/product2.jpg"
const productSarten = "/products/febrero/product6.jpg"
const productVentilador = "/products/febrero/product7.jpg"
const autos2 = "/products/julio/slide-1.jpg"
const productAutos2 = "/products/julio/product_1.jpg"

// Slides
const pbarra2 = "/products/2020/octubre/barra_2.jpeg"
const pcepillo2 = "/products/2020/octubre/cepillo_2.jpg"
const pcepillo42 = "/products/2020/octubre/cepillo4_2.jpeg"
const pmop2 = "/products/2020/octubre/mop_2.jpeg"
const psprayer2 = "/products/2020/octubre/sprayer_2.jpeg"
const pcamas = "/products/2020/octubre/cama-slide.jpg"
const pcomedors = "/products/2020/octubre/comedor-slide.jpg"
const pdosificadors = "/products/2020/octubre/dosificador-slide.jpg"

// Format 460x270
const pbarra1 = "/products/2020/octubre/barra_1.jpeg"
const pcepillo1 = "/products/2020/octubre/cepillo_1_.jpeg"
const pcepillo41 = "/products/2020/octubre/cepillo4_1.jpeg"
const pmop1 = "/products/2020/octubre/mop_1.jpeg"
const psprayer1 = "/products/2020/octubre/sprayer_1.jpeg"
const pcama = "/products/2020/octubre/cama.jpg"
const pcomedor = "/products/2020/octubre/comedor.jpg"
const pdosificador = "/products/2020/octubre/dosificador.jpg"

// Slides mobile
const pbarraM = "/movil/2020/octubre/barra_3.jpeg"
const pcepilloM = "/movil/2020/octubre/cepillo_3.jpg"
const pcepillo4M = "/movil/2020/octubre/cepillo4_3.jpeg"
const pmopM = "/movil/2020/octubre/mop_3.jpeg"
const psprayerM = "/movil/2020/octubre/sprayer_3.jpeg"
const pcamaM = "/movil/2020/octubre/cama-m.jpg"
const pcomedorM = "/movil/2020/octubre/comedor-m.jpg"
const pdosificadorM = "/movil/2020/octubre/dosificador-m.jpg"

const product1 = "/products/mayo/product_1.jpg"
const product2 = "/products/mayo/product_2.jpg"
const product3 = "/products/product_3.jpg"
const product4 = "/products/product_4.jpg"

const destacado1Movil = "/movil/mayo/slide-1.jpg"
const destacado2Movil = "/movil/mayo/slide-2.jpg"
const planchaMovil = "/movil/octubre/slide-1.jpg"
const autosMovil = "/movil/octubre/slide-2.jpg"
const morralMovil = "/movil/febrero/slide3.jpg"
const espejoMovil = "/movil/febrero/slide2.jpg"
const sartenMovil = "/movil/febrero/slide6.jpg"
const ventiladorMovil = "/movil/febrero/slide7.jpg"
const autos2Movil = "/movil/julio/slide-1.jpg"

const screenWith = window.innerWidth
let slide1 = destacado1
let slide2 = destacado2
let slide3 = plancha
let slide4 = autos
let slide5 = morral
let slide6 = espejo
let slide7 = sarten
let slide8 = ventilador
let slide9 = autos2
let slide10 = pbarra2
let slide11 = pcepillo2
let slide12 = pcepillo42
let slide13 = pmop2
let slide14 = psprayer2
let slide15 = pcamas
let slide16 = pcomedors
let slide17 = pdosificadors

if (screenWith <= 480) {
  slide1 = destacado1Movil
  slide2 = destacado2Movil
  slide3 = planchaMovil
  slide4 = autosMovil
  slide5 = morralMovil
  slide6 = espejoMovil
  slide7 = sartenMovil
  slide8 = ventiladorMovil
  slide10 = pbarraM
  slide11 = pcepilloM
  slide12 = pcepillo4M
  slide13 = pmopM
  slide14 = psprayerM
  slide15 = pcamaM
  slide16 = pcomedorM
  slide17 = pdosificadorM
}

const listProducts = [
  {
    id: "019",
    src: pdosificador,
    title: "DOSIFICADOR DOBLE USO",
    active: true,
    special: false,
    price: "49000",
    priceDomicilio: "52000",
    collection: false,
    priceCollection: "220500",
    priceCollectionDomicilio: "223500",
    summary: null,
    description: `
      <h3>Características</h3>
      <p>
        Largo 34,5 cm X Ancho 25,5 X Alto 25,5 cm / 668 Gr <br/>
      </p>
    `,
    slide: slide17,
    slug: "dosificador-doble",
    subproducts: [
      {
        id: "0001",
        title: "Espejo de aumento con luz LED",
        src: destacado1,
        id_parent: "001",
      },
      {
        id: "0002",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.",
        src: destacado2,
        id_parent: "001",
      },
      {
        id: "0003",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.",
        src: destacado3,
        id_parent: "001",
      },
      {
        id: "0004",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.",
        src: destacado4,
        id_parent: "001",
      },
    ],
  },
  {
    id: "018",
    src: pcomedor,
    title: "COMEDERO DOBLE BI-COLOR ANTIDESLIZANTE",
    active: true,
    special: false,
    price: "19000",
    priceDomicilio: "22000",
    collection: false,
    priceCollection: "220500",
    priceCollectionDomicilio: "223500",
    summary: null,
    description: `
      <h3>Características</h3>
      <p>
        Largo 31,5 cm X Ancho 18 X Alto 7,5 cm / 248 Gr <br/>
      </p>
    `,
    slide: slide16,
    slug: "comedor-doble",
    subproducts: [
      {
        id: "0001",
        title: "Espejo de aumento con luz LED",
        src: destacado1,
        id_parent: "001",
      },
      {
        id: "0002",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.",
        src: destacado2,
        id_parent: "001",
      },
      {
        id: "0003",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.",
        src: destacado3,
        id_parent: "001",
      },
      {
        id: "0004",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.",
        src: destacado4,
        id_parent: "001",
      },
    ],
  },
  {
    id: "017",
    src: pcama,
    title: "CAMA PLASTICA",
    active: true,
    special: false,
    price: "35000",
    priceDomicilio: "38000",
    collection: false,
    priceCollection: "220500",
    priceCollectionDomicilio: "223500",
    summary: null,
    description: `
      <h3>Características</h3>
      <p>
        Largo 35,5 cm X Ancho 48 X Alto 13,3 cm / 690 Gr <br/>
      </p>
    `,
    slide: slide15,
    slug: "cama-plastica",
    subproducts: [
      {
        id: "0001",
        title: "Espejo de aumento con luz LED",
        src: destacado1,
        id_parent: "001",
      },
      {
        id: "0002",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.",
        src: destacado2,
        id_parent: "001",
      },
      {
        id: "0003",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.",
        src: destacado3,
        id_parent: "001",
      },
      {
        id: "0004",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.",
        src: destacado4,
        id_parent: "001",
      },
    ],
  },
  {
    id: "016",
    src: psprayer1,
    title: "SPRAYER IONIZADOR",
    active: true,
    special: false,
    price: "269000",
    priceDomicilio: "272000",
    collection: false,
    priceCollection: "220500",
    priceCollectionDomicilio: "223500",
    summary: null,
    description: `
      <h3>Características</h3>
      <p>
        Mezcla de sal, agua y 10 minutos de electrólisis hacen un desinfectante casero para cualquier superficie. <br/>
        capacidad 350 ml. <br/>
        Accesorios: Cable USB, manual de instrucciones, medidor y cuchara. <br/>
        Proporciona una alternativa de limpieza sin sustancias químicas. <br/>
      </p>
    `,
    slide: slide14,
    slug: "sprayer",
    subproducts: [
      {
        id: "0001",
        title: "Espejo de aumento con luz LED",
        src: destacado1,
        id_parent: "001",
      },
      {
        id: "0002",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.",
        src: destacado2,
        id_parent: "001",
      },
      {
        id: "0003",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.",
        src: destacado3,
        id_parent: "001",
      },
      {
        id: "0004",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.",
        src: destacado4,
        id_parent: "001",
      },
    ],
  },
  {
    id: "015",
    src: pmop1,
    title: "MOP A VAPOR - MULTIUSOS",
    active: true,
    special: false,
    price: "226000",
    priceDomicilio: "229000",
    collection: false,
    priceCollection: "220500",
    priceCollectionDomicilio: "223500",
    summary: null,
    description: `
      <h3>Características</h3>
      <p>
        Limpiador a vapor multiusos con luz ultravioleta para eliminar gérmenes y bacterias. <br/>
        Con paño para ropa, limpiador de vidrio y diferentes boquillas y cepillos para todos los usos. <br/>
      </p>
    `,
    slide: slide13,
    slug: "mop-vapor",
    subproducts: [
      {
        id: "0001",
        title: "Espejo de aumento con luz LED",
        src: destacado1,
        id_parent: "001",
      },
      {
        id: "0002",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.",
        src: destacado2,
        id_parent: "001",
      },
      {
        id: "0003",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.",
        src: destacado3,
        id_parent: "001",
      },
      {
        id: "0004",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.",
        src: destacado4,
        id_parent: "001",
      },
    ],
  },
  {
    id: "014",
    src: pcepillo41,
    title: "CEPILLO 4 CABEZOTES",
    active: true,
    special: false,
    price: "41000",
    priceDomicilio: "44000",
    collection: false,
    priceCollection: "220500",
    priceCollectionDomicilio: "223500",
    summary: null,
    description: `
      <h3>Características</h3>
      <p>
        Soporte con 4 cepillos diferentes que te permitirán obtener un mejor alcance en cada superficie. <br/>
        Funciona con baterías. <br/>
      </p>
    `,
    slide: slide12,
    slug: "cepillo-cabezotes",
    subproducts: [
      {
        id: "0001",
        title: "Espejo de aumento con luz LED",
        src: destacado1,
        id_parent: "001",
      },
      {
        id: "0002",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.",
        src: destacado2,
        id_parent: "001",
      },
      {
        id: "0003",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.",
        src: destacado3,
        id_parent: "001",
      },
      {
        id: "0004",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.",
        src: destacado4,
        id_parent: "001",
      },
    ],
  },
  {
    id: "013",
    src: pcepillo1,
    title: "CEPILLO SECADOR DE MASCOTAS",
    active: true,
    special: false,
    price: "105000",
    priceDomicilio: "108000",
    collection: false,
    priceCollection: "220500",
    priceCollectionDomicilio: "223500",
    summary: null,
    description: `
      <h3>Características</h3>
      <p>
        Con dos niveles de 45 grados y 65 grados. <br/>
        Permite ahorrar tiempo al peinar y secar a tu mascota al mismo tiempo. <br/>
        Con cerdas de acero. <br/>
      </p>
    `,
    slide: slide11,
    slug: "cepillo-secador-mascotas",
    subproducts: [
      {
        id: "0001",
        title: "Espejo de aumento con luz LED",
        src: destacado1,
        id_parent: "001",
      },
      {
        id: "0002",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.",
        src: destacado2,
        id_parent: "001",
      },
      {
        id: "0003",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.",
        src: destacado3,
        id_parent: "001",
      },
      {
        id: "0004",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.",
        src: destacado4,
        id_parent: "001",
      },
    ],
  },
  {
    id: "012",
    src: pbarra1,
    title: "BARRA ESTERILIZADORA",
    active: true,
    special: false,
    price: "176000",
    priceDomicilio: "179000",
    collection: false,
    priceCollection: "220500",
    priceCollectionDomicilio: "223500",
    summary: null,
    description: `
      <h3>Características</h3>
      <p>
        Mata hasta el 99% de los gérmenes. <br/>
        Amigable con la salud y el medio ambiente. <br/>
        Pasa por el área deseada por unos minutos y quedará desinfectado. <br/>
        Se puede utilizar sobre cualquier accesorio (teléfono, utensilios de cocina, lugares de trabajo y en el hogar). <br/>
      </p>
    `,
    slide: slide10,
    slug: "barra-esterilizadora",
    subproducts: [
      {
        id: "0001",
        title: "Espejo de aumento con luz LED",
        src: destacado1,
        id_parent: "001",
      },
      {
        id: "0002",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.",
        src: destacado2,
        id_parent: "001",
      },
      {
        id: "0003",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.",
        src: destacado3,
        id_parent: "001",
      },
      {
        id: "0004",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.",
        src: destacado4,
        id_parent: "001",
      },
    ],
  },
  {
    id: "011",
    src: productAutos2,
    title: "Autos Clásicos",
    active: true,
    special: false,
    price: "24500",
    priceDomicilio: "27500",
    collection: true,
    priceCollection: "220500",
    priceCollectionDomicilio: "223500",
    summary: null,
    description: `
      <h3>Características</h3>
      <p>
      ·        9 modelos diferentes <br/>
      ·        Fabricados en metal y plástico <br/>
      ·        Replicas a escala reducida <br/>
      </p>
    `,
    slide: slide9,
    slug: "autos-clasicos",
    subproducts: [
      {
        id: "0001",
        title: "Espejo de aumento con luz LED",
        src: destacado1,
        id_parent: "001",
      },
      {
        id: "0002",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-002.",
        src: destacado2,
        id_parent: "001",
      },
      {
        id: "0003",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-003.",
        src: destacado3,
        id_parent: "001",
      },
      {
        id: "0004",
        title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit sub-product-004.",
        src: destacado4,
        id_parent: "001",
      },
    ],
  },
]

export default listProducts
