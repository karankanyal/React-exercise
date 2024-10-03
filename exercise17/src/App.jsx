import { useState } from "react";
import "./App.css";

function App() {
  const [col, setColor] = useState("white");

  return (
    <>
      <div id="app">
        <menu>
          <h1 style={{ color: col }}>CSS is great!</h1>
          <li>
            <button onClick={() => setColor("green")}>Yes</button>
          </li>
          <li>
            <button onClick={() => setColor("red")}>No</button>
          </li>
        </menu>
      </div>
    </>
  );
}

export default App;
