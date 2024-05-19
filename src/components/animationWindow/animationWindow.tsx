import React, { useContext, useState } from "react";

import styles from "./styles.module.scss";
import { SettingsContext } from "../../App";

export default function AnimationWindow() {

    const { array, count } = useContext(SettingsContext);

    const getHeight = (int: number): string => `${int * 2.5}rem`;

    return (
        <div className={styles.container}>
            {
                array.map((int: number, index: number) => {
                    return (
                        <div key={index} className={styles.element} style={{ height: getHeight(int) }}>
                            <p className={styles.value}>
                                {int}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}