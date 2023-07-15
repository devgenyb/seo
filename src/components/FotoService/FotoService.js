import PrimaryBtn from "../../uiComponents/buttons/PrimaryBtn";
import styles from "./FotoService.module.scss";

export function FotoService() {

    return (
        <div className={styles.fotoService}>
            <div className="container">
                <div className={styles.wrapper}>
                    <div className={styles.outher}>
                    <img className={`${styles.icons} ${styles.leftIcon}`} src="/assest/images/icons/main-page_sale_camera.png" alt="декоративная иконка фотокамеры" />
                    <img className={`${styles.icons} ${styles.rightIcon}`} src="/assest/images/icons/main-page_sale_camera.png" alt="декоративная иконка фотокамеры" />
                    <div className={styles.header}>
                        <h2>
                        Закажи любую услугу прямо сейчас и получи <br />
                        скидку 10% на услуги фотографа!
                        </h2>
                        <p className={styles.subtitle}>Узнать подробнее о скидках в нашем агентстве:</p>
                    </div>
                    <div className={styles.btn}>
                        <PrimaryBtn size={"middle"} color="secondary"><span style={{color: "#000"}}>Узнать</span></PrimaryBtn>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}