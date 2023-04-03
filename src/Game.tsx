import React from 'react';
import { useNavigate } from 'react-router-dom';
import GuessTheNumber from './GuessTheNumber';

const Game = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/game/guess-the-number');
  }

  return (
    <div>
      <h1>Game</h1>
      <button onClick={handleClick}>Guess the Number</button>
      <GuessTheNumber />
      {/* Add any other game components here */}
    </div>
  );
}

export default Game;
