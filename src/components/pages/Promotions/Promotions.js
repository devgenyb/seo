import styles from "./Promotions.module.scss";

export function Promotions() {

    return (
        <div className={styles.promotions}>
            <div className={styles.header}><h2>Акции</h2></div>
            <div className={styles.item}>
                <h3 className={styles.itemHeader}>Провести детский день рождения выгодно</h3>
                <p className={styles.itemDescription}>Что делать, если праздник уже скоро-скоро, бюджет скромный, но хочется провести его с размахом и по-настоящему удивить своего ребенка и его гостей? Обратите внимание на акционные предложения Агентства праздников PARTY STARS ®. Формат комплексного праздника позволит существенно сэкономить, а ребенок будет рад разнообразию программ и развлечений на своем дне рождения.</p>
                <div className={styles.video}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/FnuC0gc3dh4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    )
}