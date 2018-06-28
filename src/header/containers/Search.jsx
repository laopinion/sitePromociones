import React, { Component } from 'react'
import Search from '../components/Search-layout.jsx'

class SearchContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      results: [],
      styles: {
        display: 'none',
        overflowY: 'initial'
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.input.value, 'submit')
    // Aca se puede enviar todos los datos con un post
    const results = []
    this.props.listProducts.map((product) => {
      // console.log(category)
      product.subproducts.filter((item) => {
        // console.log(item);
        const title = item.title.toLowerCase()
        const query = this.input.value.toLowerCase()
        if (query !== '') {
          if (title.includes(query)) {
            // console.log(item);
            results.push(item)
          }
        }
        // return author.includes(query);
        // return item.author.includes(action.payload.query)
      })
    })
    this.setState({
      results,
      styles: {
        display: 'block'
      }
    })

    const height = document.querySelector('.resultSearch').offsetHeight
    console.log(height)
    if (height >= '399') {
      this.setState({
        overflow: {
          overflowY: 'scroll'
        }
      })
    }
    // console.log(results)
    // console.log(this.state.results)
  }

  setInputref = (element) => {
    this.input = element
  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value.replace(' ', '-')
    })
  }

  render () {
    return (
      <Search
        setRef={this.setInputref}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleInputChange}
        value={this.state.value}
        dataSearch={this.state.results}
        styles={this.state.styles}
        overflow={this.state.overflow}
      />
    )
  }
}

export default SearchContainer
