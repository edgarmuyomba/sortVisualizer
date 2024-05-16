import React from 'react';

import { createContext } from 'react';

import './App.scss'
import Sidebar from './components/sidebar/sidebar';
import AnimationWindow from './components/animationWindow/animationWindow';

interface Settings {
  speed: number;
  count: number;
  algorithm: 'bubblesort' | 'insertionsort' | 'mergesort' | 'quicksort' | 'selectionsort';
  array: number[];
  setSpeed: () => void;
  setCount: () => void;
  generateArray: () => void;
  shuffleArray: () => void;
  sortArray: () => void;
}

export const SettingsContext = createContext<Settings>({
  speed: 1,
  count: 10,
  algorithm: 'bubblesort',
  array: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  setSpeed: () => { },
  setCount: () => { },
  generateArray: () => { },
  shuffleArray: () => { },
  sortArray: () => { },
})

function App() {

  return (
    <>
      <Sidebar />
      <AnimationWindow />
    </>
  )
}

export default App
