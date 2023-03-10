import React, { useState } from 'react';
import Ladder from './Ladder';

const LadderGame = () => {
  const [numOfPlayers, setNumOfPlayers] = useState(2);
  const [numOfSteps, setNumOfSteps] = useState(5);

  const handleNumOfPlayersChange = (e) => {
    setNumOfPlayers(parseInt(e.target.value));
  };

  const handleNumOfStepsChange = (e) => {
    setNumOfSteps(parseInt(e.target.value));
  };

  return (
    <div>
      <label htmlFor="numOfPlayers">Number of Players: </label>
      <input
        type="number"
        id="numOfPlayers"
        min="2"
        max="10"
        value={numOfPlayers}
        onChange={handleNumOfPlayersChange}
      />
      <br />
      <label htmlFor="numOfSteps">Number of Steps: </label>
      <input
        type="number"
        id="numOfSteps"
        min="1"
        max="10"
        value={numOfSteps}
        onChange={handleNumOfStepsChange}
      />
      <br />
      <Ladder numOfPlayers={numOfPlayers} numOfSteps={numOfSteps} />
    </div>
  );
};

export default LadderGame;
