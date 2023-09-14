import styles from "./Home.module.scss";
import data from "../../../data/home";

import React from 'react'
import SecondaryBtn from "../../../uiComponents/buttons/SecondaryBtn";



export function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.header}>
        <h2>
            <noindex>Мы поможем вам организовать праздники любого уровня в Нижнем Новгороде и Нижегородской области, а также мероприятия городского масштаба в городах: Муроме, Владимире, Москве</noindex>
        </h2>
        {/* текст для сео */}
        <div>
          <h1>Орагизация праздников и мероприятий</h1>
          <p>Наше event агенство организует для Вас, Вашей компании мероприятие любого уровня. Заказывать наши услуги можно в
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
               <img className={styles.itemImg} src={data.img} alt={data.title} />
               <div className={styles.itemHeader}>{data.title}</div>
               <div className={styles.itemDescription}>{data.description}</div>
               <SecondaryBtn>Подробнее</SecondaryBtn>
        </div>
    )
}
