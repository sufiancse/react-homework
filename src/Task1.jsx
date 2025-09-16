import { useState } from "react";

export default function Task1() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count <= 0) {
      alert("Click Increase Button");
    } else {
      setCount(count - 1);
    }
  }
  function reset() {
    setCount(0);
  }

  return (
    <div>
      <h2>Count Clicked: {count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
