import styles from "./SecondaryInput.module.scss";

export function SecondaryInput({placeholder="", setValue, value, label, id, options, style={}}) {

    return (
        <div className={styles.input_wrapper}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input id={id} className={styles.inp} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} value={value} {...options} style={style} />
        </div>
    )
}