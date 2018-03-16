import React, { Component } from 'react';
import axios from 'axios'
import { Form } from 'semantic-ui-react'

const API_URL = 'http://api.biblia.com/v1/bible'
// Public key ->
const API_KEY = 'fd37d8f28e95d3be8cb4fbc37e15e18e'

const Population = (props) => {
  let innerTextToFirstLetters = /(<[^>]*>)|(\d?\w)(\w*)/gi;
  function replacer(match, p1, p2, p3, offset, string) {
    return [p1] + [p2];
  }
  let newString = props.scripture.replace(innerTextToFirstLetters, replacer);

  let display = (function letterSwitch() {
    return props.toggle === 'true' ? props.scripture : newString;
  })();

  const verseList = props.topical.map((item)=>(
    <div className="topical-in">
      <h2 className="topical-h2">{item.title}</h2>
      <p className="topical-p">{item.preview}</p>
      <br />
    </div>
  ))
  return (<div>
    <div dangerouslySetInnerHTML={{__html: display }} />
    <div className="topical-out">{verseList}</div>
    </div>)
}

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      query: '',
      query1: 'KJV',
      scripture: '',
      topical: [],
      translation: '',
      fullWords: true
    }
  }

  getInfo = () => {
    axios.get(`${API_URL}/content/${this.state.query1}.html?passage=${this.state.query}&style=simpleParagraphs&key=${API_KEY}`).then(({data})=>{
          this.setState({
            scripture: data
          })
        });
    axios.get(`${API_URL}/search/${this.state.query1}.txt?query=${this.state.query}&mode=verse&start=0&limit=20&key=${API_KEY}`).then(({data})=>{
          this.setState({
            topical: data.results
          })
        });
    }

  h1Change = () => {
    this.setState({query1: this.search1.value
    }, () => {
      if (this.state.query1 && this.state.query.length >=3){
        this.setState({translation: this.state.query1})
      } else {
        this.setState({translation: 'KJV'})
      }
    })
  }

  handleInputChange = () => {
    this.setState({query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length >= 4){
        this.setState({scripture: ''})
        this.setState({topical: []})
        this.getInfo()
      } else {
        this.setState({scripture: ''})
        this.setState({topical: []})
      }
    })
  }

  checkOut = () => {
    if (this.state.fullWords === true){
      console.log('clickin and jivin', this.state.fullWords);
      this.setState({fullWords: false})
    } else { this.setState({fullWords: true})
      console.log('clickin and jivin', this.state.fullWords);
    }
  }

  render(){
    return(
      <Form className="inline fields">
        <input
          placeholder="Version Defaults KJV..."
          list='translations'
          ref={input=> this.search1 = input}
          onChange={this.h1Change}/>
          <datalist id='translations'>
            <option value='WH1881MR' />
            <option value='TANAKH' />
            <option value='KJVAPOC' />
            <option value='YLT' />
            <option value='LEB' />
            <option value='ASV' />
            <option value='DARBY' />
            <option value='FI-RAAMATTU' />
            <option value='STEPHENS' />
            <option value='EMPHBBL' />
            <option value='Elzevir' />
            <option value='LSG' />
            <option value='RVR60' />
          </datalist>
        <input
          className="firstsearch"
          placeholder="Passage, verse, or keyword..."
          ref={input=> this.search = input}
          onChange={this.handleInputChange} />
        <div onClick={this.checkOut} className="resultz">
        <br />
        <Population
          toggle={this.state.fullWords.toString()}
          scripture={this.state.scripture}
          topical={this.state.topical} />
        </div>
      </Form>
    )
  }
}

export default Search;
