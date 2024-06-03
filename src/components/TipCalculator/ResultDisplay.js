import React from 'react';
import './ResultDisplay.css';

function ResultDisplay({ tipAmount, totalAmount }) {
  return (
    <div className="result-display">
      <div className="result-item">
        <label>Tip Amount</label>
        <span>${tipAmount} / person</span>
      </div>
      <div className="result-item">
        <label>Total</label>
        <span>${totalAmount} / person</span>
      </div>
    </div>
  );
}

export default ResultDisplay;