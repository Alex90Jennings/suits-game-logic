import { useState } from 'react';

function App() {
  const players = {
    username: '',
    isHost: false,
    playerState: []
  }
  const table = {
    users: [],
    rounds: []
  }
  const round = {
    numberOfCards: 8,
    trumps: 'S',
    currentTrick: ''
  }
  const playerState = {
    playerId: '',
    score: 0,
    bet: 0,
    hand: '',
    playedCard: '',
    playsNext: false,
    handsWon: 0
  }

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
