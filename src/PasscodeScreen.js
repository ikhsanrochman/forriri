import React, { useState } from "react";
import "./PasscodeScreen.css";

const PASSCODE = "0307";

const PasscodeScreen = ({ onSuccess }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleNumber = (num) => {
    if (input.length < 4) {
      setInput(input + num);
      setError("");
    }
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
    setError("");
  };

  const handleSubmit = () => {
    if (input === PASSCODE) {
      setError("");
      onSuccess();
    } else {
      setError("Wrong passcode. Try again!");
      setInput("");
    }
  };

  return (
    <div className="passcode-container">
      <h2>Enter Passcode</h2>
      <div className="passcode-dots">
        {[0,1,2,3].map((i) => (
          <span key={i} className={input.length > i ? "dot filled" : "dot"}></span>
        ))}
      </div>
      <div className="keypad">
        {[1,2,3,4,5,6,7,8,9].map((n) => (
          <button key={n} className="keypad-btn" onClick={() => handleNumber(n)}>{n}</button>
        ))}
        <button className="keypad-btn" onClick={handleDelete}>&larr;</button>
        <button className="keypad-btn" onClick={() => handleNumber(0)}>0</button>
        <button className="keypad-btn" onClick={handleSubmit} disabled={input.length !== 4}>OK</button>
      </div>
      {error && <div className="passcode-error">{error}</div>}
    </div>
  );
};

export default PasscodeScreen; 