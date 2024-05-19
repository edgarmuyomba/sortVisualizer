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
  setCount: (int: number) => void;
  setAlgorithm: (algorithm: Algorithm) => void;
  generateArray: () => void;
  shuffleArray: () => void;
  sortArray: () => void;
}

export const SettingsContext = createContext<Settings>({
  speed: Speed.slow,
  count: 10,
  algorithm: Algorithm.bubblesort,
  array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  setSpeed: () => { },
  setCount: () => { },
  setAlgorithm: () => { },
  generateArray: () => { },
  shuffleArray: () => { },
  sortArray: () => { },
})

function App() {

  const [speed, setSpeed] = useState(Speed.slow);
  const [count, setCount] = useState(10);
  const [algorithm, setAlgorithm] = useState(Algorithm.bubblesort);
  const [array, setArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  function generateArray(): void {

    setArray([]);
   }

  function shuffleArray() { }

  function sortArray() { }
  

  return (
    <SettingsContext.Provider value={{ 
      speed: speed, count: count, algorithm: algorithm, array: array, setSpeed: setSpeed, 
      setAlgorithm: setAlgorithm, generateArray: generateArray, shuffleArray: shuffleArray, 
      sortArray: sortArray, setCount: setCount }}>
      <Sidebar />
      <AnimationWindow />
    </SettingsContext.Provider >

  )
}

export default App
