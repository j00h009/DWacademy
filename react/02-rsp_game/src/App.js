import HandButton from "./HandButton";
import HandIcon from "./HandIcon";
import "./HandIcon.css";
import reset from "./assets/ic-reset.svg";

// function random(n) {
//   return Math.ceil(Math.random() * n);
// }

function App() {
  const HandleButtonClick = () => {
    alert(HandButton);
  };

  return (
    <div>
      <h1>가위바위보</h1>
      <img src={reset} alt="초기화" />
      <div className="App-scores">
        <div>
          <div>0</div>
          <div>나</div>
        </div>
        <div>:</div>
        <div>
          <div>0</div>
          <div>상대</div>
        </div>
      </div>
      <div className="Box App-box">
        <div className="Box-inner">
          {/* 가위바위보 내는 곳 */}
          <div>
            <div className="Hand">
              <HandIcon value="rock" className="Hand-icon" />
            </div>
            <div>VS</div>
            <div className="Hand">
              <HandIcon value="paper" className="Hand-icon" />
            </div>
          </div>
          {/* 배점 */}
          <div>
            <span>배점</span>
            <input type="number" min={1} max={9} />
            <span>배</span>
          </div>
          {/* 승부기록 */}
          <div>
            <h2>승부기록</h2>
            <p>승리, 패배</p>
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
