import { useState, useEffect } from "react";

/**
 * App
 *
 * 프로젝트 시작
 * 그동안 배운 state, props, effect등등 react기술들을 활용하여 프로젝트를 작성하고
 * 기술을 복습하고 습득하는 시간을 갖는다.
 *
 * state의 값은 state에 직접적으로 절대 바꾸지 않는다. (그렇기 때문에 const로 선언하는것으로 보인다.)
 * 그동안은 number, string, boolean타입의 간단한 변수들을 set함수를 통해
 * 이전값에 변경하거나 증감, 감소 등의 연산을 해보았는데, array라면 어떻게 제어해야할까?
 *
 * array라고 set함수에 바로 push를하지 않는다.
 * es6문법인 spread 연산을 통해 이전값과 새로운값으로 새로운 배열을 만들고 그 배열을 대입해줌으로써
 * array값인 state를 수정한다.
 *
 * @returns
 */

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo((prev) => event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (!toDo || toDo === "") {
      return;
    }
    console.log(toDo);
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");
  };

  console.log(toDos);
  return (
    <div>
      <h1>오늘 나의 할일({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
