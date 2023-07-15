import { better } from "../../data";
import styles from "./WeBetter.module.scss";
export { better } from "../../data/";

export function WeBetter() {

    return (
        <div className="container">
        <div className={styles.weBetter}>
            <h3 className={styles.header}>Почему лучше заказать праздник у нас?</h3>
            <div className={styles.items}>
                {better.map((item) => <Item itemData={item} key={item.descripton} />)}
            </div>
        </div>
        </div>  
    )
}

function Item({itemData}) {

    return (
        <div className={styles.item}>
            <img src={"/assest/images/betterBlock/" + itemData.img} alt="adventestin image" />
            <p className={styles.desc}>{itemData.descripton}</p>
        </div>
    )
}