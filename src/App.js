import React, { Component } from 'react';
import { CalculatorButton } from './calculator-button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerOne: 0,
      registerTwo: 0,
      operation: null,
      display: 0,
      applyLastOperation: false
    };
  }


  numberButtonPressed = (value) => {
    if (this.state.applyLastOperation) {
      this.setState({
        registerOne: value,
        display: value,
        applyLastOperation: false,
        registerTwo: 0,
        operation: null
      })
      return;
    }

    if (!this.state.operation) {

      const newValue = this.pushNewValueToNumber(this.state.registerOne, value);
      this.setState({ registerOne: newValue, display: newValue })
    } else {
      
      const newValue = this.pushNewValueToNumber(this.state.registerTwo, value);
      this.setState({ registerTwo: newValue, display: newValue })
    }

  }

  pushNewValueToNumber = (register, value) => {
    let newValue = (register * 10) + value;

      if (newValue > Number.MAX_SAFE_INTEGER || newValue < Number.MIN_SAFE_INTEGER) {
        newValue = 0;
      }

      return newValue;
  }


  operationButtonPressed = (value) => {

    if (this.state.operation && !this.state.applyLastOperation) { 
      this.equalsPressed();
    }

    this.setState({ operation: value, registerTwo: 0, applyLastOperation: false });

  }

  clearPressed = () => {
    this.setState({ operation: null, registerOne: 0, registerTwo: 0, display: 0 });
  }

  equalsPressed = () => {

    if(!this.state.operation) {
      return;
    }

    let result;

    if (this.state.operation === '+') {
      result = this.state.registerOne + this.state.registerTwo;
    }

    if (this.state.operation === '-') {
      result = this.state.registerOne - this.state.registerTwo;
    }

    this.setState({ display: result, registerOne: result, applyLastOperation: true })

  }

  captureKeyPress = (event) => {
    if ("1234567890".indexOf(event.key) >= 0) {
      this.numberButtonPressed(event.key * 1);
    }
    if ("+-".indexOf(event.key) >= 0) {
      this.operationButtonPressed(event.key);
    }
    if (event.key === "=" || event.key === "Enter") {
      this.equalsPressed();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.captureKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.captureKeyPress);
  }


  render() {
    return (

      <div className="calculator-wrapper">
        <div className="calculator">

          <div className="calculator-display">
            {this.state.display}
          </div>
          <div>
            <div className="button-row">
              <CalculatorButton className="btn number-button" value={1} clickOperation={this.numberButtonPressed} />
              <CalculatorButton className="btn number-button" value={2} clickOperation={this.numberButtonPressed} />
              <CalculatorButton className="btn number-button" value={3} clickOperation={this.numberButtonPressed} />
              <CalculatorButton className="btn operation-button" value={'+'} clickOperation={this.operationButtonPressed} />
            </div>
            <div className="button-row">
              <CalculatorButton className="btn number-button" value={4} clickOperation={this.numberButtonPressed} />
              <CalculatorButton className="btn number-button" value={5} clickOperation={this.numberButtonPressed} />
              <CalculatorButton className="btn number-button" value={6} clickOperation={this.numberButtonPressed} />
              <CalculatorButton className="btn operation-button" value={'-'} clickOperation={this.operationButtonPressed} />
            </div>
            <div className="button-row">
              <CalculatorButton className="btn number-button" value={7} clickOperation={this.numberButtonPressed} />
              <CalculatorButton className="btn number-button" value={8} clickOperation={this.numberButtonPressed} />
              <CalculatorButton className="btn number-button" value={9} clickOperation={this.numberButtonPressed} />
            </div>
            <div className="button-row">
              <CalculatorButton className="btn clear-button" value={'C'} clickOperation={this.clearPressed} />
              <CalculatorButton className="btn number-button" value={0} clickOperation={this.numberButtonPressed} />
              <CalculatorButton className="btn operation-button" value={'='} clickOperation={this.equalsPressed} />
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
