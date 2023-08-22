import React, { useState } from 'react';

const InsertionSorter = ({ numbers }) => {
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [sortClicked, setSortClicked] = useState(false);

  const insertionSort = (arr) => {
    const n = arr.length;

    for (let i = 1; i < n; i++) {
      const key = arr[i];
      let j = i - 1;

      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }

      arr[j + 1] = key;
    }

    return arr;
  };

  const handleInsertionSort = () => {
    const sortedArray = insertionSort([...numbers]);
    setSortedNumbers(sortedArray);
    setSortClicked(true);
  };

  return (
    <div className="NumberBlock">
      <h3 className="SortDescription">Sorted Numbers using Insertion Sort:</h3>
      <button className="ButtonSort" onClick={handleInsertionSort}>Sort by Insertion</button>
      <div className="Number">
        {!sortClicked && <p>Click the sort button</p>}
        {sortedNumbers.map((number, index) => (
          <span key={index}>{number} </span>
        ))}
      </div>
    </div>
  );
};

export default InsertionSorter;
