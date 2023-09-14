import styles from "./Home.module.scss";
import data from "../../../data/home";

import React from 'react'
import SecondaryBtn from "../../../uiComponents/buttons/SecondaryBtn";



export function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.header}>
        <h1>Организация праздников и мероприятий</h1>
        <h2>
          Event агенство - Организация праздников. Мы поможем вам организовать праздники любого уровня в Нижнем Новгороде и Нижегородской области, а также мероприятия городского масштаба в городах: Муроме, Владимире, Москве
        </h2>
        {/* текст для сео */}
        <div>
          <p>Организация праздников от нашего агенста - лучший выбор для Вас или вашего ребенка. Заказывать наши услуги можно в
            любой календарный день. Наша компания готова предоставить Вам лубые услуги при организации детских дней рождений, корпоративных вечериок, а так же любых других событий под ключ круглый год.
            Множество наших клиентов доверяют нам организовывать и проводить важные для себя события по индивидуально подобранной программе. Наша работа - оставить воспоминания на всю жизнь. Мы предлогаем наши услуги с хорошим охватом по нижегородской области. </p>
        </div>
        </div>
        <noindex>
            {data.map((elem) => <Item data={elem} key={elem.title} />)}
        </noindex>

    </div>
  )
}


function Item({data}) {

    return (
        <div className={styles.item}>
               <img className={styles.itemImg} src={data.img} alt={data.alt} />
               <div className={styles.itemHeader}>{data.title}</div>
               <div className={styles.itemDescription}>{data.description}</div>
               <SecondaryBtn>Подробнее</SecondaryBtn>
        </div>
    )
}
