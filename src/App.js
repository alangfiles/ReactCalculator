import React, { Component } from 'react';
import './App.css';
import { CalculatorButton } from './calculator-button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: 0
    };
  }

  updateDisplay = (value) => {
    this.setState({display:value});
  }

  numberButtonPressed = (value) => {
    this.updateDisplay(value);
  }

  operationButtonPressed = (value) => {
    this.setState({ display: value });
  }

  clearPressed = (value) => {
    this.setState({ display: value });
  }

  equalsPressed = (value) => {
    this.setState({ display: value });
  }


  render() {
    return (
      <div className="App">

        <div className="calculator-display">
          {this.state.display}
        </div>
        <div>
          <div className="button-row">
            <CalculatorButton value={'1'} clickOperation={this.updateDisplay} />
            <CalculatorButton value={'2'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'3'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'+'} clickOperation={this.operationButtonPressed} />
          </div>
          <div className="button-row">
            <CalculatorButton value={'4'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'5'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'6'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'-'} clickOperation={this.operationButtonPressed} />
          </div>
          <div className="button-row">
            <CalculatorButton value={'7'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'8'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'9'} clickOperation={this.numberButtonPressed} />
          </div>
          <div className="button-row">
            <CalculatorButton value={'C'} clickOperation={this.clearPressed} />
            <CalculatorButton value={'0'} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'='} clickOperation={this.equalsPressed} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
