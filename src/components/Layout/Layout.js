import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import styles from "./Layout.module.scss";
import SidebarMenu from "../SidebarMenu";
import FotoService from "../FotoService";
import Footer from "../Footer";
import WeBetter from "../WeBetter";
import { YandexMap } from "../YandexMap/YandexMap";
import Feedback from "../Feedback";
import RewievsShow from "../RewievsShow";
import Navigator from "../Navigator";

export function Layout() {

    const location = useLocation();

    return (
        <>
            <Header />
            <div className="container">
            <div className={styles.contentWrapper}>
                <div className={styles.sidebar}>
                    <SidebarMenu />
                </div>
                <div className={styles.content}>
                    {location.pathname !== '/' && 
                    <div className={styles.navigator}>
                        <Navigator />
                    </div>
                    }
                    <Outlet />
                </div>
            </div>
            </div>
            {location.pathname === '/' && 
            <div>
                <div className={styles.fotoservice}>
                    <FotoService />
                </div>
                <div className={styles.weBetter}>
                    <WeBetter />
                </div>
                <div className={styles.rewiewShow}>
                    <RewievsShow />
                </div>
                <div className={styles.map}>
                    <YandexMap />
                </div>
            </div>
            }


            {location.pathname !== '/' && 
                <div className={styles.feedback}>
                    <Feedback />
                </div>
            }


            <Footer />
        </>
    )
}