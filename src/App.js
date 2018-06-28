import React, { Component } from 'react';
import './App.css';
import { CalculatorButton } from './calculator-button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerOne: '',
      registerTwo: '',
      operation: null,
      display: 0
    };
  }


  numberButtonPressed = (value) => {
    if (!this.state.operation) {
      const newValue = this.state.registerOne + value;
      this.setState({
        registerOne: newValue,
        display: newValue
      })
    } else {
      const newValue = this.state.registerTwo + value;
      this.setState({
        registerTwo: newValue,
        display: newValue
      })
    }
  }

  operationButtonPressed = (value) => {
    this.setState({ operation: value, registerTwo: '' });
  }

  clearPressed = () => {
    this.setState({ operation: null, registerOne: '', registerTwo: '', display: 0 });
  }

  equalsPressed = (value) => {

      let result = eval(this.state.registerOne + this.state.operation + this.state.registerTwo);

      this.setState({
        display: result,
        registerOne: result
      })

  }


  render() {
    return (
      <div className="App">

        <div className="calculator-display">
          {this.state.display}
        </div>
        <div>
          <div className="button-row">
            <CalculatorButton value={'1'} clickOperation={this.numberButtonPressed} />
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
