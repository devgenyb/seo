import { YandexMap } from "../../YandexMap/YandexMap";

export function Contacts() {

    return (
        <div style={{lineHeight: "1.4"}}>
            <h1 className="common_header">Контакты</h1>
            <p><span className="bold_text">Звоните:</span> <a href="phone:88312911919"><span className="common_link">+7 (831) 291-19-19</span></a>, <a href="phone:88312911919"><span className="common_link">+7 (908) 230-76-57</span></a>, <a href="phone:88312911919"><span className="common_link">+7 (950) 351-05-34</span></a> (Viber, WhatsApp, Telegram)</p>
            <p><span className="bold_text">E-mail: <a href="mailto:superstar.ru@bk.ru"><span className="common_link">superstar.ru@bk.ru</span></a></span></p>
            <p><span className="bold_text">Адрес</span>: г. Нижний Новгород, ул. Карла Маркса, д. 47</p>
            <p>
                <span className="bold_text">Как к нам добраться:</span><br/>
                <span className="bold_text">На автобусе</span>: ост. ФОК Мещерский, второй дом от дороги, в доме Wildberries, 1 подъезд, 2-3 мин. от остановки пешком, ост. Седьмое Небо, конечная, 10-12 мин. пешком<br />
                <span className="bold_text">На метро</span>: ст. метро Стрелка (15 мин. пешком вдоль Мещерского озера)
            </p>
            <p>
                <span className="bold_text">Режим работы:</span><br />
                <span className="bold_text">Отдел продаж (консультации по телефону)</span> - ежедневно с 9:00 до 19:00<br />
                <span className="bold_text">Прокат костюмов и реквизита, гелиевые шары:</span><br />
                В преддверии календарных праздников (Новый год, 23 февраля, 8 марта, 9 мая и т. д.) - ежедневно с 9:00 до 19:00
                В остальные дни - с 9:00 до 19:00 по предварительной договорённости
            </p>
            <h3 className="common_header">Как проехать</h3>
            <div style={{"height": "350px"}}>
                <YandexMap />
            </div>
        </div>
    )
}