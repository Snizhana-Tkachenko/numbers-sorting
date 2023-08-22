import React, { useState } from 'react';

const RandomNumberGenerator = ({ onGenerate }) => {
  const [randomNumbers, setRandomNumbers] = useState([]);

  const handleGenerate = () => {
    const generatedNumbers = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100) + 1);
    setRandomNumbers(generatedNumbers);
    onGenerate(generatedNumbers); 
  };

  return (
    <div className="NumberBlock">
      <button className="ButtonSort" onClick={handleGenerate}>Generate Random Numbers</button>
      {randomNumbers.length > 0 && (
        <div className="NumberBlock">
          <h3 className="SortDescription">Generated Numbers:</h3>
          <div className="Number">
            {randomNumbers.map((number, index) => (
              <span key={index}>{number} </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomNumberGenerator;