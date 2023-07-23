import styles from "./Promotions.module.scss";

export function Promotions() {

    return (
        <div className={styles.promotions}>
            <div><h1 className="common_header">Акции</h1></div>
            <div className={styles.item}>
                <h3 className="common_title">Провести детский день рождения выгодно</h3>
                <div className="common_about">
                    <p >Что делать, если праздник уже скоро-скоро, бюджет скромный, но хочется провести его с размахом и по-настоящему удивить своего ребенка и его гостей? Обратите внимание на акционные предложения Агентства праздников PARTY STARS ®. Формат комплексного праздника позволит существенно сэкономить, а ребенок будет рад разнообразию программ и развлечений на своем дне рождения.</p>
                </div>
                <div className="common_video">
                <iframe style={{height: "100%", width: "100%"}} src="https://www.youtube.com/embed/FnuC0gc3dh4" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            <div className={styles.item}>
                <h3 className="common_title">Детский праздник "Все включено"</h3>
                <div className="common_about">
                    <p>Что входит в праздник:</p>
                    <div className="common_list">
                        <ul>
                            <li>
                                Аниматор с зажигательной программой на 2 часа с ЛЮБЫМ шоу на выбор (крио мороженое, шоу гигантов пузырей, бумажное шоу, шоу слаймов)
                            </li>
                            <li>
                                В подарок - лайт аквагрим и игрушки из шариков всем детям!
                            </li>
                        </ul>
                    </div>
                    <p>
                    Предложение актуально первым двадцати клиентам до конца осени, при условии оформления заявки в течение 3-х дней.
                    </p>
                    <div className="common_imageBlock">
                        <img src="/assest/images/promotions/page_6_gallery_image_01.jpg" alt="Фото праздника"/>
                        <img src="/assest/images/promotions/page_6_gallery_image_02.jpg" alt="Фото праздника"/>
                        <img src="/assest/images/promotions/page_6_gallery_image_03.jpg" alt="Фото праздника"/>
                    </div>
                </div>
                <h3 className="common_title">Что входит в анимационную программу агентства PARTY STARS ® для детей?</h3>
                <div className="common_list">
                        <ul>
                            <li>
                            Работа профессионального аниматора в красочном костюме
                            </li>
                            <li>
                                Оригинальный сценарий в тематике любимого героя вашего ребенка
                            </li>
                            <li>
                            Игровой реквизит (парашют, тоннель, ткань - сыр, канат, бутафорские торты или грядки, парички для фото-сессии, ленточное лимбо; реквизит выдается в соответствии с выбранной программой и возрастом детей по согласованию сторон)
                            </li>
                            <li>Интерактивные игры и конкурсы</li>
                            <li>Танцевальные флешмобы</li>
                            <li>Музыкальное сопровождение (колонка)</li>
                            <li>Воздушные шарики для игр и подарков детям (игрушки из шариков-сосисок)</li>
                            <li>Аквагрим (лайт)</li>
                            <li>Шоу пузырей (лайт)</li>
                        </ul>
                        <div className="common_imageBlock">
                            <img src="/assest/images/promotions/page_6_gallery_image_04.jpg" alt="Фото праздника"/>
                            <img src="/assest/images/promotions/page_6_gallery_image_05.jpg" alt="Фото праздника"/>
                            <img src="/assest/images/promotions/page_6_gallery_image_06.jpg" alt="Фото праздника"/>
                        </div>
                    </div>
                <h3 className="common_title">Какие сказочные персонажи вы можете выбрать в нашем агентстве?</h3>
                <div className="common_list">
                        <ul>
                            <li>Ггерои мульт сериалов (любые костюмы из нашей коллекции на ваш выбор)</li>
                            <li>Герои компьютерных игр (костюмы на ваш выбор из нашей коллекции)</li>
                            <li>Персонажи из фильмов (разнообразные костюмы на ваш выбор из нашей коллекции)</li>
                            <li>Пираты, ковбои, индейцы, клоуны</li>
                        </ul>
                        <div className="common_imageBlock">
                            <img src="/assest/images/promotions/page_6_gallery_image_07.jpg" alt="Фото праздника"/>
                            <img src="/assest/images/promotions/page_6_gallery_image_08.jpg" alt="Фото праздника"/>
                            <img src="/assest/images/promotions/page_6_gallery_image_09.jpg" alt="Фото праздника"/>
                        </div>
                        <p>Всю информацию об аниматорах для детей вы найдете <a className="common_link">здесь</a>.</p>
                    </div>
            </div>
        </div>
    )
}