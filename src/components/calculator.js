import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (

      <div className="calculator-display">
        <div className="calculator-display__result">0</div>
        <div className="calculator-keypad">
          <button type="button" className="calculator-keypad__key">AC</button>
          <button type="button" className="calculator-keypad__key">+/-</button>
          <button type="button" className="calculator-keypad__key">%</button>
          <button type="button" className="calculator-keypad__key operator">/</button>
          <button type="button" className="calculator-keypad__key">7</button>
          <button type="button" className="calculator-keypad__key">8</button>
          <button type="button" className="calculator-keypad__key">9</button>
          <button type="button" className="calculator-keypad__key operator">*</button>
          <button type="button" className="calculator-keypad__key">4</button>
          <button type="button" className="calculator-keypad__key">5</button>
          <button type="button" className="calculator-keypad__key">6</button>
          <button type="button" className="calculator-keypad__key operator">-</button>
          <button type="button" className="calculator-keypad__key">1</button>
          <button type="button" className="calculator-keypad__key">2</button>
          <button type="button" className="calculator-keypad__key">3</button>
          <button type="button" className="calculator-keypad__key operator">+</button>
          <button type="button" className="calculator-keypad__key zero">0</button>
          <button type="button" className="calculator-keypad__key">.</button>
          <button type="button" className="calculator-keypad__key operator">=</button>
        </div>
      </div>

    );
  }
}

export default Calculator;
