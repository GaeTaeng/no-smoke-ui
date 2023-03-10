import React, { useState } from "react";
import "./Ladder.css";

function Ladder({ n, l }) {
  const [result, setResult] = useState(Array(n).fill(null));

  function onStart() {
    // 각 사용자별로 랜덤 결과 생성
    const newResult = Array(n).fill(null).map(() => {
      const rand = Math.floor(Math.random() * l);
      return rand % 2 === 0 ? rand + 1 : rand - 1;
    });
    setResult(newResult);
  }

  return (
    <div className="ladder">
      <div>
        <label htmlFor="users">사용자 수:</label>
        <input type="number" id="users" min="2" max="10" defaultValue={n} />
      </div>
      <div>
        <label htmlFor="ladders">사다리 수:</label>
        <input type="number" id="ladders" min="1" max="10" defaultValue={l} />
      </div>
      <button onClick={onStart}>시작</button>
      {result.map((r, i) => (
        <div key={i} className="step">
          <span>{i + 1}번 사용자</span>
          {[...Array(l)].map((_, j) => (
            <div key={j} className="rung" style={{ opacity: r === j ? 1 : 0.3 }}></div>
          ))}
          <span>{r !== null ? `결과: ${r}` : ""}</span>
        </div>
      ))}
    </div>
  );
}

export default Ladder;
