import React, { useContext } from "react";
import { useState } from "react";

import Icon from '@mdi/react';
import { mdiPlaySpeed, mdiTallyMark3, mdiGraphOutline, mdiRefresh, mdiShuffle } from '@mdi/js';

import styles from "./styles.module.scss";
import { Algorithm, SettingsContext, Speed } from "../../App";

export default function Sidebar() {

    const { generateArray, randomiseArray, sortArray, setAlgorithm, count, updateCount, speed, setSpeed, disabled } = useContext(SettingsContext);

    const options: { value: Speed }[] = [{
        value: Speed.slow
    },
    {
        value: Speed.medium
    },
    {
        value: Speed.fast
    },];

    function changeAlgorithm(event: React.ChangeEvent<HTMLSelectElement>): void {
        let selected: string = event.target.value;

        switch (selected) {
            case 'BUBBLESORT':
                setAlgorithm(Algorithm.bubblesort);
                break;
            case 'INSERTIONSORT':
                setAlgorithm(Algorithm.insertionsort);
                break;
            case 'MERGESORT':
                setAlgorithm(Algorithm.mergesort);
                break;
            case 'QUICKSORT':
                setAlgorithm(Algorithm.quicksort);
                break;
            case 'SELECTIONSORT':
                setAlgorithm(Algorithm.selectionsort);
                break;
        }
    }

    let disabledButton = { backgroundColor: 'transparent', color: 'gray', border: '1px solid lightgray', borderRadius: '5px' };

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Sort Visualizer
            </div>
            <hr />
            <div className={styles.setting}>
                <div className={styles.header}>
                    <Icon path={mdiPlaySpeed} size={0.8} />
                    <p className={styles.name}>
                        Speed
                    </p>
                </div>
                <div className={styles.options}>
                    {
                        options.map((option, index) => {
                            return (
                                <button style={disabled ? disabledButton : {}} onClick={() => setSpeed(option.value)} key={index} className={`${styles.option} ${option.value === speed ? styles.selected : null}`}>{option.value}</button>
                            )
                        })
                    }
                </div>
            </div>
            <div className={styles.setting}>
                <div className={styles.header}>
                    <Icon path={mdiTallyMark3} size={0.8} />
                    <p className={styles.name}>
                        Element Count
                    </p>
                </div>
                <input disabled={disabled} type="range" name="count" id="count" min={5} max={100} value={count} onChange={(event) => updateCount(parseInt(event.target.value))} />
            </div>
            <hr />
            <div className={styles.setting}>
                <div className={styles.header}>
                    <Icon path={mdiGraphOutline} size={0.8} />
                    <p className={styles.name}>Algorithm</p>
                </div>
                <select disabled={disabled} name="algorithms" className={styles.algorithms} onChange={(event) => changeAlgorithm(event)}>
                    <option value={Algorithm.bubblesort}>Bubble Sort</option>
                    <option value={Algorithm.insertionsort}>Insertion Sort</option>
                    {/* <option value={Algorithm.mergesort}>Merge Sort</option>
                    <option value={Algorithm.quicksort}>Quick Sort</option> */}
                    <option value={Algorithm.selectionsort}>Selection Sort</option>
                </select>
            </div>
            <hr />
            <div className={styles.setting}>
                <div className={styles.buttons}>
                    <button style={disabled ? disabledButton : {}} className={styles.refresh} title="Refresh" onClick={() => generateArray()}>
                        <Icon path={mdiRefresh} size={0.7} />
                    </button>
                    <button style={disabled ? disabledButton : {}} className={styles.random} title="Randomise" onClick={() => randomiseArray()}>
                        <Icon path={mdiShuffle} size={0.7} />
                    </button>
                    <button style={disabled ? disabledButton : {}} className={styles.sort} onClick={() => sortArray()}>
                        Sort
                    </button>
                </div>
            </div>
        </div>
    )
}