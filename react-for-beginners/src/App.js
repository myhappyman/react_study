import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

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