import { useContext } from "react";
import { ValueContext } from "../store/ChangingValueContext";

export default function Page() {
  const valueCtx = useContext(ValueContext);
  return (
    <div id="app">
      <h1>The (Final?) Counter</h1>
      <p id="actions">
        <button onClick={valueCtx.onIncrement}>Increment</button>
        <button onClick={valueCtx.onDecrement}>Decrement</button>
        <button onClick={valueCtx.onReset}>Reset</button>
      </p>
      <p id="counter">{valueCtx.count}</p>
    </div>
  );
}
