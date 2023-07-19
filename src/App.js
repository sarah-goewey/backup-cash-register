import React from "react";
import { useSelector } from "react-redux";

const App = () => {
  return (
    <div>
      <h1>Backup Cash Register</h1>
      <h2>
        <i>For when your point-of-sale is being a POS.</i>
      </h2>
      <hr />
      <h3>Items:</h3>
      <button>Calculate</button>
    </div>
  );
};

export default App;
