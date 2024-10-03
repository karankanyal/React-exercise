import { useRef } from "react";
import "./App.css";
import Form from "./Form";

function App() {
  const formRef = useRef();

  function handleRestart() {
    formRef.current.clear();
  }

  return (
    <div id="app">
      <button onClick={handleRestart}>Restart</button>
      <Form ref={formRef} />
    </div>
  );
}

export default App;
