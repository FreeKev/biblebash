import React, { Component } from 'react';
import axios from 'axios'

const API_URL = 'http://api.biblia.com/v1/bible'
const API_KEY = 'fd37d8f28e95d3be8cb4fbc37e15e18e'
const VER = 'KJV'

const Suggestions = (props) => {
  return <div dangerouslySetInnerHTML={{__html: props.results }} />
}

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      query: '',
      results: ''
    }
  }

  getInfo = () => {
    axios.get(`${API_URL}/content/${VER}.html?passage=${this.state.query}&style=fullyFormatted&key=${API_KEY}`).then(({data})=>{
          console.log(data);
          this.setState({
            results: data
          })
        })
    }

  handleInputChange = () => {
    this.setState({query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length >= 4){
        this.getInfo()
      } else {
        this.setState({results: ''})
      }
    })
  }

  render(){
    return(
      <form>
        <input
          placeholder="Passage or verse..."
          ref={input=> this.search = input}
          onChange={this.handleInputChange} />
          <div className="resultz">
          <Suggestions results={this.state.results} />
          </div>
      </form>
    )
  }
}

export default Search;
