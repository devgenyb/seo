import { Link } from "react-router-dom";
import styles from "./VipParty.module.scss";

export function VipParty() {

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>
                VIP PARTY
            </h1>
            <div className={styles.content}>
                <PartyItem imagePath={"assest/images/vip-icon.png"} text={"Праздники для детей"} linkto={"childparty"}/>
                <PartyItem imagePath={"assest/images/vip-icon.png"} text={"Праздники для подростков"} linkto={"teenParty"}/>
                <PartyItem imagePath={"assest/images/vip-icon.png"} text={"Праздники для взрослых"} linkto={"oldparty"}/>
            </div>
            </div>
    )
}

function PartyItem({imagePath, text, linkto}) {
    return (
        <div className={styles.item}>
            <Link to={linkto}>
                <img className={styles.itemImage} src={imagePath} />
                <div className={styles.itemText}>{text}</div>
            </Link>
        </div>
    )
}