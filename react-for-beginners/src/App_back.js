import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

/**
 * App
 * 
 * Recap
 * react.js useEffect 복습
 * react의 가장 멋진 점은 바로 새로운 데이터가 생기면
 * 컴포넌트를 새로고침해주는데, 우리가 직접할 필요없이 리액트 생태계에 따른
 * 문법 규칙만 지키면 알아서 새로고침을 해준다는게 아주 편하고 좋다.
 * 하지만 작성한 컴포넌트 안에서도 한번만 실행하고 싶은 부분이 있을수도 있는데,
 * 이때는 useEffect를 통해 원하는 동작을 처리할 수 있다.
 * useEffect에는 두개의 파라미터가 존재하고
 * 첫번째 파라미터는 동작할 코드
 * 두번째 파라미터에는 감시할 대상(state)를 지정할 수 있다.
 * 
 * 감시할 대상에 변화가 발생하면 동작할 코드만 새로 동작한다.
 * 
 * @returns 
 */
function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter(cur => cur + 1);
  const onChange = (event) => setKeyword(event.target.value);
  // console.log("App called");
  const iRunOnlyOnce = () => {
    console.log("I run only once.");
  }
  useEffect(iRunOnlyOnce, []); //페이지가 로드되었을때 iRunOnlyOnce라는 함수만 한번 동작한다.
  useEffect(()=>{ //keyword state에 변화가 발생할때만 동작한다.
    if(keyword !== "" && keyword.length > 6){
      console.log("I run when 'keyword' changes");
    }
  }, [keyword]);
  useEffect(()=>{ //keyword state에 변화가 발생할때만 동작한다.
    console.log("I run when 'counter' changes");
  }, [counter]);

  useEffect(()=>{ //keyword, counter state에 변화가 발생하면 동작한다.
    console.log("I run when 'counter' & 'keyword' changes");
  }, [counter, keyword]);
  return (
    <div>
      <input type="text" onChange={onChange} value={keyword} placeholder="Search here..." />
      <h1 className={styles.title}>Welcome back!</h1>
      <p>{counter}</p>
      
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;