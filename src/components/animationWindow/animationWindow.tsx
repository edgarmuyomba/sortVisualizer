import React, { useContext, useState } from "react";

import styles from "./styles.module.scss";
import { SettingsContext } from "../../App";

export default function AnimationWindow() {

    const { array, count } = useContext(SettingsContext);

    const getHeight = (int: number): string => {
        // obtain the largest value
        let tmp = Array.from(array);
        tmp.sort((a, b) => b - a);
        let max = tmp[0];
        // calculate height based on height of largest value
        return `calc((${int} * 80%) / ${max})`;
    }

    const getWidth = (): string => `calc(55% / ${count})`;


    return (
        <div className={styles.container}>
            {
                array.map((int: number, index: number) => {
                    return (
                        <div key={index} className={styles.element} style={{ height: getHeight(int), width: getWidth() }}>
                            <p className={styles.value} style={{ display: count > 17 ? 'none' : 'block'}}>
                                {int}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}