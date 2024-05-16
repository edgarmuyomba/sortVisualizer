import React from "react";
import { useState } from "react";

import Icon from '@mdi/react';
import { mdiPlaySpeed, mdiTallyMark3 } from '@mdi/js';

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
        </div>
    )
}