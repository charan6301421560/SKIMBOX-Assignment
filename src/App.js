import React, { useState } from 'react';
import './App.css';
import Options from './components/options/options.js'; // Import the Options component
import Shipping from './components/shipping/shipping.js'; // Import the Shipping component

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  const handleOptionChange = (event) => {
    const selectedOptionId = event.target.id;
    setSelectedOption(selectedOptionId);

    const prices = {
      option1: 195.0,
      option2: 345.0,
      option3: 528.0,
    };

    const price = prices[selectedOptionId];
    setTotalPrice(price);
  };

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <hr className="line" />
          <h2 id="charan">Bundle & Save</h2>
          <hr className="line" />
        </div>

        <Options selectedOption={selectedOption} handleOptionChange={handleOptionChange} />
        <Shipping totalPrice={totalPrice} />
        
      </div>
    </div>
  );
}

export default App;