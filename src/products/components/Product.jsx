import React from 'react'

const Product = ({slug, src, title, active, special, summary}) => {
  // console.log(props)
  return (
    <div className='Product'>
      <figure>
        <a href={`/producto/${slug}`}>
          <img src={src} alt={title} />
        </a>
      </figure>
      <div className='info'>
        <h4 className='title'>{title}</h4>
        {special && (
          <p>{summary}</p>
        )}
        {/* <p className='description'>{description}</p> */}
        <button className={`btn_buy ${!active ? ('inactive') : ('')}`}>
          <a href={`/producto/${slug}`}>Comprar</a>
        </button>
      </div>
      <hr />
    </div>
  )
}

export default Product
