import React, { useState, useEffect } from 'react';
import './style.css';

import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from './characters';

export default function App() {
  const [password, setPassword] = useState();
  const [passwordLength, setPasswordLength] = useState(20);

  const [lowercase, setLowercase] = useState(false);
  const [uppercase, setUppercase] = useState(false);
  const [number, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  useEffect(() => {
    console.log('lowercase:', lowercase);
    console.log('uppercase:', uppercase);
    console.log('number:', number);
    console.log('symbols:', symbols);
    console.log('passwordLength:', passwordLength);
  }, [lowercase, uppercase, number, symbols, passwordLength]);

  const handleGeneratorPassword = () => {
    let characterList = '';

    if (!lowercase && !uppercase && !number && !symbols) {
      alert('you must choose at least 1 option');
    }

    if (lowercase) {
      characterList += lowerCaseLetters;
    }

    if (uppercase) {
      characterList += upperCaseLetters;
    }

    if (number) {
      characterList += numbers;
    }

    if (symbols) {
      characterList += specialCharacters;
    }

    setPassword(handleCreator(characterList));
  };
  const handleCreator = (characterList) => {
    let password = '';
    const characterLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = generatorRandomIndex(characterLength);
      password = password + characterList.charAt(characterIndex);
    }

    return password;
  };
  const generatorRandomIndex = (limit) => {
    return Math.round(Math.random() * limit);
  };

  return (
    <div className="container">
      <div className="generator">
        <h2>Password generator</h2>
        <strong>{password}</strong>
        <br />
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
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
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

        <div>
          <button
            className="btn btn-primary"
            name="symbols"
            id="symbols"
            onClick={handleGeneratorPassword}
          >generate password</button>
        </div>
      </div>
    </div>
  );
}
