import React, { useState } from 'react';

const BullsAndCows = () => {
  const [answer, setAnswer] = useState(generateAnswer());
  const [guesses, setGuesses] = useState([]);
  const [result, setResult] = useState('');

  function generateAnswer() {
    return Array.from({ length: 3 }, () => Math.floor(Math.random() * 10)).join('');
  }

  function handleGuess(e) {
    e.preventDefault();
    const value = e.target.elements.guess.value;

    if (!value || value.length !== 3) {
      setResult('3자리 숫자를 입력하세요!');
      return;
    }

    if (guesses.includes(value)) {
      setResult('이미 입력한 숫자입니다. 다시 입력하세요!');
      return;
    }

    const strike = getStrike(value, answer);
    const ball = getBall(value, answer);

    if (strike === 3) {
      setResult('정답입니다! 게임을 다시 시작하세요.');
      setAnswer(generateAnswer());
      setGuesses([]);
      return;
    }

    setResult(`${strike}S ${ball}B`);
    setGuesses([...guesses, value]);
  }

  function getStrike(value, answer) {
    let strike = 0;
    for (let i = 0; i < 3; i += 1) {
      if (value[i] === answer[i]) {
        strike += 1;
      }
    }
    return strike;
  }

  function getBall(value, answer) {
    let ball = 0;
    for (let i = 0; i < 3; i += 1) {
      if (value[i] !== answer[i] && answer.includes(value[i])) {
        ball += 1;
      }
    }
    return ball;
  }

  return (
    <div>
      <h1>숫자야구 게임</h1>
      <form onSubmit={handleGuess}>
        <input type="text" name="guess" />
        <button type="submit">추측</button>
      </form>
      <div>{result}</div>
      <ul>
        {guesses.map((guess, index) => (
          <li key={index}>{guess}</li>
          ))}
      </ul>
    </div>
  );
};

export default BullsAndCows;