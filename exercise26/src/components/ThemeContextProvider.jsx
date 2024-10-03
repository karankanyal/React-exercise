// Todo: Create & manage context in this file

import { createContext, useState } from "react";

export const ThemeContext = createContext({
  toggleTheme: () => {},
  currentTheme: "",
});

export default function ThemeContextProvider({ children }) {
  // Todo: Add the compo  nent code (incl. dynamic context value)
  const [theme, setTheme] = useState("dark");

  function handleToggleTheme() {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }

  const ctxValue = {
    toggleTheme: handleToggleTheme,
    currentTheme: theme,
  };

  return (
    <ThemeContext.Provider value={ctxValue}>{children}</ThemeContext.Provider>
  );
}
