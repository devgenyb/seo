import styles from "./LargeInput.module.scss";


export function LargeInput({placeholder, setValue, value, options, style={}}) {

    return (
        <input className={styles.inp} placeholder={placeholder} onChange={(e) => setValue(e.target.value)} value={value} {...options} style={style} />
    )
}