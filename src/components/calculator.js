import React from 'react';
// import calculate from '../logic/calculate';
import DisplayResult from './result';
import Keypad from './keypad';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="calculator-display">
        <DisplayResult />
        <Keypad />
      </div>
    );
  }
}

export default Calculator;
