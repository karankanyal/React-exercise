import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");
  function changeColor() {
    setColor((prevColor) => (prevColor === "red" ? "white" : "red"));
  }

  return (
    <div>
      <p style={{ color: color }}>Style me!</p>
      <button
        className="bg-white p-1 text-xs rounded-sm text-black"
        onClick={() => changeColor()}
      >
        Toggle style
      </button>
    </div>
  );
}

export default App;
