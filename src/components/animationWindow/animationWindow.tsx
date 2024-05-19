import React, { useState } from "react";

import styles from "./styles.module.scss";

export default function AnimationWindow() {

    const [array, setArray] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

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