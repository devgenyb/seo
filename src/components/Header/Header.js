import { useEffect, useState } from "react";
import bg_image from "../../images/header/header_bg.png";
import phoneIcon from "../../images/icons/header_phone-icon.png";
import mailIcon from "../../images/icons/header_mail-icon.png";

import OrderBtn from "../../uiComponents/buttons/OrderBtn";
import { FeedbackModal } from "../FeedbackModal/FeedbackModal";
import styles from "./Header.module.scss";
import { createPortal } from "react-dom";
import Menu from "../Menu";
import { menu } from "../../data";
import HomeSlider from "../HomeSlider";
import { Link, useLocation } from "react-router-dom";

export function Header() {

    const [showFeedback, setShowFeedback] = useState(false);
    const location = useLocation();

    return (
        <header>
            <div className={styles.header}>
                <Link to={'/'}>
                <img className={styles.bg} src={bg_image} alt="big background image" />
                </Link>
            </div>

            <div className={styles.contactBlock}>
            <div className="container">
                <div className={styles.wrapper}>
                <div className={styles.contactAddress}>
                г. Нижний Новгород, ул. Карла Маркса, д. 47
                </div>
                <div className={styles.contanctPhones}>
                    <span className={styles.phonesIcon}>
                        <img src={phoneIcon} alt="Phone icon" />
                    </span>
                    <span className={styles.phones}>
                        <a href="tel:+78312911919">+7 (831) 291-19-19</a>,
                        <a href="tel:+79082307657">+7 (908) 230-76-57</a>, <br className={styles.br}/>
                        <a href="tel:+79503510534">+7 (950) 351-05-34</a>
                    </span>
                </div>
                <div className={styles.contactMail}>
                    <span className={styles.mailIcon}>
                        <img src={mailIcon} alt="email icon" />
                    </span>
                    <a href="mailto:superstar.ru@bk.ru">
                    superstar.ru@bk.ru
                    </a>
                </div>
                <div className={styles.orderBtn}>
                    <OrderBtn action={() => setShowFeedback(true)} />
                </div>
                </div>

                <FeedbackModal show={showFeedback} onClose={() => setShowFeedback(false)} />

            </div>
            </div>

        <Menu data={menu} />

        {location.pathname === '/' && <HomeSlider />}

        </header>
    )
}