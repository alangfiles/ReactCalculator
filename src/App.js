import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CalculatorButton } from './calculator-button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0
    };
  }

  numberButtonPressed = (value) => {
    this.setState({display:value});
  }

  operationButtonPressed = (value) => {
    this.setState({display:value});
  }

  clearPressed = (value) => {
    this.setState({display:value});
  }

  equalsPressed = (value) => {
    this.setState({display:value});
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <div className="calculator-display">
            {this.state.display}
          </div>
          <div>
            <CalculatorButton value={'1'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'2'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'3'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'+'} clickOperation={this.operationButtonPressed} />
            <br/>
            <CalculatorButton value={'4'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'5'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'6'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'-'} clickOperation={this.operationButtonPressed} />
            <br/>
            <CalculatorButton value={'7'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'8'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'9'} clickOperation={this.numberButtonPressed} />
            <br/>
            <CalculatorButton value={'C'} clickOperation={this.clearPressed} />
            <CalculatorButton value={'0'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'='} clickOperation={this.equalsPressed} />
          </div>

        </p>
      </div>
    );
  }
}

export default App;
