const Search = (props) => {
  return (
    <form
      id='form'
      className='Search'
      onSubmit={props.handleSubmit}
    >
      <input
        id='search'
        ref={props.setRef}
        type='text'
        className='Search-input'
        name='search'
        onChange={props.handleChange}
        value={props.value}
      />
      <i className='lupa' style={props.value ? { display: 'none' } : { display: 'block' }} />
      <div className='resultSearch' style={props.styles}>
        <ul>
          {props.dataSearch.map((item, index) => {
            return (
              <li key={index}>
                <h3>
                  <a href={`/productos/${item.slug}`}>
                    {item.title}
                  </a>
                </h3>
              </li>
            )
          })}
        </ul>
      </div>
      <aside className='close' style={props.stylesClose} onClick={props.handleClose} >X</aside>
    </form>
  )
}

export default Search
