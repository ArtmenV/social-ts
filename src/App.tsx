import React from 'react';
import logo from "./logo.svg"
import NeginaImage from './static/negina-goal-lg.jpg'
import './App.css'

import { ExchangeRates } from './grapghQL/Currency'
import { Dogs } from './grapghQL/Dogs'

function App() {
  return (
    <div className="App">
      {' '}
      <img src={logo} className="App-logo" alt="logo" />
      <img src={NeginaImage} alt="Gir" className="App-logo" />
      asdasd asdas
      <picture>
        <source data-src={NeginaImage} />
        <img alt="ddd" className="lazy" src={NeginaImage} />
      </picture>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <ExchangeRates />

        <picture>
          <source data-src={NeginaImage} />
          <img alt="ddd" className="lazy" src={NeginaImage} />
        </picture>
      </header>
      <Dogs />
    </div>
  )
}

export default App;
