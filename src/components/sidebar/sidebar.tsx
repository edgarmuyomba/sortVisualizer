import React from "react";

import styles from "./styles.module.scss";

export default function Sidebar() {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                Sort Visualizer
            </div>
            <hr />
            <div className={styles.setting}>
                <p className={styles.name}>
                    Speed
                </p>
                <input type="range" name="speed" id="speed" min={0} max={100} />
            </div>
        </div>
    )
}