import { useState, useEffect } from "react";

/**
 * CleanUp function에 대하여 알아보자 
 * 
 * (- component는 단지 jsx를 return하는 함수일 뿐이다.
 * 컴포넌트 사용을 위한 구분을 위해 항상 대문자로 시작하도록 하자!
 * )
 * 
 * state값 showing의 toggle형 boolean값으로 Hello라는
 * 컴포넌트를 보여주고 안보여주고 처리하는 예제이다.
 * useEffect를 통해 초기 생성시에만 console.log를 출력하는 예제라서
 * showing이 될 때마다 console.log가 찍히는데, showing이 false일때
 * 즉 컴포넌트가 destroy될때는 아무 일도 일어나지 않는다.
 * 이때 destroy될 때에 대한 처리도 할 수 있는데, useEffect에 
 * function을 return 처리하면 된다.
 * 
 * 여기선 해당 컴포넌트가 사라질때이므로 감시하는 대상이 빈 배열에서 return을 해주게되면
 * 해당 컴포넌트가 사라질때 destroyed가 발생하는 걸 볼 수 있다.
 * 이처럼 컴포넌트가 사라질때 처리하는걸 CleanUp function이라고 부른다. 
 * 
 * (정상동작하지 않는다면 index.js의 React.StrictMode모드를 제거한다.
 * React.StrictMode 모드는 개발 과정 중 안전을 위해 켜지는 기능이며 배포시에는 사라진다고 한다.)
 */

function Hello(){
  useEffect(()=>{
    console.log("created!");
    return () => console.log("destroyed!"); //컴포넌트가 사라지면 발생한다.
  }, []); //한번 초기화시에만 부르겠다는 뜻
  return <h1>Hello</h1>
}


function App() {
  const [showing, setShowing] = useState(false);
  const onClick = ()=> setShowing((prev) => !prev);
  return (
    <div>
      {
        showing ? <Hello /> : null
      }
      
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;