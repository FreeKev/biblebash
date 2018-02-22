import React, { Component } from 'react';
import axios from 'axios'
import { Input } from 'semantic-ui-react'

const Translationlist = () => (
  <div>
    <Input list='Translations' placeholder='Choose a Version...' />
    <datalist id='Translations'>
      <option value='KJV1900' />
      <option value='WH1881MR' />
      <option value='TR1894MR' />
      <option value='TANAKH' />
    </datalist>
  </div>
)

const API_URL = 'http://api.biblia.com/v1/bible'
const API_KEY = 'fd37d8f28e95d3be8cb4fbc37e15e18e'
const VER = 'KJV1900'

const Suggestions = (props) => {
  console.log(props.these)
  return <div dangerouslySetInnerHTML={{__html: props.results }} />
}

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      query: '',
      results: '',
      these: [],
      tran: ''
    }
  }

  getInfo = () => {
    axios.get(`${API_URL}/content/${VER}.html?passage=${this.state.query}&style=fullyFormatted&key=${API_KEY}`).then(({data})=>{
          this.setState({
            results: data
          })
        });
    axios.get(`${API_URL}/search/${VER}.txt?query=${this.state.query}&mode=verse&start=0&limit=20&key=${API_KEY}`).then(({data})=>{
          console.log(data);
          this.setState({
            these: data.results
          })
        });
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
        <Translationlist />
        <input
          placeholder="Passage or verse..."
          ref={input=> this.search = input}
          onChange={this.handleInputChange} />
          <div className="resultz">
          <Suggestions results={this.state.results} these={this.state.these} />
          </div>
      </form>
    )
  }
}

export default Search;
