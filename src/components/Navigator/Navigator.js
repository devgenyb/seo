import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navigator.module.scss";
import { links } from "../../data";

export function Navigator() {

    const location = useLocation();
    const navigate = useNavigate();
    const pathes = location.pathname.matchAll('[A-z0-9]{1,}');
    
 
    const loflinks = [];
    while (true) {
        const tmp = pathes.next();
        if (tmp.done) break;
        loflinks.push(links[tmp.value[0]]);
    }
    const last = loflinks.pop();
    console.log(loflinks);

    return (
        <div className={styles.wrapper}>
            <div className={styles.navigator}>
                <div className={styles.topline}>
                    <div className={styles.staticLink}><Link to={"/"}>Главгая</Link><span className={styles.seporator}>/</span></div>
                    {loflinks.map(item => <div className={styles.dynlink} key={item.name}><Link to={item.href}>{item.name}</Link><span className={styles.seporator}>/</span></div>)}
                    {last.name && <div className={styles.dynlink}>{last.name}</div>}
                </div>
                <div className={[styles.bottomLine, styles.staticLink].join(' ')}>
                    <div  style={{display: "inline-block"}} onClick={() => navigate(-1)}><a>Назад</a></div>
                </div>
            </div>
        </div>
    )
}
