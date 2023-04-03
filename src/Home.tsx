import React from 'react';
import Game from './Game';

const Home: React.FC = () => {
  return (
    <div>
      <h1>Welcome to My Game App!</h1>
      <p>Click the button below to start playing the game:</p>
      <button>Start Game</button>
      <Game />
    </div>
  );
};

export default Home;
