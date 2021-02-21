import React from 'react';
import logo from './assets/images/ep-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Easy CMS
        </p>
        <a
          className="App-link"
          href="http://fireball-cms-staging.s3-website.eu-west-2.amazonaws.com/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          Staging Live
        </a>
      </header>
    </div>
  );
}

export default App;
