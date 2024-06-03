import React, { useState, useEffect } from 'react';
import BillInput from './BillInput';
import TipSelector from './TipSelector';
import CustomTipInput from './CustomTipInput';
import PeopleInput from './PeopleInput';
import ResultDisplay from './ResultDisplay';
import ResetButton from './ResetButton';
import './TipCalcultor.css';

function TipCalculator() {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [customTip, setCustomTip] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (numberOfPeople > 0) {
      const tip = (bill * (customTip || tipPercentage)) / 100 / numberOfPeople;
      const total = (bill / numberOfPeople) + tip;
      setTipAmount(tip.toFixed(2));
      setTotalAmount(total.toFixed(2));
    }
  }, [bill, tipPercentage, numberOfPeople, customTip]);

  return (
    <div className="calculator-container">
      <BillInput bill={bill} setBill={setBill} />
      <TipSelector setTipPercentage={setTipPercentage} />
      <CustomTipInput customTip={customTip} setCustomTip={setCustomTip} />
      <PeopleInput numberOfPeople={numberOfPeople} setNumberOfPeople={setNumberOfPeople} />
      <ResultDisplay tipAmount={tipAmount} totalAmount={totalAmount} />
      <ResetButton 
        setBill={setBill} 
        setTipPercentage={setTipPercentage} 
        setNumberOfPeople={setNumberOfPeople}
        setCustomTip={setCustomTip}
        setTipAmount={setTipAmount}
        setTotalAmount={setTotalAmount}
      />
    </div>
  );
}

export default TipCalculator;