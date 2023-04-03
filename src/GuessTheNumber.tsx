import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GuessTheNumber = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleGuess = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsedGuess = parseInt(guess);

    if (isNaN(parsedGuess)) {
      setMessage('Please enter a valid number');
    } else if (parsedGuess === number) {
      setMessage('You guessed correctly!');
      setNumber(Math.floor(Math.random() * 100) + 1);
      setGuess('');
    } else if (parsedGuess > number) {
      setMessage('Your guess is too high');
      setGuess('');
    } else {
      setMessage('Your guess is too low');
      setGuess('');
    }
  };

  const handleNewGame = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setGuess('');
    setMessage('');
  };

  const handleReturn = () => {
    navigate('/game');
  };

  return (
    <div>
      <h1>Guess the Number</h1>
      <p>Guess a number between 1 and 100</p>
      <form onSubmit={handleGuess}>
        <input type="text" value={guess} onChange={(event) => setGuess(event.target.value)} />
        <button type="submit">Guess</button>
        <button type="button" onClick={handleNewGame}>New Game</button>
        <button type="button" onClick={handleReturn}>Return to Game Menu</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default GuessTheNumber;
