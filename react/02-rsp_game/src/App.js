import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import "./HandIcon.css";
import "./App.css";
import reset from "./assets/ic-reset.svg";
import { compareHand, generateRandomHand } from "./utils";
import { useState } from "react";

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return "승리";
  if (comparison < 0) return "패배";
  return "무승부";
}

function App() {
  // State
  // 던지기 버튼을 누르면 화면에서 주사위 이미지가 바뀌어야한다.
  //  ==> HTML 로 작성한다면 주사위 이미지 마다 화면을 만들거나
  // 비동기로 요소를 추가, 삭제 하는 코드를 작성해야한다.
  // 리액트에서는 State 라는 것을 사용한다. State는 리액트에서 변수 같은 것인데
  // 이 State가 바뀔 때마다 리액트가 알아서 화면을 새로 렌더링 해준다.

  const [Hand, setHand] = useState("rock");
  const [OtherHand, setOtherHand] = useState("rock");
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);
  // 승리 했을때 winner이미지로 변경
  const [isWin, setIsWin] = useState(0);

  const HandleButtonClick = (value) => {
    const nextOtherHand = generateRandomHand();
    const nextHistory = getResult(value, nextOtherHand);
    const comparison = compareHand(value, nextOtherHand);

    setIsWin(comparison);
    setHand(value);
    setOtherHand(nextOtherHand);
    setGameHistory([...gameHistory, nextHistory]);

    // if (nextHistory === "승리") setScore(score + 1);
    // if (nextHistory === "패배") setOtherScore(otherScore + bet);
    if (comparison > 0) setScore(score + 1);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };
  // console.log(nextHand, nextOtherHand);

  const handleBetChange = (e) => {
    let num = Number(e.target.value);
    if (num > 9) num %= 10;
    if (num < 1) num = 1;
    num = Math.floor(num);
    setBet(num);
  };

  const hanleClearClick = () => {
    setHand("rock");
    setOtherHand("rock");
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
    setIsWin(0);
  };

  return (
    <div className="App">
      <h1 className="App-heading">가위바위보</h1>
      <img
        className="App-reset"
        src={reset}
        alt="초기화"
        onClick={hanleClearClick}
      />
      <div className="App-scores">
        <div className="Score">
          <div className="Score-num">{score}</div>
          <div className="Score-name">나</div>
        </div>
        <div className="App-versus">:</div>
        <div className="Score">
          <div className="Score-num">{otherScore}</div>
          <div className="Score-name">상대</div>
        </div>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          {/* 가위바위보 내는 곳 */}
          <div className="App-hands">
            <div
              className={`Hand ${isWin == 0 ? "" : isWin == 1 ? "winner" : ""}`}
            >
              <HandIcon value={Hand} className="Hand-icon" />
            </div>
            <div className="App-versus">VS</div>
            <div
              className={`Hand ${isWin == 0 ? "" : isWin == 1 ? "" : "winner"}`}
            >
              <HandIcon value={OtherHand} className="Hand-icon" />
            </div>
          </div>
          {/* 배점 */}
          <div className="App-bet">
            <span>배점</span>
            <input
              type="number"
              min={1}
              max={9}
              value={bet}
              onChange={handleBetChange}
            />
            <span>배</span>
          </div>
          {/* 승부기록 */}
          <div className="App-history">
            <h2>승부기록</h2>
            <p>{gameHistory.join(", ")}</p>
          </div>
        </div>
      </div>
      <div>
        <HandButton value="rock" onClick={HandleButtonClick} />
        <HandButton value="scissor" onClick={HandleButtonClick} />
        <HandButton value="paper" onClick={HandleButtonClick} />
      </div>
    </div>
  );
}

export default App;
