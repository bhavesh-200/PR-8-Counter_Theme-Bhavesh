// import React, { useState } from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);
  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <div className={`container p-4 text-center ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <h1>{darkMode ? "Dark Mode Counter" : "Light Mode Counter"}</h1>
      <h2>{count}</h2>
      <div className="btn-group">
        <button className="btn btn-success" onClick={increment}>Increment</button>
        <button className="btn btn-danger" onClick={decrement}>Decrement</button>
        <button className="btn btn-secondary" onClick={reset}>Reset</button>
      </div>
      <div className="mt-3">
        <button className="btn btn-primary" onClick={toggleMode}>
           {darkMode ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
};

export default Counter;
