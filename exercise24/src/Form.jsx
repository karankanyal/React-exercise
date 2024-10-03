import { forwardRef, useImperativeHandle, useRef } from "react";

const ResultForward = forwardRef(function Form({}, ref) {
  const formr = useRef();

  useImperativeHandle(ref, () => {
    return {
      clear() {
        formr.current.reset();
      },
    };
  });

  return (
    <form ref={formr}>
      <p>
        <label>Name</label>
        <input type="text" />
      </p>

      <p>
        <label>Email</label>
        <input type="email" />
      </p>
      <p id="actions">
        <button>Save</button>
      </p>
    </form>
  );
});

export default ResultForward;
