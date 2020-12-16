import React, {Component} from 'react';
import './App.css';

class App extends Component {
  
  constructor () {
    super();

    this.state = {
      names: ['Kepler', 'Bud', 'Cole', 'Tj', 'Cory'],
      userInput: ''
    }
  }
  
  handleChange(e){
    this.setState({userInput: e})
  }


  render(){
    let displayNames = this.state.names.filter((e) => {
      return e.includes(this.state.userInput)
    })
    .map((e, i) => {
      return <h2 key={i}>{e}</h2>
    })

    return (
      <section>
        {displayNames}
        <input value={this.state.userInput} onChange={e => this.handleChange(e.target.value)}/>
      </section>
    )
  }
}

export default App;
