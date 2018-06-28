import React, { Component } from 'react';
import './App.css';
import { CalculatorButton } from './calculator-button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerOne: 0,
      registerTwo: 0,
      operation: null,
      display: 0,
      readyForReset: false
    };
  }


  numberButtonPressed = (value) => {

    if (this.state.readyForReset) {
      this.setState({
        registerOne: value,
        display: value,
        readyForReset: false,
        registerTwo: 0,
        operation: null
      })
      return;
    }

    if (!this.state.operation) {
      const newValue = (this.state.registerOne * 10) + value;
      this.setState({ registerOne: newValue, display: newValue })
    } else {
      const newValue = (this.state.registerTwo * 10) + value;
      this.setState({ registerTwo: newValue, display: newValue })
    }

  }

  operationButtonPressed = (value) => {
    this.setState({ operation: value, registerTwo: 0, readyForReset: false });
  }

  clearPressed = () => {
    this.setState({ operation: null, registerOne: 0, registerTwo: 0, display: 0 });
  }

  equalsPressed = () => {

    let result// = eval(this.state.registerOne + this.state.operation + this.state.registerTwo);

    if (this.state.operation === '+') {
      result = this.state.registerOne + this.state.registerTwo;
    }

    if (this.state.operation === '-') {
      result = this.state.registerOne - this.state.registerTwo;
    }

    this.setState({
      display: result,
      registerOne: result,
      readyForReset: true
    })

  }

  captureKeyPress = (event) => {
    console.log('event',event.key);
    if("1234567890".indexOf(event.key) >= 0) {
      this.numberButtonPressed(event.key*1);
    }
    if("+-".indexOf(event.key) >= 0) {
      this.operationButtonPressed(event.key);
    }
    if(event.key === "=" || event.key === "Enter") {
      this.equalsPressed();
    }

  }

  componentDidMount(){
    document.addEventListener('keydown',this.captureKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown',this.captureKeyPress);
  }


  render() {
    return (
      <div className="App">

        <div className="calculator-display">
          {this.state.display}
        </div>
        <div>
          <div className="button-row">
            <CalculatorButton value={1} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={2} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={3} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'+'} clickOperation={this.operationButtonPressed} />
          </div>
          <div className="button-row">
            <CalculatorButton value={4} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={5} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={6} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'-'} clickOperation={this.operationButtonPressed} />
          </div>
          <div className="button-row">
            <CalculatorButton value={7} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={8} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={9} clickOperation={this.numberButtonPressed} />
          </div>
          <div className="button-row">
            <CalculatorButton value={'C'} clickOperation={this.clearPressed} />
            <CalculatorButton value={0} clickOperation={this.numberButtonPressed} />
            <CalculatorButton value={'='} clickOperation={this.equalsPressed} />
          </div>
        </div>

      </div>
    );
  }
}

export default App;
