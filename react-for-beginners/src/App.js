import { useState, useEffect } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = ()=> setCounter(cur => cur + 1);
  console.log("App called");
  const iRunOnlyOnce = () => {
    console.log("App i Run only once");
  }
  useEffect(iRunOnlyOnce, []);
  return (
    <div>
      <h1 className={styles.title}>Welcome back!</h1>
      <p>{counter}</p>
      <Button text="Continue" />
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;