import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Burger from "../../uiComponents/Burger";
import styles from "./Menu.module.scss";
import { NavLink } from "react-router-dom";

export function Menu({ data }) {

    const [active, setActive] = useState(false);
    const [listHeight, setListHeigth] = useState(0);
    
    const menuList = useRef(null);

    useLayoutEffect(() => {
        setListHeigth(menuList.current.offsetHeight);
        
    }, [setActive])

    return (
        <nav className={styles.menu}>
            <div className="container">
                <div className={styles.wraperMobile}>
                <div className={styles.innerMobile}>
                    <div className={styles.menuText}>Меню</div>
                    <Burger active={active} setActive={(val) => setActive(val)} />
                </div>
                <div className={styles.list} style={{height: active ? 240 + 'px' : 0 + 'px'}}>
                    <ul className={styles.ulist} ref={menuList}>
                        {data.map((elem) => <NavLink to={elem.path} className={({isActive}) => isActive ? styles.active : styles.enactive} key={elem.path + "burger"}><li onClick={(e) => {setActive(false)}} className={styles.menuElem} key={elem.path}>{elem.name}</li></NavLink>)}
                    </ul>
                </div>
                </div>

            <div className={styles.wrapperDesktop}>
                    <ul className={styles.ulistDesk}>
                        {data.map((elem) => <NavLink to={elem.path} className={({isActive}) => isActive ? styles.active : styles.enactive} key={elem.path + "desk"}><li className={styles.menuElemDesk} >{elem.name}</li></NavLink>)}
                    </ul>
            </div>

            </div>
        </nav>
    )
}