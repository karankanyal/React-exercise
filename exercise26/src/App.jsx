import "./App.css";

import ThemeContextProvider from "./components/ThemeContextProvider";
import Page from "./components/Page";

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
