import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

/**
 * 라우터에는 두가지 종류가 있다.
 * -BrowserRouter
 * -HashRouter
 *
 * 누군가 만들어 놓은 라우터 관련 컴포넌트를 연결만하면 라우터로 동작을한다.
 * Router > Swtich > Route안에 컴포넌트를 입력
 * react-router-dom 5버전에서 6버전 이상으로 올라가고 아래처럼 변경됨
 * 1. Switch컴포넌트 대신 Routes컴포넌트로 대체되었습니다.
 * Switch > Routes
 * 2. Route 컴포넌트 자식 노드로 처리하지 않고 element prop에 자식 노드를 위치시킵니다.
 * <Route path="/"><Home /><Route>  ->  <Route path="/" element={<Home />}>
 *
 * HashRouter는 뒤에 #이 붙는 차이점이 있다.
 *
 * --------------------------------------------
 * react에서 페이지 이동은 a태그 href를 걸어서 절대 이동시키지 않는다.
 * 사용해도 괜찮지만, 이렇게되면 리액트를 쓰는 이유가 없어지기 때문이며, a태그로 페이지를 이동하면
 * 모든 페이지가 재실행되는걸 볼 수 있고 그런 행위를 피하고 싶기 때문이다.
 * 페이지 이동을 위해선 Link 컴포넌트와 to prop을 사용하는데, 이렇게 이동하면
 * 새로고침 되지 않고 페이지의 내용만 변경되는걸 볼 수 있다.
 * @returns
 */
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie" element={<Detail />} />
      </Routes>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
