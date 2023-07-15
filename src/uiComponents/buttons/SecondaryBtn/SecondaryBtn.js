import styles from "./SecondaryBtn.module.scss";

export function SecondaryBtn({children, action=f=>f}) {

    return (
        <button className={styles.btn} onClick={action}><span className={styles.btnText}>{children}</span></button>
    )
}