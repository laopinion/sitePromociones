import Link from 'next/link'

const Product = (props) => {
  return (
    <div className='Product'>
      <figure>
        <Link as={`/producto/${props.slug}`} href={`/producto?slug=${props.slug}`}>
          <a>
            <img src={props.src} alt={props.alt} />
          </a>
        </Link>
      </figure>
      <div className='info'>
        <h4 className='title'>{props.title}</h4>
        {/* <p className='description'>{props.description}</p> */}
        <button className={`btn_buy ${!props.active ? ('inactive') : ('')}`}>
          <Link as={`/producto/${props.slug}`} href={`/producto?slug=${props.slug}`}>
            <a>Comprar</a>
          </Link>
        </button>
      </div>
      <hr />
    </div>
  )
}

export default Product
