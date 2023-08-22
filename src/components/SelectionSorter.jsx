import React, { useState } from 'react';

const SelectionSorter = ({ numbers }) => {
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [sortClicked, setSortClicked] = useState(false);

  const selectionSort = (arr) => {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        const temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }

    return arr;
  };

  const handleSelectionSort = () => {
    const sortedArray = selectionSort([...numbers]);
    setSortedNumbers(sortedArray);
    setSortClicked(true);
  };

  return (
    <div className="NumberBlock">
      <h3 className="SortDescription">Sorted Numbers using Selection Sort:</h3>
      <button className="ButtonSort" onClick={handleSelectionSort}>Sort by Selection</button>
      <div className="Number">
      {!sortClicked && <p>Click the sort button</p>}
        {sortedNumbers.map((number, index) => (
          <span key={index}>{number} </span>
        ))}
      </div>
    </div>
  );
};

export default SelectionSorter;
