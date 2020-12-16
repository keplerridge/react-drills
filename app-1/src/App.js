import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor () {
    super();

    this.state = {
      userInput: ''
    }
  }

  handleChange(e){
    this.setState({userInput: e.target.value})
  }

  render() {
    return(
      <section>
        <input value={this.state.userInput} onChange={e => this.handleChange(e)}/>
        <p>{this.state.userInput}</p>
      </section>
    )
  }
}

export default App;
