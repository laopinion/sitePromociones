import React, { Component } from 'react'
import Search from '../Search'
import data from '../../data'

class SearchContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      results: [],
      styles: {
        display: 'none',
        overflowY: 'initial'
      },
      stylesClose: {
        display: 'none'
      }
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // console.log(this.input.value, 'submit')
    // Aca se puede enviar todos los datos con un post
    const results = []

    data.filter((item) => {
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

    this.setState({
      results,
      styles: {
        display: 'block'
      }
    })

    if (results.length > 0) {
      this.setState({
        stylesClose: {
          display: 'block'
        }
      })
    } else {
      this.setState({
        stylesClose: {
          display: 'none'
        }
      })
    }

    if (results.length > 5) {
      this.setState({
        styles: {
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
    // this.setState({
    //   value: event.target.value.replace(' ', '-')
    // })

    const results = []

    data.filter((item) => {
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

    this.setState({
      results,
      styles: {
        display: 'block'
      },
      value: this.input.value
    })

    if (results.length > 0) {
      this.setState({
        stylesClose: {
          display: 'block'
        }
      })
    } else {
      this.setState({
        stylesClose: {
          display: 'none'
        }
      })
    }

    if (results.length > 5) {
      this.setState({
        styles: {
          overflowY: 'scroll'
        }
      })
    }
  }

  handleClose = () => {
    this.setState({
      styles: {
        display: 'none'
      },
      stylesClose: {
        display: 'none'
      }
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
        stylesClose={this.state.stylesClose}
        handleClose={this.handleClose}
      />
    )
  }
}

export default SearchContainer
