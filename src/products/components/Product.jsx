import React from 'react'

const Product = (props) => {
  // console.log(props)
  return (
    <div className='Product'>
      {
        props.active ? (
          <figure>
            <a href={`/producto/${props.slug}`}>
              <img src={props.src} alt={props.alt} />
            </a>
          </figure>
        ) : (
          <figure>
            <img src={props.src} alt={props.alt} />
          </figure>
        )
      }
      <div className='info'>
        <h4 className='title'>{props.title}</h4>
        {/* <p className='description'>{props.description}</p> */}
        {
          props.active ? (
            <button className='btn_buy'>
              <a href={`/producto/${props.slug}`}>Comprar</a>
            </button>
          ) : (
            <button className='btn_buy inactive' disabled>
              <span className='inactive'>Comprar</span>
            </button>
          )
        }
      </div>
      <hr />
    </div>
  )
}

export default Product
