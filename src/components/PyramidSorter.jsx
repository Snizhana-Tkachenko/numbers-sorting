import React, { useState } from 'react';

const HeapSorter = ({ numbers }) => {
  const [sortedNumbers, setSortedNumbers] = useState([]);
  const [sortClicked, setSortClicked] = useState(false);

  const heapify = (arr, n, i) => {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      const temp = arr[i];
      arr[i] = arr[largest];
      arr[largest] = temp;

      heapify(arr, n, largest);
    }
  };

  const heapSort = (arr) => {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
    for (let i = n - 1; i >= 0; i--) {
      const temp = arr[0];
      arr[0] = arr[i];
      arr[i] = temp;

      heapify(arr, i, 0);
    }

    return arr;
  };

  const handleHeapSort = () => {
    const sortedArray = heapSort([...numbers]);
    setSortedNumbers(sortedArray);
    setSortClicked(true)
  };

  return (
    <div className="NumberBlock">
      <h3 className="SortDescription">Sorted Numbers using Heap Sort:</h3>
      <button className="ButtonSort" onClick={handleHeapSort}>Sort by Heap</button>
      <div className="Number">
      {!sortClicked && <p>Click the sort button</p>}
        {sortedNumbers.map((number, index) => (
          <span key={index}>{number} </span>
        ))}
      </div>
    </div>
  );
};

export default HeapSorter;
