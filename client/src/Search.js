import React, { Component } from 'react';
import axios from 'axios'
import { Form } from 'semantic-ui-react'

const API_URL = 'http://api.biblia.com/v1/bible'
// Public key ->
const API_KEY = 'fd37d8f28e95d3be8cb4fbc37e15e18e'

const Population = (props) => {
  let innerTextToFirstLetters = /(<[^>]*>)|(\w)(\w*)/gi;
  function replacer(match, p1, p2, p3, offset, string) {
    return [p1] + [p2];
  }
  let newString = props.results.replace(innerTextToFirstLetters, replacer);
  // <div dangerouslySetInnerHTML={{__html: newString }} />
  // let displ = 'okay'
  // 'true' === 'true' ? console.log('damn it'): console.log('fail');

  let displ = letterSwitch();

  function letterSwitch() {
    if (props.toggle === 'true') {
      // console.log('here')
      // let displ = 'jackass!';
      return props.results;
      // console.log(displ);
    } else {
      // console.log('there')
      // let displ = 'jackass2!';
      return newString;
      // console.log(displ);
    }
  }

  const verseList = props.these.map((item)=>(
    <div className="these-in">
      <h2 className="these-h2">{item.title}</h2>
      <p className="these-p">{item.preview}</p>
      <br />
    </div>
  ))
  return (<div>
    <div dangerouslySetInnerHTML={{__html: displ }} />
    <div className="these-out">{verseList}</div>
    </div>)
}

class Search extends Component{
  constructor(props){
    super(props)
    this.state = {
      query: '',
      query1: 'KJV',
      results: '',
      these: [],
      tran: '',
      fullWords: true
    }
  }

  getInfo = () => {
    axios.get(`${API_URL}/content/${this.state.query1}.html?passage=${this.state.query}&style=simpleParagraphs&key=${API_KEY}`).then(({data})=>{
          this.setState({
            results: data
          })
        });
    axios.get(`${API_URL}/search/${this.state.query1}.txt?query=${this.state.query}&mode=verse&start=0&limit=20&key=${API_KEY}`).then(({data})=>{
          this.setState({
            these: data.results
          })
        });
    }

  h1Change = () => {
    this.setState({query1: this.search1.value
    }, () => {
      if (this.state.query1 && this.state.query.length >=3){
        this.setState({tran: this.state.query1})
      } else {
        this.setState({tran: 'KJV'})
      }
    })
  }

  handleInputChange = () => {
    this.setState({query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length >= 4){
        this.setState({results: ''})
        this.setState({these: []})
        this.getInfo()
      } else {
        this.setState({results: ''})
        this.setState({these: []})
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
          results={this.state.results}
          these={this.state.these} />
        </div>
      </Form>
    )
  }
}

export default Search;
