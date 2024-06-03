import React from 'react';
import './CustomTipInput.css';

function CustomTipInput({ customTip, setCustomTip }) {
  return (
    <div className="custom-tip-input">
      <label>Custom Tip</label>
      <input 
        type="number" 
        value={customTip} 
        onChange={(e) => setCustomTip(parseFloat(e.target.value) || 0)} 
      />
    </div>
  );
}

export default CustomTipInput;