import React, { useState } from 'react';
import './style.css';

import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from './characters';

export default function App() {
  const [password, setPassword] = useState(20);

  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [number, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const handleGeneratorPassword = () => {};
  const handleCreator = () => {};
  const generatorRandomIndex = () => {};

  return (
    <div className="container">
      <div className="generator">
        <h2>Password generator</h2>
        <button className="btn btn-primary">
          <i className="bi bi-clipboard-check"></i>
        </button>

        <div className="form-group">
          <label htmlFor="password-length">password length </label>
          <input
            type="number"
            name="password-length"
            id="password-length"
            max="20"
            min="7"
          />
        </div>

        <div>
          <label htmlFor="upper-letters">uppercase letters</label>
          <input
            type="checkbox"
            name="upper-letters"
            id="upper-letters"
            onClick={() => setUppercase(!uppercase)}
          />
        </div>

        <div>
          <label htmlFor="lower-letters">lowercase letters</label>
          <input
            type="checkbox"
            name="lower-letters"
            id="lower-letters"
            onClick={() => setLowercase(!lowercase)}
          />
        </div>

        <div>
          <label htmlFor="number">numbers</label>
          <input
            type="checkbox"
            name="number"
            id="number"
            onClick={() => setNumbers(!number)}
          />
        </div>

        <div>
          <label htmlFor="symbols">symbols</label>
          <input
            type="checkbox"
            name="symbols"
            id="symbols"
            onClick={() => setSymbols(!symbols)}
          />
        </div>
      </div>
    </div>
  );
}
