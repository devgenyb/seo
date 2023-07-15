import { useState } from "react";
import styles from "./Burger.module.scss";

export function Burger({active, setActive}) {

    return (
        <div className={[styles.burger, active && styles.active].join(' ')} onClick={() => setActive(!active)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}