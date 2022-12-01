import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = { total: 0, operation: null, next: null };
  //   this.clickEvent = this.clickEvent.bind(this);
  // }

  const [state, setState] = useState({ total: 0, operation: null, next: null });
  const { total, operation, next } = state;
  const clickEvent = (e) => {
    setState((state) => calculate(state, e.target.textContent));
  };

  return (
    <div className="calculator-display">
      <div className="calculator-display__result">
        {total}
        {operation}
        {next}
      </div>
      <div className="calculator-keypad">
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>AC</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>+/-</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>%</button>
        <button type="button" className="calculator-keypad__key operator" onClick={clickEvent}>÷</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>7</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>8</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>9</button>
        <button type="button" className="calculator-keypad__key operator" onClick={clickEvent}>x</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>4</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>5</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>6</button>
        <button type="button" className="calculator-keypad__key operator" onClick={clickEvent}>-</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>1</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>2</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>3</button>
        <button type="button" className="calculator-keypad__key operator" onClick={clickEvent}>+</button>
        <button type="button" className="calculator-keypad__key zero" onClick={clickEvent}>0</button>
        <button type="button" className="calculator-keypad__key" onClick={clickEvent}>.</button>
        <button type="button" className="calculator-keypad__key operator" onClick={clickEvent}>=</button>
      </div>
    </div>

  );
};

export default Calculator;
