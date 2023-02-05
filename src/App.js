import React, { useState } from "react";

function App() {
  const [obj, setObj] = useState({
    name: "goomin",
    age: 21,
  });
  return (
    <div>
      <div>{obj.name}</div>;
      <button
        onClick={() => {
          obj.name = "moomin";
          const obj2 = { ...obj };
          setObj(obj2);
          //새로운 객체를 만들어야함
          // obj.name = "moomin";
          // console.log(obj);
          // setObj(obj);
        }}
      >
        변경
      </button>
    </div>
  );
}

export default App;
