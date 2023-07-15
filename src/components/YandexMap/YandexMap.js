import styles from "./YandexMap.module.scss";

export function YandexMap() {

    return (
        <div className={styles.ymap}>
            <div style={{position:"relative",overflow:"hidden", height: "100%"}}><a href="https://yandex.ru/maps/47/nizhny-novgorod/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px",position:"absolute",top:"0px"}}>Нижний Новгород</a><a href="https://yandex.ru/maps/47/nizhny-novgorod/house/ulitsa_karla_marksa_47/YEoYfwNlQEIOQFtsfX91cHlibA==/?ll=43.945979%2C56.341518&utm_medium=mapframe&utm_source=maps&z=17.05" style={{color:"#eee",fontSize:"12px",position:"absolute",top:"14px"}}>Улица Карла Маркса, 47 — Яндекс Карты</a><iframe src="https://yandex.ru/map-widget/v1/?ll=43.945979%2C56.341518&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDk2MzcyMjc2EqsB0KDQvtGB0YHQuNGPLCDQndC40LbQvdC40Lkg0J3QvtCy0LPQvtGA0L7QtCwg0JrQsNC90LDQstC40L3RgdC60LjQuSDRgNCw0LnQvtC9LCDQttC40LvQvtC5INGA0LDQudC-0L0g0JzQtdGJ0LXRgNGB0LrQvtC1INCe0LfQtdGA0L4sINGD0LvQuNGG0LAg0JrQsNGA0LvQsCDQnNCw0YDQutGB0LAsIDQ3IgoNr8gvQhW3XWFC&z=17.05" width="100%" height="100%" frameborder="1" allowfullscreen="true" style={{position:"relative"}}></iframe></div>
        </div>
    )
}