import React from 'react';
import './TipSelector.css';

function TipSelector({ setTipPercentage }) {
  const tips = [5, 10, 15, 25, 50];

  return (
    <div className="tip-selector">
      <label>Select Tip %</label>
      <div className="tip-buttons">
        {tips.map(tip => (
          <button 
            key={tip} 
            onClick={() => setTipPercentage(tip)}
          >
            {tip}%
          </button>
        ))}
      </div>
    </div>
  );
}

export default TipSelector;