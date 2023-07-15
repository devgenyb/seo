import styles from "./Home.module.scss";
import data from "../../../data/home";

import React from 'react'
import SecondaryBtn from "../../../uiComponents/buttons/SecondaryBtn";



export function Home() {
  return (
    <div className={styles.home}>
        <div className={styles.header}>
        <h3>
            Мы поможем вам организовать праздники любого уровня в Нижнем Новгороде и Нижегородской области, а также мероприятия городского масштаба в городах: Муроме, Владимире, Москве
        </h3>
        </div>
            {data.map((elem) => <Item data={elem} key={elem.title} />)}

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
