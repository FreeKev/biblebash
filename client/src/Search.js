// // fetch("https://m.bibles.org/v2/versions/eng-GNTD.js", {
// //   headers: {
// //     Authorization: "Basic VE1UTjhZVThTTkloVHJuNWljVE1FNzgyajZaSzFZWFF5Ukg2QTlvdzpY"
// //   }
// // })
// import React, { Component } from 'react';
// import axios from 'axios'
//
//
// class Search extends Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       query: '',
//       results: []
//     }
//   }
//
// componentDidMount() {
//   fetch("https://m.bibles.org/v2/versions/eng-GNTD.js", {
//     headers: {
//       Authorization: "Basic VE1UTjhZVThTTkloVHJuNWljVE1FNzgyajZaSzFZWFF5Ukg2QTlvdzpY"
//     }
//   }).then(results => {
//     return results.json();
//   }).then(data => {
//     return (
//       <p>{data}</p>
//     )
//   })
//   this.setState({data: data});
//   console.log('data', data);
// }
//
//
//   render(){
//     return(
//           <div className="resultz">
//           <p>data={this.state.results}</p>
//           </div>
//     )
//   }
// }
//
// export default Search;
