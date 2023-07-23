import { useState } from 'react';
import LargeInput from '../../uiComponents/LargeInput';
import styles from './Feedback.module.scss';
import PrimaryBtn from '../../uiComponents/buttons/PrimaryBtn';

const [capVal1, capVal2] = [getRandomInt(0, 100), getRandomInt(0, 100)];
const captRes = capVal1 + capVal2;

export function Feedback() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [captcha, setCaptcha] = useState(0);

    function formHandler(e) {
        e.preventDefault();
    }

    return (
        <div className={styles.feedback}>
            <div className='container'>
                <h3 className={styles.title}>
                    Отправте бесплатную<br />
                    заявку на расчет стоимости
                </h3>
                <p className={styles.subtitle}>Это быстро и удобно</p>
                <form onSubmit={formHandler}>
                    <LargeInput placeholder={"Имя *"} setValue={(val) => setName(val)} options={{"requared": "true"}} />
                    <LargeInput placeholder={"Телефон *"} setValue={(val) => setPhone(val)} options={{"requared": "true"}} />
                    <LargeInput placeholder={`${capVal1} + ${capVal2} =`} setValue={(val) => setPhone(val)} options={{"requared": "true"}} />
                    <p className={styles.desc}>* Все данные надежно защищены и не передаются третьим лицам</p>
                    <PrimaryBtn size={"middle"}>Отправить</PrimaryBtn>
                </form>
            </div>
        </div>
    )
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}