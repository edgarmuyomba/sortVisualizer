import React from "react";
import { useState } from "react";

import Icon from '@mdi/react';
import { mdiPlaySpeed, mdiTallyMark3, mdiGraphOutline, mdiRefresh, mdiShuffle } from '@mdi/js';

import styles from "./styles.module.scss";

export default function Sidebar() {

    const [speed, setSpeed] = useState<number>(1);

    interface Option {
        index: number;
        value: string;
        selected: boolean;
    };

    const [options, setOptions] = useState<Option[]>([{
        index: 0,
        value: "slow",
        selected: false
    },
    {
        index: 1,
        value: "medium",
        selected: true
    },
    {
        index: 2,
        value: "fast",
        selected: false
    },]);

    function updateSeleted(option: Option): void {
        setSpeed(option.index);
        let newOptions: Option[] = options.map((_option) => {
            if (_option.index === option.index) {
                return {
                    ..._option,
                    selected: true,
                }
            } else return { ..._option, selected: false };
        });
        setOptions(newOptions);
    }

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
                                <button onClick={() => updateSeleted(option)} key={index} className={`${styles.option} ${option.selected ? styles.selected : null}`}>{option.value}</button>
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
                <input type="range" name="count" id="count" min={5} max={100} />
            </div>
            <hr />
            <div className={styles.setting}>
                <div className={styles.header}>
                    <Icon path={mdiGraphOutline} size={0.8} />
                    <p className={styles.name}>Algorithm</p>
                </div>
                <select name="algorithms" className={styles.algorithms}>
                    <option value="bubblesort">Bubble Sort</option>
                    <option value="insertionsort">Insertion Sort</option>
                    <option value="mergesort">Merge Sort</option>
                    <option value="quicksort">Quick Sort</option>
                    <option value="selectionsort">Selection Sort</option>
                </select>
            </div>
            <div className={styles.setting}>
                <button className={styles.refresh}>
                    <Icon path={mdiRefresh} size={0.7} />
                </button>
                <button className={styles.shuffle}>
                    <Icon path={mdiShuffle} size={0.7} />
                </button>
                <button className={styles.sort}>
                    Sort
                </button>
            </div>
        </div>
    )
}