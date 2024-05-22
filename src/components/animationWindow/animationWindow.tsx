import React, { useContext, useState } from "react";

import styles from "./styles.module.scss";
import { Element, SettingsContext } from "../../App";
import { structuredArrayToArray } from "../../utils/utils";

export default function AnimationWindow() {

    const { array, count } = useContext(SettingsContext);

    const getHeight = (int: number): string => {
        // obtain the largest value
        let tmp = structuredArrayToArray(Array.from(array));
        tmp.sort((a, b) => b - a);
        let max = tmp[0];
        // calculate height based on height of largest value
        return `calc((${int} * 90%) / ${max})`;
    }

    const getWidth = (): string => `calc(55% / ${count})`;

    return (
        <div className={styles.container}>
            {
                array.map((element: Element, index: number) => {
                    return (
                        <div key={index} className={styles.element} style={{ height: getHeight(element.value), width: getWidth(), backgroundColor: element.active ? 'lightgreen' : 'light-gray' }}>
                            <p className={styles.value} style={{ display: count > 17 ? 'none' : 'block' }}>
                                {element.value}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}