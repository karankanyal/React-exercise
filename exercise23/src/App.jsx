  import { useRef, useState } from "react";
  import "./App.css";
  import Input from "./Input";

  export function App() {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const name = useRef();
    const email = useRef();

    function handleSaveData() {
      setUserName(() => name.current.value);
      setUserEmail(() => email.current.value);
    }

    return (
      <div id="app">
        <Input type="text" label="Your Name" ref={name} />
        <Input type="email" label="Your E-Mail" ref={email} />
        <p id="actions">
          <button onClick={handleSaveData}>Save Data</button>
        </p>
        {userName && <h1>{userName}</h1>}
        {userEmail && <h1>{userEmail}</h1>}
      </div>
    );
  }
  export default App;
