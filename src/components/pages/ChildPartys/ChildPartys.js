import { useState } from "react";
import styles from "./ChildPartys.module.scss";
import { FeedbackModal } from "../../FeedbackModal/FeedbackModal";
import OrderBtn from "../../../uiComponents/buttons/OrderBtn";

export function ChildPartys() {

    const [showFeedback, setShowFeedback] = useState(false);

    return (
        <div className={styles.commonChildParty}>
            <h1 className="common_header">VIP PARTY для детей</h1>
            <p>Хотите устроить по-настоящему грандиозный праздник для своего ребенка? Праздник, о котором мечтает ваш принц или принцесса, но не знаете, с чего начать и к кому обратиться?</p>
            <iframe style={{width: "400px", height: "220px"}} src="https://www.youtube.com/embed/diHOYalADIM?si=0A-ioPJPP8uSCuOz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <p>Проведение масштабных программ под силу не каждой студии, но агентство праздников PARTY STARS ® обладает всем необходимым опытом, чтобы браться за воплощение самых смелых идей. За годы существования мы провели сотни программ класса VIP для детей от 0 до 12 лет, что позволило нам стать настоящими экспертами в области детских праздников с бюджетом свыше 50 000 рублей.</p>
            <h3 className="common_title">Какие PARTY мы проводим для детей</h3>
            <div className="common_list">
                <ul>
                    <li>Звездная STARS ®»</li>
                    <li>Галактическая «Star Wars»</li>
                    <li>Супергеройская «Superhero»</li>
                    <li> принцесс «princesses»</li>
                    <li> супер конструкторов «Lego»</li>
                    <li> настоящих гениев «Genius»</li>
                    <li> реалити шоу «SHOWS»</li>
                </ul>
            </div>
            <div className="common_imageBlock">
                <img src="/assest/images/childPartys/page_977_gallery_image_01.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/childPartys/page_977_gallery_image_02.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/childPartys/page_977_gallery_image_03.jpg" alt="Фото детского праздника" />
            </div>

            <h3 className="common_title">Что входит в VIP вечеринку для детей</h3>
            <p>В каждую детскую VIP вечеринку или день рождения продолжительностью три часа входят:</p>
            <div className="common_list">
                <ul>
                    <li>Индивидуальный сценарий, разработанный на основе пожеланий заказчиков</li>
                    <li>Работа двух профессиональных аниматоров или артистов с опытом работы не менее трёх лет</li>
                    <li>Работа профессионального художника-аквагримёра</li>
                    <li>Красочные костюмы класса Делюкс и разнообразный тематический реквизит</li>
                    <li>Полноценная шоу программа и мастер класс (или две шоу программы на выбор)</li>
                    <li>Персональный менеджер и куратор праздника</li>
                    <li>Фото зона из пресс вола и шаров, детали декора</li>
                    <li>Кэнди бар и тематический торт на 10 персон</li>
                    <li>Профессиональное музыкальное оформление, звукооператор</li>
                    <li>Проектор, экран</li>
                    <li>Пиньята с наполнением</li>
                    <li>Площадка для проведения VIP мероприятия</li>
                </ul>
            </div>
            <div className="common_imageBlock">
                <img src="/assest/images/childPartys/page_977_gallery_image_06.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/childPartys/page_977_gallery_image_07.jpg" alt="Фото детского праздника" />
            </div>

            <h3 className="common_title">Наши клиенты всегда могут дополнить программу, заказав:</h3>
            <div className="common_list">
                <ul>
                    <li>Кэйтеринг</li>
                    <li>Лимузин</li>
                    <li>Работу дополнительных аниматоров</li>
                    <li>Артистов</li>
                    <li>Фокусников</li>
                    <li>Дрессированных животных</li>
                    <li>Фото и видео съемку</li>
                    <li>Бармен Шоу</li>
                    <li>Фейерверк</li>
                    <li>Салют</li>
                </ul>
            </div>
            <div className="common_imageBlock">
                <img src="/assest/images/childPartys/page_977_gallery_image_04.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/childPartys/page_977_gallery_image_05.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/childPartys/page_977_gallery_image_10.jpg" alt="Фото детского праздника" />
            </div>
            <h3 className="common_title">Сколько стоит заказать вечеринку для детей</h3>
            <p>
            Агентство праздников PARTY STARS ® может предложить вам несколько уровней по стоимость организации и проведения дня рождения высокого класса:
            </p>
            <div className="common_list">
                <ul>
                    <li>От 50 000 * до 100 000 руб.</li>
                    <li>От 100 000 до 200 000 руб.</li>
                    <li>От 200 000 до 5 000 000 руб.</li>
                    <li>Свыше 500 000 руб.</li>
                </ul>
            </div>
            <p>* с тортом, без аренды помещения и кэнди бара</p>
            <p>Вы можете оплатить праздник для своего ребенка любым удобным для вас способом:</p>
            <div className="common_list">
                <ul>
                    <li>Наличными</li>
                    <li>По QR коду или карте</li>
                    <li>От 200 000 до 5 000 000 руб.</li>
                    <li>Оформить кредит через нашего партнёра – Сбербанк</li>
                </ul>
            </div>
            <div className={styles.orderBtn}>
                    <OrderBtn action={() => setShowFeedback(true)} />
            </div>
            <FeedbackModal show={showFeedback} onClose={() => setShowFeedback(false)} />
            <p></p>
            <p></p>
        </div>
    )
}