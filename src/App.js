import React from "react";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const plustButtonClickHandler = () => {
    const newPlusCount = count + 1;
    setCount(newPlusCount);
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          onClick={() => {
            const newCount = count - 1;
            setCount(newCount);
          }}
        >
          -
        </button>
        <button onClick={plustButtonClickHandler}>+</button>
      </div>
    </div>
  );
}

export default App;
