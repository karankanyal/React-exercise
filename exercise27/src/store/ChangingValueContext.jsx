import { useReducer } from "react";
import { createContext } from "react";

export const ValueContext = createContext({
  count: 0,
  onIncrement: () => {},
  onDecrement: () => {},
  onReset: () => {},
});

function counterReducer(state, action) {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }
  if (action.type === "DECREMENT" && state.count > 0) {
    return { count: state.count - 1 };
  }
  if (action.type === "RESET") {
    return { count: 0 };
  }
  return state;
}

export default function ChangingValueContext({ children }) {
  const [updatedValue, updatedValueDispatch] = useReducer(counterReducer, {
    count: 0,
  });

  function handleIncrement() {
    updatedValueDispatch({
      type: "INCREMENT",
    });
  }
  function handleDecrement() {
    updatedValueDispatch({
      type: "DECREMENT",
    });
  }
  function handleReset() {
    updatedValueDispatch({
      type: "RESET",
    });
  }

  const valueCtx = {
    count: updatedValue.count,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };

  return (
    <ValueContext.Provider value={valueCtx}>{children}</ValueContext.Provider>
  );
}
