import React from 'react'

const Product = (props) => {
  return (
    <div className='Product'>
      <figure>
        <a href={`/producto/${props.slug}`}>
          <img src={props.src} alt={props.alt} />
        </a>
      </figure>
      <div className='info'>
        <h4 className='title'>{props.title}</h4>
        {/* <p className='description'>{props.description}</p> */}
        <button className='btn_buy'>
          <a href={`/producto/${props.slug}`}>Comprar</a>
        </button>
      </div>
      <hr />
    </div>
  )
}

export default Product
