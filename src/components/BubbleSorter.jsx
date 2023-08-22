import React, { useState } from 'react';

const BubbleSorter = ({ numbers }) => {
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [sortClicked, setSortClicked] = useState(false);

  const handleBubbleSort = () => {
    const sortedArray = [...numbers].sort((a, b) => a - b);
    setSortedNumbers(sortedArray);
    setSortClicked(true);
  };

  return (
    <div className="NumberBlock">
      <h3 className="SortDescription">Sorted Numbers using Bubble Sort:</h3>
      <button className="ButtonSort" onClick={handleBubbleSort}>Sort by Bubble</button>
      <div className="Number">
      {!sortClicked && <p>Click the sort button</p>}
        {sortedNumbers.map((number, index) => (
          <span key={index}>{number} </span>
        ))}
      </div>
      
    </div>
  );
};

export default BubbleSorter;
