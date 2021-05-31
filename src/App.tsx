import React from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  // User selects number of dice
  // User selects type of dice
  // Multiple dice trays available?
  // "Roll" method that rolls all dice
  // Need to lift state from dice to here?
  // Math.random here? or in dice components?
  // Will need to throw results into an array in state for display
  let diceType: number;

  const diceRoll = () => {
    const roll: number = Math.floor(Math.random() * diceType) + 1;
    return roll
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
