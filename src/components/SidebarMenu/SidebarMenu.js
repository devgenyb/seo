import styles from "./SidebarMenu.module.scss";
import { sidebar } from "../../data";
import PrimaryBtn from "../../uiComponents/buttons/PrimaryBtn";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

export function SidebarMenu() {

    const [itemsHeight, setItemsHeight] = useState(0);
    const itemsBlock = useRef(null);
    const [active, setActive] = useState(false);

    useLayoutEffect(() => {
        if (document.body.offsetWidth > 991) return;
        console.log('bla');
        if (itemsBlock && itemsBlock.current.offsetHeight !== 0) {
            setItemsHeight(itemsBlock.current.offsetHeight);
            const tr = 'all ' + itemsBlock.current.offsetHeight / 2.2 + 'ms linear';
            itemsBlock.current.style.height = '0px';
            itemsBlock.current.style.transition = tr;
            itemsBlock.current.style.WebkitTransition = tr;
        }
    }, [])

    useEffect(() => {

        const handleResize = (e) => {
            if (document.body.offsetWidth > 991) {
                itemsBlock.current.style.height = 'max-content';
                return;
            }
            if(itemsBlock.current) {
            itemsBlock.current.style.height = 'max-content';
            const tr = 'all ' + itemsBlock.current.offsetHeight / 2.2 + 'ms linear';
            itemsBlock.current.style.transition = tr;
            itemsBlock.current.style.WebkitTransition = tr;
            setItemsHeight(itemsBlock.current.offsetHeight);

            if (active) {
                itemsBlock.current.style.height = itemsBlock.current.offsetHeight + 'px';
            } else {
                itemsBlock.current.style.height = 0 + 'px';
            }
            
            }
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }

    }, [active])

    useEffect(() => {
        if (document.body.offsetWidth > 991) {
            itemsBlock.current.style.height = 'max-content';
            return;
        }
        if(itemsBlock) {
            itemsBlock.current.style.height = active ? itemsHeight + 'px' : '0px';
        }
    }, [active])

    return (
        <div className="container">
        <aside className={styles.sidebar}>
            <h2 className={styles.text}>
                Наши услуги
            </h2>
            <div className={styles.itemsWrapper}>
                <div className={styles.items} ref={itemsBlock}>
                    {sidebar.map(item => <NavbarItem key={item.name} text={item.name} image={"/assest/images/sidebar/" + item.image} />)}
                </div>
                <div className={styles.sidebarBtn}>
                <PrimaryBtn size={"small"} action={() => setActive(!active)}>{!active ? 'Развернуть' : 'Свернуть'}</PrimaryBtn>
                </div>
            </div>
        </aside>
        </div>
    )
}

function NavbarItem({text, image}) {

    return (
        <div className={styles.navbarItem}>
            <a className={styles.link}>
            <div className={styles.icon} style={{
                backgroundImage: `url(${image})`
            }} />
            <div>{text}</div>
            </a>
        </div>
    )
}