import React, { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  console.log("id", id);
  console.log("password", password);

  //id 필드가 변경될 경우
  const onIdChaneHandler = (event) => {
    setId(event.target.value);
  };

  const onPasswordChaneHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div>
        아이디 : <input type="text" value={id} onChange={onIdChaneHandler} />
      </div>
      <div>
        비밀번호 :{" "}
        <input
          type="password"
          value={password}
          onChange={onPasswordChaneHandler}
        />
      </div>
      <button
        onClick={() => {
          alert(
            `고객님이 입력하신 아이디는 ${id}이며, 패스워드는 ${password}입니다.`
          );
          setId("");
          setPassword("");
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default App;
