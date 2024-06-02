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
import { arrayToStructuredArray, elementAnimations, structuredArrayToArray } from './utils/utils';

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
  disabled: boolean;
}

export const SettingsContext = createContext<Settings>({
  speed: Speed.medium,
  count: 20,
  algorithm: Algorithm.bubblesort,
  array: [], // TODO: should take on the suggested array structure
  setSpeed: () => { },
  updateCount: () => { },
  setAlgorithm: () => { },
  generateArray: () => { },
  randomiseArray: () => { },
  sortArray: () => { },
  disabled: false,
})

function App() {

  const [speed, setSpeed] = useState<Speed>(Speed.medium);
  const [count, setCount] = useState<number>(20);
  const [algorithm, setAlgorithm] = useState<Algorithm>(Algorithm.bubblesort);
  const [array, setArray] = useState<Element[]>([]);
  const [disabled, setDisabled] = useState<boolean>(false);

  function generateArray(): void {
    if (!disabled) {
      let new_array: number[] = [];
      for (var i = 1; i < count; i++) {
        let random_number = Math.floor(Math.random() * (count + 1)) + 1;
        new_array.push(random_number);
      }
      setArray(arrayToStructuredArray(new_array));
    }
  }

  // first time call
  useEffect(() => {
    generateArray();
  }, [])

  function randomiseArray() {
    if (!disabled) {
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
  }

  async function sortArray() {
    if (!disabled) {
      let tmp_array: Element[] | number[];
      let arrays: Element[][];
      let active_elements: Element[][];

      switch (algorithm) {
        case Algorithm.bubblesort:
          tmp_array = Array.from(array);
          arrays = bubbleSort(tmp_array);
          setDisabled(true);
          await elementAnimations(arrays, setArray, speed);
          setDisabled(false);
          break;
        case Algorithm.insertionsort:
          tmp_array = Array.from(array);
          arrays = insertionSort(tmp_array);
          setDisabled(true);
          await elementAnimations(arrays, setArray, speed);
          setDisabled(false);
          break;
        case Algorithm.mergesort:
          tmp_array = Array.from(array);
          arrays = mergeSort(tmp_array);
          setDisabled(true);
          await elementAnimations(arrays, setArray, speed);
          setDisabled(false);
          break;
        case Algorithm.quicksort:
          tmp_array = structuredArrayToArray(Array.from(array));
          quickSort(tmp_array, 0, tmp_array.length - 1)
          setArray(arrayToStructuredArray(tmp_array));
          break;
        case Algorithm.selectionsort:
          tmp_array = Array.from(array);
          arrays = selectionSort(tmp_array);
          setDisabled(true);
          await elementAnimations(arrays, setArray, speed);
          setDisabled(false);
          break;
      }
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
      sortArray: sortArray, updateCount: updateCount, disabled: disabled
    }}>
      <Sidebar />
      <AnimationWindow />
    </SettingsContext.Provider >

  )
}

export default App
