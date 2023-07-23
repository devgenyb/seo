import styles from "./SecondaryTextArea.module.scss";

export function SecondaryTextArea({setValue, value, label, id, style={}, ...options}) {

    return (
        <div className={styles.wrapper}>
                <label className={styles.label} htmlFor={id}>{label}</label>
                <textarea className={styles.message} value={value} onChange={(e) => setValue(e.target.value)} id={id} {...options} />
        </div>
    )
}