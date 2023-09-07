import { useState } from "react";
import styles from "./OldParty.module.scss";
import OrderBtn from "../../../uiComponents/buttons/OrderBtn";
import { FeedbackModal } from "../../FeedbackModal/FeedbackModal";


export function OldParty() {

    const [showFeedback, setShowFeedback] = useState(false);

    return (
        <div className={styles.commonOldParty}>
            <h1 className="common_header">Корпоратив</h1>
            <p>
                Агентство праздников PARTY STARS ® подарит Вам самые яркие незабываемые впечатления от Вашего Торжества, Юбилея, корпоратива компании или частного праздника. Мы предложим вам множество вариантов сценариев тематических корпоративов и вечеринок, а также готовы разработать индивидуальный сценарий вашего мероприятия и сделать его действительно неповторимым. Работайте с профессионалами!
            </p>
            <iframe style={{width: "400px", height: "220px"}} src="https://www.youtube.com/embed/diHOYalADIM?si=T5QS5rhnYQROlbXj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe style={{width: "400px", height: "220px"}} src="https://www.youtube.com/embed/b6JiP-PlopI?si=AQ_p2iPTMp-W7xAO" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe style={{width: "400px", height: "220px"}} src="https://www.youtube.com/embed/I_5hkvtWN8g?si=A1d4ob3EYH1rHsA1" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe style={{width: "400px", height: "220px"}} src="https://www.youtube.com/embed/bau7AWWQ7wQ?si=65cbWPmGyGTGG1-N" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h3 className="common_title">Ищете лучшего ведущего для вашего праздничного мероприятия?</h3>
            <p>
                В Агентстве праздников PARTY STARS ® работают только с самые лучшие ведущие Нижнего Новгорода. Наши ведущие - известные нижегородские шоу-мэны (Илья Березин, Иван Гронский, Юрий Григорьев, Сергей Попов...) А также вы всегда найдете у нас молодых талантливых ведущих, уже зарекомендовавших себя в этом качестве. Вы можете быть уверены, что у нас найдется самое оптимальное предложение для вашего праздничного события и самое лучшее соотношение цены и качества.
            </p>
            <div className="common_imageBlock">
                <img src="/assest/images/oldParty/page_22_gallery_image_01.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/oldParty/page_22_gallery_image_03.jpg" alt="Фото детского праздника" />
            </div>
            <h3 className="common_title">Организация корпоративов под ключ</h3>
            <p>
            Для каждого события мы пишем эксклюзивный сценарий, подбираем оригинальный реквизит и костюмы и приглашаем самых талантливых ведущих и профессиональных музыкантов и артистов. Наше агентство располагает обширной базой исполнителей самых разнообразных жанров для организации корпоратива, поэтому Ваш праздник будет наполнен самыми зрелищными эстрадными, шоу и цирковыми номерами.
            </p>
            <h3 className="common_title">Лучшие артисты для вашего корпоратива</h3>
            <p>
            Самые яркие и талантливые исполнители, танцоры , певцы и музыканты Нижнего Новгорода украсят своими выступлениями Ваше торжество и подарят массу положительных эмоций гостям праздника!
            </p>
            <iframe style={{width: "400px", height: "220px"}} src="https://www.youtube.com/embed/ntubdEkgWsQ?si=xrKzDCrJQNe8XiLm" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <iframe style={{width: "400px", height: "220px"}} src="https://www.youtube.com/embed/Q5gwfODV6-8?si=pgp28EedcbUrsfo8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h3 className="common_title">Лучшие шоу программы на ваш корпоратив</h3>
            <p>
            Самые эффектные яркие программы для своего торжества Вы всегда найдете в Агентстве праздников PARTY STARS ®. Наши артисты обладают неоценимым опытом, умениями и профессионализмом и всегда готовы дарить свое мастерство гостям вашего праздника. Наш главный принцип - качество и оперативность, поэтому вы можете быть уверены, что в самые короткие сроки мы сможем организовать корпоратив или юбилей вашей кампании на высочайшем уровне! Для вас: файер шоу, светодиодное шоу, научное шоу, разнообразные танцевальные, музыкальные и вокальные шоу программы, африканский Дед мороз и Снегурочка, серпантинное шоу, фейерверки и салюты. По вашему желанию мы пригласим Звезду эстрады на торжество!
            </p>
            <div className="common_imageBlock">
                <img src="/assest/images/oldParty/page_22_gallery_image_02.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/oldParty/page_22_gallery_image_04.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/oldParty/page_22_gallery_image_05.jpg" alt="Фото детского праздника" />
            </div>
            <h3 className="common_title">Цыганские коллективы на ваше торжество</h3>
            <p>
            Какой праздник, Свадьба или корпоратив обойдется без удалого цыганского веселья? Агентство праздников PARTY STARS ® предложит Вам лучшие цыганские коллективы, цыганские танцевально-музыкальные ансамбли.
            </p>
            <div className="common_imageBlock">
                <img src="/assest/images/oldParty/page_22_gallery_image_06.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/oldParty/page_22_gallery_image_07.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/oldParty/page_22_gallery_image_08.jpg" alt="Фото детского праздника" />
            </div>
            <h3 className="common_title">Фото и видео операторы на корпоратив</h3>
            <p>
            Выездные фотосессии для корпоративной съемки. Услуги костюмерной (более 50 образов), профессиональных фотографов и выездная фотостудия - от 15 000 руб.! Для Вашей незабываемой фотосессии мы готовы предложить профессиональных стилистов, парикмахеров и визажистов, выездную костюмерную для корпоративных и частных фотосессий как в Нижнем Новгороде, так и с выездом в Нижегородскую область.
            </p>
            <div className="common_imageBlock">
                <img src="/assest/images/oldParty/page_22_gallery_image_10.jpg" alt="Фото детского праздника" />
                <img src="/assest/images/oldParty/page_22_gallery_image_11.jpg" alt="Фото детского праздника" />
            </div>
            <p>
            Сделать оригинальный подарок и на славу удивить своих гостей можно, пригласив наших ростовых кукол на ваш корпоратив или торжество. Очаровательные ростовые куклы: Сердце, Мишка, танцующий Слоник Долли, Пингвин Яша или Микки Маус придут с букетом из шаров и устроят на вашей вечеринке настоящий шум, гам, та-та-рам с заводной музыкой, уморительными конкурсами и настоящим салютом из шаров!
            </p>
            <div className={styles.orderBtn}>
                    <OrderBtn action={() => setShowFeedback(true)} />
            </div>
            <FeedbackModal show={showFeedback} onClose={() => setShowFeedback(false)} />
            <p></p>
            <p></p>
        </div>
    )
}