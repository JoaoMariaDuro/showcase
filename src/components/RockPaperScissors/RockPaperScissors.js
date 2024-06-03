import React, { useState } from 'react';
import './RockPaperScissors.css';
import iconRock from '../assets/icon-rock.svg';
import iconPaper from '../assets/icon-paper.svg';
import iconScissors from '../assets/icon-scissors.svg';
import iconClose from '../assets/icon-close.svg';

const choices = [
  { id: 'rock', icon: iconRock },
  { id: 'paper', icon: iconPaper },
  { id: 'scissors', icon: iconScissors },
];

function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [houseChoice, setHouseChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);

  const playGame = (choice) => {
    setPlayerChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setHouseChoice(randomChoice);
    const gameResult = getResult(choice.id, randomChoice.id);
    setResult(gameResult);
    updateScore(gameResult);
  };

  const getResult = (player, house) => {
    if (player === house) return 'draw';
    if (
      (player === 'rock' && house === 'scissors') ||
      (player === 'paper' && house === 'rock') ||
      (player === 'scissors' && house === 'paper')
    ) {
      return 'win';
    }
    return 'lose';
  };

  const updateScore = (gameResult) => {
    if (gameResult === 'win') setScore(score + 1);
    if (gameResult === 'lose') setScore(score - 1);
  };

  return (
    <div className="game-container">
      <header>
        <h1>Rock Paper Scissors</h1>
        <div className="score-board">
          <span>Score</span>
          <span>{score}</span>
        </div>
      </header>
      <main>
        {!playerChoice ? (
          <div className="choices">
            {choices.map((choice) => (
              <button key={choice.id} onClick={() => playGame(choice)}>
                <img src={choice.icon} alt={choice.id} />
              </button>
            ))}
          </div>
        ) : (
          <div className="result">
            <div className="choice">
              <span>You Picked</span>
              <img src={playerChoice.icon} alt={playerChoice.id} />
            </div>
            <div className="choice">
              <span>The House Picked</span>
              {houseChoice ? (
                <img src={houseChoice.icon} alt={houseChoice.id} />
              ) : (
                <div className="placeholder" />
              )}
            </div>
            {result && (
              <div className="result-text">
                <h2>{result === 'win' ? 'You Win' : result === 'lose' ? 'You Lose' : 'Draw'}</h2>
                <button onClick={() => setPlayerChoice(null)}>Play Again</button>
              </div>
            )}
          </div>
        )}
      </main>
      <footer>
        <button onClick={() => setShowRules(true)}>Rules</button>
      </footer>
      {showRules && (
        <div className="rules-modal">
          <div className="rules-content">
            <h2>Rules</h2>
            <img src={iconClose} alt="Close" onClick={() => setShowRules(false)} />
            <div className="rules-text">
              <img src={iconRock} alt="Rock" />
              <img src={iconPaper} alt="Paper" />
              <img src={iconScissors} alt="Scissors" />
              <p>Rock beats Scissors</p>
              <p>Paper beats Rock</p>
              <p>Scissors beat Paper</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RockPaperScissors;