import React, { useState } from 'react';
import RandomNumberGenerator from './components/RandomNumberGenerator';
import BubbleSorter from './components/BubbleSorter';
import PyramidSorter from './components/PyramidSorter';
import InsertionSorter from './components/InsertionSorter';
import SelectionSorter from './components/SelectionSorter'; 

const App = () => {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);


  const handleGenerate = (numbers) => {
    setRandomNumbers(numbers);
  };

  return (
    <div className="RandomSortBlock">
      <h2 className="RandomHeader">Random Number Generator</h2>
      <RandomNumberGenerator onGenerate={handleGenerate} />
      <div className="DroListContenier">
      <select className="DropList" onChange={(e) => setSelectedComponent(e.target.value)} value={selectedComponent}>
        <option value="">Choose Sorting Method </option>
        <option value="bubble">Sort by Bubble</option>
        <option value="heap">Sort by Heap</option>
        <option value="insertion">Sort by Insertion</option>
        <option value="selection">Sort by Selection</option>
      </select>
      </div>
      {selectedComponent === 'bubble' && <BubbleSorter numbers={randomNumbers} />}
      {selectedComponent === 'heap' && <PyramidSorter numbers={randomNumbers} />}
      {selectedComponent === 'insertion' && <InsertionSorter numbers={randomNumbers} />}
      {selectedComponent === 'selection' && <SelectionSorter numbers={randomNumbers} />}
    </div>
  );
};

export default App;
