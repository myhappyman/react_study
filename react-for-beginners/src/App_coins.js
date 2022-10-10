import { useState, useEffect } from "react";

/**
 * App
 * 암호화페 관련 미니 프로젝트를 시작한다.
 * 단순하게 암호화페 종류와 그 가격을 나열하게 될 것이다.
 *
 * 1. 페이지에 접근하면 로딩 메시지가 보인다.
 * 2. 코인들이 나열되면 로딩 메시지를 숨기고 코인 리스트를 보여준다.
 *
 * -------------------------
 * 추가 과제
 * ul, li 리스트를 select option으로 변경하고
 * 각 선택된 option값의 해당하는 암호화페값을 20달러로 몇개까지 살수 있는지 예제를 작성해보자
 */

function App() {
  const haveUSD = 20;
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectCoinName, setSelectCoinName] = useState("");
  const [transeCnt, setTranseCnt] = useState(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onChange = (event) => {
    const select = event.target.value;
    if (select) {
      const selects = select.split(":");
      setSelectCoinName(selects[0]);
      setTranseCnt(Math.floor(haveUSD / selects[1]));
    }
  };

  return (
    <div>
      <h1>The Coins({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <p>
        당신이 소유한 ${haveUSD}로 살수 있는 {selectCoinName}의 개수는{" "}
        {transeCnt}
        개입니다.
      </p>
      <select onChange={onChange}>
        <option value="">데이터를 선택하세요.</option>
        {coins.map((coin, index) => (
          <option
            key={index}
            name={coin.name}
            value={coin.name + ":" + coin.quotes.USD.price}
          >
            {coin.name}({coin.symbol}) :{coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
    </div>
  );
}

export default App;
