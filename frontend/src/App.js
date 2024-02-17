import React from 'react'
import logo from './logo.svg';
import './App.css';
import DrfApiFetch from './components/DrfApiFetch';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <DrfApiFetch />
    </div>
  );
}

export default App;
