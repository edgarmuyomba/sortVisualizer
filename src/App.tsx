import React, { useEffect, useState } from 'react';

import { createContext } from 'react';

import './App.scss'
import Sidebar from './components/sidebar/sidebar';
import AnimationWindow from './components/animationWindow/animationWindow';

import bubbleSort from './algorithms/bubbleSort';
import mergeSort from './algorithms/mergeSort';
import insertionSort from './algorithms/insertionSort';
import quickSort from './algorithms/quickSort';
import selectionSort from './algorithms/selectionSort';
import { arrayToStructuredArray, structuredArrayToArray } from './utils/utils';

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

export interface Element {
  id: number;
  value: number;
  active: boolean;
}

interface Settings {
  speed: Speed;
  count: number;
  algorithm: Algorithm;
  array: Element[];
  setSpeed: (speed: Speed) => void;
  updateCount: (int: number) => void;
  setAlgorithm: (algorithm: Algorithm) => void;
  generateArray: () => void;
  randomiseArray: () => void;
  sortArray: () => void;
}

export const SettingsContext = createContext<Settings>({
  speed: Speed.slow,
  count: 20,
  algorithm: Algorithm.bubblesort,
  array: [], // TODO: should take on the suggested array structure
  setSpeed: () => { },
  updateCount: () => { },
  setAlgorithm: () => { }, 
  generateArray: () => { },
  randomiseArray: () => { },
  sortArray: () => { },
})

function App() {

  const [speed, setSpeed] = useState<Speed>(Speed.slow);
  const [count, setCount] = useState<number>(20);
  const [algorithm, setAlgorithm] = useState<Algorithm>(Algorithm.bubblesort);
  const [array, setArray] = useState<Element[]>([]);

  function generateArray(): void {
    let new_array: number[] = [];
    for (var i = 1; i < count; i++) {
      let random_number = Math.floor(Math.random() * (count + 1)) + 1;
      new_array.push(random_number);
    }
    setArray(arrayToStructuredArray(new_array));
  }

  // first time call
  useEffect(() => {
    generateArray();
  }, [])

  function randomiseArray() {
    let new_array: number[] = [];
    let change: boolean = true;
    let tmp = structuredArrayToArray(Array.from(array));
    while (tmp.length > 0) {
      var index: number = Math.floor(Math.random() * tmp.length);
      new_array.push(tmp[index]);
      tmp.splice(index, 1);
    }
    setArray(arrayToStructuredArray(new_array));
  }

  function sortArray() {
    let tmp_array: Element[] | number[];
    switch (algorithm) {
      case Algorithm.bubblesort:
        tmp_array = Array.from(array);
        bubbleSort(tmp_array);
        setArray(tmp_array);
        break;
      case Algorithm.insertionsort:
        tmp_array = Array.from(array);
        insertionSort(tmp_array);
        setArray(tmp_array);
        break;
      case Algorithm.mergesort:
        tmp_array = structuredArrayToArray(Array.from(array));
        mergeSort(tmp_array, 0, tmp_array.length - 1);
        setArray(arrayToStructuredArray(tmp_array));
        break;
      case Algorithm.quicksort:
        tmp_array = structuredArrayToArray(Array.from(array));
        quickSort(tmp_array, 0, tmp_array.length - 1)
        setArray(arrayToStructuredArray(tmp_array));
        break;
      case Algorithm.selectionsort:
        tmp_array = Array.from(array);
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
