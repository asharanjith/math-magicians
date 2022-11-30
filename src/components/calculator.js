import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, operation: null, next: null };
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent = (e) => {
    this.setState((state) => calculate(state, e.target.textContent));
  };

  render() {
    const { total, next, operation } = this.state;
    return (

      <div className="calculator-display">
        <div className="calculator-display__result">
          {total}
          {operation}
          {next}
        </div>
        <div className="calculator-keypad">
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>AC</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>+/-</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>%</button>
          <button type="button" className="calculator-keypad__key operator" onClick={this.clickEvent}>÷</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>7</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>8</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>9</button>
          <button type="button" className="calculator-keypad__key operator" onClick={this.clickEvent}>x</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>4</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>5</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>6</button>
          <button type="button" className="calculator-keypad__key operator" onClick={this.clickEvent}>-</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>1</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>2</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>3</button>
          <button type="button" className="calculator-keypad__key operator" onClick={this.clickEvent}>+</button>
          <button type="button" className="calculator-keypad__key zero" onClick={this.clickEvent}>0</button>
          <button type="button" className="calculator-keypad__key" onClick={this.clickEvent}>.</button>
          <button type="button" className="calculator-keypad__key operator" onClick={this.clickEvent}>=</button>
        </div>
      </div>

    );
  }
}

export default Calculator;
