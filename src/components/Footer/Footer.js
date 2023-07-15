import styles from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={styles.footer}>
        <div className='container'>
            <div className={styles.wrapper}>
                <div className={styles.social}>
                    <a>
                        <div className={styles.socialIcon}>     
                                <img src='/assest/images/icons/footer_instagram-icon.png' alt='social icon' />
                        </div>
                    </a>
                    <a>
                        <div className={styles.socialIcon}>     
                                <img src='/assest/images/icons/footer_vk-icon.png' alt='social icon' />
                        </div>
                    </a>
                    <a>
                        <div className={styles.socialIcon}>     
                                <img src='/assest/images/icons/footer_youtube-icon.png' alt='social icon' />
                        </div>
                    </a>
                    <a>
                        <div className={styles.socialIcon}>     
                                <img src='/assest/images/icons/footer_facebook-icon.png' alt='social icon' />
                        </div>
                    </a>
                </div>
                <div className={styles.header}>
                    Агентство праздников PARTY STARS ®
                </div>
                <div className={styles.addres}>
                Адрес: г. Нижний Новгород, ул. Карла Маркса, д. 47
                </div>
                <div className={styles.way}>
                Как к нам добраться:<br />
На автобусе: ост. ФОК Мещерский, второй дом от дороги, в доме Wildberries, 1 подъезд, 2-3 мин. от остановки пешком, ост. Седьмое Небо, конечная, 10-12 мин. пешком<br />
На метро: ст. метро Стрелка (15 мин. пешком вдоль Мещерского озера)
                </div>
                <div className={styles.workingMode}>
                Режим работы:<br />
Отдел продаж (консультации по телефону) - ежедневно с 9:00 до 19:00<br />
Прокат костюмов и реквизита, гелиевые шары: в преддверии календарных праздников (Новый год, 23 февраля, 8 марта, 9 мая и т. д.) - ежедневно с 9:00 до 19:00, в остальные дни - с 9:00 до 19:00 по предварительной договорённости
                </div>
                <div className={styles.contacts}>
                    <span><img src='/assest/images/icons/footer_phone-icon.png' alt='contact icon'></img><a href='tel:+78312911919'>+7 (831) 291-19-19</a>, <a href='tel:+79082307657'>+7 (908) 230-76-57</a>, <a href='tel:89503510534'>+7 (950) 351-05-34</a></span><br />
                    <img src='/assest/images/icons/footer_mail-icon.png' alt='mail icon'/><a href='mailto:superstar.ru@bk.ru'>superstar.ru@bk.ru</a>
                </div>
                <div className={styles.info}>
                Информация на сайте не является публичной офертой и носит ознакомительный характер.
                </div>
            </div>
        </div>
    </footer>
  )
}
