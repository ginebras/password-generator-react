import React from 'react';
import './style.css';

export default function App() {
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
            value="9"
          />
        </div>

        <div>
          <label htmlFor="uppercase-letters">uppercase letters</label>
          <input
            type="checkbox"
            name="uppercase-letters"
            id="uppercase-letters"
          />
        </div>

        <div>
          <label htmlFor="lower-letters">lowercase letters</label>
          <input type="checkbox" name="lower-letters" id="lower-letters" />
        </div>

        <div>
          <label htmlFor="number">numbers</label>
          <input type="checkbox" name="number" id="number" />
        </div>

        <div>
          <label htmlFor="symbols">symbols</label>
          <input type="checkbox" name="symbols" id="symbols" />
        </div>
      </div>
    </div>
  );
}
