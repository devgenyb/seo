import styles from "./RewievsShow.module.scss";
import { rewievs } from "../../data/rewiews";

export function RewievsShow() {


    const rewievItem = item => (
        <div key={item.name + item.date} className={styles.rewievBlock}>
            <div className={styles.avatar}>
                <img src="/assest/images/icons/girl_avatar.png" />
            </div>
            <div className={styles.itemContent}>
                <div className={styles.itemHeader}>
                    {item.name}, {item.date}
                </div>
                <div className={styles.itemText}>
                    {item.text.length < 250 ? item.text : <div>{sliceText(item.text, 250)}... <a className={styles.readMore}>Читать далее</a></div>}
                </div>
            </div>
        </div>        
    )

    return (
        <div className={styles.rewievsShow}>
            <div className="container">
                <h4 className={styles.header}>Отзывы о нас</h4>
                <div className={styles.content}>
                    {rewievs.map(rewievItem)}
                </div>
                <div className={styles.showAll}>
                    <a>смотреть все отзывы</a>
                </div>
            </div>
        </div>
    )
}


function sliceText(text, count) {
    for (let i = count; i > 0; i--) {
        if (text[i] == " ") {
            text = text.slice(0, i);
            break;
        }
    }
    return text;
}


