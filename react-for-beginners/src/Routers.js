import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/**
 * 라우터에는 두가지 종류가 있다.
 * -BrowserRouter
 * -HashRouter
 *
 * 누군가 만들어 놓은 라우터 관련 컴포넌트를 연결만하면 라우터로 동작을한다.
 * Router > Swtich > Route안에 컴포넌트를 입력
 * @returns
 */
function Routers() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routers;
