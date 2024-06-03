import React from 'react';
import './ResetButton.css';

function ResetButton({ setBill, setTipPercentage, setNumberOfPeople, setCustomTip, setTipAmount, setTotalAmount }) {
  const reset = () => {
    setBill(0);
    setTipPercentage(0);
    setNumberOfPeople(1);
    setCustomTip(0);
    setTipAmount(0);
    setTotalAmount(0);
  };

  return (
    <button onClick={reset} className="reset-button">
      RESET
    </button>
  );
}

export default ResetButton;