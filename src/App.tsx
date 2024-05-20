import React, { useState } from 'react';

import { createContext } from 'react';

import './App.scss'
import Sidebar from './components/sidebar/sidebar';
import AnimationWindow from './components/animationWindow/animationWindow';

import bubbleSort from './algorithms/bubbleSort';
import mergeSort from './algorithms/mergeSort';
import insertionSort from './algorithms/insertionSort';
import quickSort from './algorithms/quickSort';
import selectionSort from './algorithms/selectionSort';

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
      let random_number = Math.floor(Math.random() * (count + 1)) + 1;
      new_array.push(random_number);
    }
    setArray(new_array);
  }

  function randomiseArray() {
    let new_array: number[] = [];
    let change: boolean = true;
    let tmp = Array.from(array);
    while (tmp.length > 0) {
      var elem: number | undefined;
      if (change) {
        elem = tmp.pop();
      } else elem = tmp.shift();
      if (elem != null) new_array.push(elem);
      change = !change;
    }
    setArray(new_array);
  }

  function sortArray() {
    switch (algorithm) {
      case Algorithm.bubblesort:
        var tmp_array: number[] = Array.from(array);
        bubbleSort(tmp_array);
        setArray(tmp_array);
        break;
      case Algorithm.insertionsort:
        var tmp_array: number[] = Array.from(array);
        insertionSort(tmp_array);
        setArray(tmp_array);
        break;
      case Algorithm.mergesort:
        var tmp_array: number[] = Array.from(array);
        mergeSort(tmp_array, 0, tmp_array.length - 1);
        setArray(tmp_array);
        break;
      case Algorithm.quicksort:
        var tmp_array: number[] = Array.from(array);
        quickSort(tmp_array, 0, tmp_array.length - 1)
        setArray(tmp_array);
        break;
      case Algorithm.selectionsort:
        var tmp_array: number[] = Array.from(array);
        selectionSort(tmp_array);
        setArray(tmp_array);
        break;
    }
  }

  function updateCount(int: number): void {
    setCount(int);
    generateArray();
  }


  return (
    <SettingsContext.Provider value={{
      speed: speed, count: count, algorithm: algorithm, array: array, setSpeed: setSpeed,
      setAlgorithm: setAlgorithm, generateArray: generateArray, randomiseArray: randomiseArray,
      sortArray: sortArray, updateCount: updateCount
    }}>
      <Sidebar />
      <AnimationWindow />
    </SettingsContext.Provider >

  )
}

export default App
