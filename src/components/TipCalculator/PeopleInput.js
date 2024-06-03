import React from 'react';
import './PeopleInput.css';

function PeopleInput({ numberOfPeople, setNumberOfPeople }) {
  return (
    <div className="people-input">
      <label>Number of People</label>
      <input 
        type="number" 
        value={numberOfPeople} 
        onChange={(e) => setNumberOfPeople(parseInt(e.target.value) || 1)} 
      />
    </div>
  );
}

export default PeopleInput;