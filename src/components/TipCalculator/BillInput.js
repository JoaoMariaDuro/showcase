import React from 'react';
import './BillInput.css';

function BillInput({ bill, setBill }) {
  return (
    <div className="bill-input">
      <label>Bill</label>
      <input 
        type="number" 
        value={bill} 
        onChange={(e) => setBill(parseFloat(e.target.value) || 0)} 
      />
    </div>
  );
}

export default BillInput;