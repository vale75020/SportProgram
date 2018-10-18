import React, { Component } from 'react';
import './App.css';
import Formulaire from './components/Formulaire'
import  { Input } from 'antd'

class App extends Component {
  state = {
    num:0
  }

handleChange = event => {
  const number = event.target.value
  this.setState({ num : number })
  //console.log(num)
}

  render() {
    return (
      <div className="App">
        <h1>Exercise</h1>
        <Input
        value={this.state.num} 
        onChange={this.handleChange}
        type='number'
        min='0'
        max='20'
        addonBefore='Num'
        style={{
          width: '160px',
          marginBottom: '20px'
        }}
        />
        <Formulaire number={this.state.num}/>
      </div>
    );
  }
}

export default App;
