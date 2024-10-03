import "./App.css";
import Div from "./Div";

function App() {
  const clickHandler = () => {
    console.log("Clicked!");
  };

  return (
    <Div>
      <h2>You're logged in!</h2>
      <p>Welcome to your user profile!</p>
      <button onClick={clickHandler}>Click me!</button>
    </Div>
  );
}

export default App;
