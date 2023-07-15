import styles from "./OrderBtn.module.scss";
import phoneIcon from "../../../images/icons/order-button_phone-icon.png";

export function OrderBtn({action}) {

    return (
        <button className={styles.btn} onClick={action}>
            <span className={styles.icon}><img src={phoneIcon} /></span>
            <span className={styles.text}>Заказать праздник</span>
        </button>
    )
}