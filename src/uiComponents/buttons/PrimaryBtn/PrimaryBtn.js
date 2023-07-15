import styles from "./PrimaryBtn.module.scss";


export function PrimaryBtn({size, children, action=() => {}, color="primary", options={}, style={}}) {


    let sizeClass = styles.small;
    let colorClass = styles.primaryColor;
    switch (size) {
        case 'small':
            sizeClass = styles.small;
            break;
        case 'middle':
            sizeClass = styles.middle;
            break;
        case 'large':
            sizeClass = styles.large;
            break;
    }

    switch (color) {
        case 'primary':
            colorClass = styles.primaryColor;
            break;
        case 'secondary':
            colorClass = styles.secondaryColor;
            break;
    }

    return (
        <button className={[styles.btn, sizeClass, colorClass].join(' ')} onClick={action} {...options} style={{...style}}>
            { children }
        </button>
    )
}