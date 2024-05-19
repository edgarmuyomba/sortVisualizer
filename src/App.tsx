import React, { useState } from 'react';

import { createContext } from 'react';

import './App.scss'
import Sidebar from './components/sidebar/sidebar';
import AnimationWindow from './components/animationWindow/animationWindow';

export enum Speed {
  slow = 'SLOW',
  medium = 'MEDIUM',
  fast = 'FAST'
};

export enum Algorithm {
  bubblesort = 'BUBBLESORT',
  insertionsort = 'INSERTIONSORT',
  mergesort = 'MERGESORT',
  quicksort = 'QUICKSORT',
  selectionsort = 'SELECTIONSORT'
};

interface Settings {
  speed: Speed;
  count: number;
  algorithm: Algorithm;
  array: number[];
  setSpeed: (speed: Speed) => void;
  updateCount: (int: number) => void;
  setAlgorithm: (algorithm: Algorithm) => void;
  generateArray: () => void;
  randomiseArray: () => void;
  sortArray: () => void;
}

export const SettingsContext = createContext<Settings>({
  speed: Speed.slow,
  count: 10,
  algorithm: Algorithm.bubblesort,
  array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  setSpeed: () => { },
  updateCount: () => { },
  setAlgorithm: () => { },
  generateArray: () => { },
  randomiseArray: () => { },
  sortArray: () => { },
})

function App() {

  const [speed, setSpeed] = useState(Speed.slow);
  const [count, setCount] = useState(10);
  const [algorithm, setAlgorithm] = useState(Algorithm.bubblesort);
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  function generateArray(): void {
    let new_array: number[] = [];
    for (var i = 1; i < count; i++) {
      new_array.push(i);
    }
    setArray(new_array);
   }

  function randomiseArray() { }

  function sortArray() { }

  function updateCount(int: number): void { 
    setCount(int);
    generateArray();
  }
  

  return (
    <SettingsContext.Provider value={{ 
      speed: speed, count: count, algorithm: algorithm, array: array, setSpeed: setSpeed, 
      setAlgorithm: setAlgorithm, generateArray: generateArray, randomiseArray: randomiseArray, 
      sortArray: sortArray, updateCount: updateCount }}>
      <Sidebar />
      <AnimationWindow />
    </SettingsContext.Provider >

  )
}

export default App
