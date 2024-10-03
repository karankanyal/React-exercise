import "./App.css";
import ChangingValueContext from "./store/ChangingValueContext";
import Page from "./components/Page";

function App() {
  return (
    <ChangingValueContext>
      <Page />
    </ChangingValueContext>
  );
}

export default App;
