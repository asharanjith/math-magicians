import React from 'react';

class DisplayResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="calculator-display__result">0</div>
    );
  }
}

export default DisplayResult;
