import "./App.css";
import Review from "./Review.jsx";
import { useState } from "react";

function App() {
  const [studentName, setStudentName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [isSave, setIsSave] = useState(false);
  const feedbacks = [];

  function onSave() {
    setIsSave((isSave) => !isSave);
  }

  function handleChangeName(event) {
    setStudentName(event.target.value);
  }

  function handleChangeFeedback(event) {
    setFeedback(event.target.value);
  }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          <textarea
            className="text-center "
            placeholder="Enter your feedback here!"
            onChange={handleChangeFeedback}
            defaultValue={feedback}
          />
        </p>
        <p>
          <label>Your Name</label>
          <input
            placeholder="Enter your name"
            className="text-center"
            type="text"
            onChange={handleChangeName}
            defaultValue={studentName}
          />
        </p>
      </section>
      <section id="draft">
        <h2>Your Feedback</h2>

        <Review feedback={feedback} student={studentName} />

        <button onClick={onSave}>Save</button>
      </section>
      {isSave && (
        <section id="draft">
          <h2>Your Feedback</h2>
          <Review feedback={feedback} student={studentName} />
        </section>
      )}
    </>
  );
}

export default App;
