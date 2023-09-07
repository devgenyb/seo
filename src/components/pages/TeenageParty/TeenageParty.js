import { useState } from "react";
import styles from "./TeenageParty.module.scss";
import OrderBtn from "../../../uiComponents/buttons/OrderBtn";
import { FeedbackModal } from "../../FeedbackModal/FeedbackModal";


export function TeenageParty() {

    const [showFeedback, setShowFeedback] = useState(false);

    return (
        <div className={styles.commonTeenParty}>
            <h1 className="common_header">VIP PARTY для подростков</h1>
            <p>
            Планируете провести день рождения подростка? Организация молодежного мероприятия требует большого внимания. Главное в подготовке такой вечеринки – прислушаться к мнению и пожеланиям именинника, включить его в процесс с самого начала. Важно, конечно, определиться и с надёжным event-партнером, обладающего всем необходимым опытом. Агентство праздников PARTY STARS ® специализируется на организации и проведении торжеств молодежи и подростков и может предложить самые модные и актуальные вечеринки для ребят от 12 до 18 лет.
            </p>
            <iframe style={{width: "400px", height: "220px"}} src="https://www.youtube.com/embed/diHOYalADIM?si=zHN7U_BkUBVLUbgb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            <p>
            В поисках идеального формата праздника для старшеклассников, мы разработали и создали проект «YONG PARTY», основанный на трендах социальных сетей, викторинах и «челенджерах» с использованием экрана и проектора (квиз шоу). Формула успеха программы основана на идеальном соотношении юмора, «движухи» и крутой музыки.
            </p>
            <div className="common_imageBlock">
                <img src="/assest/images/teenParty/page_978_gallery_image_10.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/teenParty/page_978_gallery_image_12.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/teenParty/page_978_gallery_image_13.jpg" alt="Фото детского праздника" />
            </div>
            <h3 className="common_title">Какие «YONG PARTY» мы проводим для подростков:</h3>
            <div className="common_list">
                <ul>
                    <li>Модный кач в клубе или лофте</li>
                    <li>Disco party, брейк данс и Хип Хоп пати</li>
                    <li>Квесты в лабиринте и на природе</li>
                    <li>Покатушки в лимузине и Party Bas</li>
                    <li>Игры Мафия и чемпионаты по мафии</li>
                    <li>Тимбилдинг на природе</li>
                    <li>Выпускные и юбилеи (15, 20 лет)</li>
                </ul>
            </div>
            <div className="common_imageBlock">
                <img src="/assest/images/teenParty/page_978_gallery_image_14.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/teenParty/page_978_gallery_image_07.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/teenParty/page_978_gallery_image_09.jpg" alt="Фото детского праздника" />
            </div>
            <h3 className="common_title">Что входит в программу дня рождения подростка:</h3>
            <p>В любую программу дня рождения именинника от 12 до 18 лет входят:</p>
            <div className="common_list">
                <ul>
                    <li>Оригинальный сценарий</li>
                    <li>Один или несколько ведущих (в зависимости от продолжительности вечера и количества гостей)</li>
                    <li>Музыкальное сопровождение и радиомикрофон (активная колонка или профессиональный ди джей – по выбранному тарифу программы), а также светомузыка, дым</li>
                    <li>Покатушки в лимузине и Party Bas</li>
                    <li>Викторины (с проектором и экраном, если предусмотрено тарифом)</li>
                    <li>Много активностей, интерактивных конкурсов, юмора и танцев</li>
                </ul>
            </div>
            <div className="common_imageBlock">
                <img src="/assest/images/teenParty/page_978_gallery_image_02.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/teenParty/page_978_gallery_image_03.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/teenParty/page_978_gallery_image_04.jpg" alt="Фото детского праздника" />
            </div>
            <h3 className="common_title">Что можно заказать с в программой дня подростков:</h3>
            <div className="common_list">
                <ul>
                    <li>Подбор площадки</li>
                    <li>Кейтеринг, кэнди бар</li>
                    <li>Оформление фото зоны</li>
                    <li>MakeUp имениннице и гостям, а также создание образа именинника (именинницы) под ключ</li>
                    <li>Музыкальные и артистические номера на велком</li>
                    <li>MakeUp</li>
                </ul>
            </div>
            <div className="common_imageBlock">
                <img src="/assest/images/teenParty/page_978_gallery_image_05.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/teenParty/page_978_gallery_image_06.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/teenParty/page_978_gallery_image_08.jpg" alt="Фото детского праздника" />
            </div>
            <h3 className="common_title">Сколько стоит заказать вечеринку для старшеклассников?</h3>
            <p>
            Стоимость подростковой вечеринки рассчитывается индивидуально, ведь в нее может войти не только развлекательная программа. Мы готовы организовать ваше торжество «под ключ»: от подбора помещения, организации питания и трансфера гостей до украшения зала, проведения самой вечеринки, шоу программы и фейерверка. Конечно, надо понимать, что вечеринка для старшеклассников совсем не бюджетное мероприятие. Но для вашего удобства, у нас есть система рассрочки и кредитов от партнерских банков. Стоит ли экономить? Возможно, именно этот день рождения, останется в памяти вашего ребёнка на всю его жизнь!
            </p>
            <div className="common_imageBlock">
                <img src="/assest/images/teenParty/page_978_gallery_image_11.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/teenParty/page_978_gallery_image_01.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/teenParty/page_978_gallery_image_15.jpg" alt="Фото детского праздника" />
            </div>
            <p>Вы можете оплатить праздник любым удобным для вас способом:</p>
            <div className="common_list">
                <ul>
                    <li>Наличными</li>
                    <li>По QR коду или карте</li>
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