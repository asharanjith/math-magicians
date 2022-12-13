import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Calculator from './components/calculator';
import Home from './components/Pages/Home';
import Quotes from './components/Pages/Quotes';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="Quotes" element={<Quotes />} />

        </Routes>
      </>
    );
  }
}

export default App;
