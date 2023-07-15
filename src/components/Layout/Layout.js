import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import styles from "./Layout.module.scss";
import SidebarMenu from "../SidebarMenu";
import FotoService from "../FotoService";
import Footer from "../Footer";
import WeBetter from "../WeBetter";
import { YandexMap } from "../YandexMap/YandexMap";

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
                    <Outlet />
                </div>
            </div>
            </div>
            {location.pathname === '/' && 
            <div className={styles.fotoservice}>
                <FotoService />
            </div>
            }


            {location.pathname === '/' && 
            <div className={styles.weBetter}>
                <WeBetter />
            </div>
            }

            {location.pathname === '/' && 
                <div className={styles.map}>
                    <YandexMap />
                </div>
            }

            <Footer />
        </>
    )
}