import { useState } from "react";

export default function Task2() {
  const [isVisible, setVisible] = useState(false);
  function toggleText() {
    setVisible(!isVisible);
  }
  return (
    <div>
      {isVisible && <h2 className="red">Hello, React Learner</h2>}
      <button onClick={toggleText}>{isVisible ? "Hide Text" : "Show Text"}</button>
    </div>
  );
}
