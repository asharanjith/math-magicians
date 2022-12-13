import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar__title">Math Magicians</h1>
        <ul className="navbar__links">
          <li><Link to="/" className="navbar__link">Home</Link></li>
          <li>
            {' '}
            <Link to="Calculator" className="navbar__link">Calculator</Link>
          </li>
          <li>
            {' '}
            <Link to="Quotes" className="navbar__link">Quotes</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
