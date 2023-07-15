import styles from "./HomeSlider.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import SwiperCore from "swiper";
import 'swiper/scss';
import sliderImageTwo from "../../images/homeSlider/main-page_slider_04.jpg";
import sliderImageOne from "../../images/homeSlider/main-page_slider_05.jpg";
import prevBtn from "../../images/icons/main-page_slider_controls_backward.png";
import nextBtn from "../../images/icons/main-page_slider_controls_forward.png";
import PrimaryBtn from "../../uiComponents/buttons/PrimaryBtn";

// SwiperCore.use([Navigation]);

export function HomeSlider() {

    
    return (
        <div className={styles.slider}>
            <Swiper
                modules={[Autoplay, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                
                navigation={{
                    prevEl: ".homeSliderPrev",
                    nextEl: ".homeSliderNext",
                }}

                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
            >

                <SwiperSlide>
                    <div className={styles.imageWrapper}>
                    <div className={styles.slideContent}>
                            <div className={styles.slideHeader}>
                            У НАС ЛУЧШИЕ <br />
                            ДЕТСКИЕ <br />
                            ПРАЗДНИКИ
                            </div>
                            <div className={styles.slideSubTitle}>
                            Ваши дети будут счастливы!
                            </div>
                            <div className={styles.slideBtn}>
                                <PrimaryBtn size={'middle'}><a className={styles.slideBtnText}>Подробнее</a></PrimaryBtn>
                            </div>
                        </div>
                        <img src={sliderImageOne} alt="фото счастливых детей с праздника" className={styles.sliderImg}/>
                        <div className={styles.imageFilter}>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={styles.imageWrapper}>
                        <div className={styles.slideContent}>
                            <h2 className={styles.slideHeader}>
                            ОТМЕЧАЕМ <br />
                            НОВЫЙ ГОД <br />
                            2022
                            </h2>
                            <div className={styles.slideSubTitle}>
                            Как устроить праздник <br />
                            себе и детям без лишних хлопот
                            </div>
                            <div className={styles.slideBtn}>
                                <PrimaryBtn size={'middle'}><a className={styles.slideBtnText}>Подробнее</a></PrimaryBtn>
                            </div>
                        </div>
                        <img src={sliderImageTwo} alt="фото счастливых детей с праздника" className={styles.sliderImg}/>
                            <div className={styles.imageFilter}>
                            </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className={['homeSliderPrev', styles.sliderPrevBtn, styles.sliderBtn].join(' ')}>
                    <img src={prevBtn} alt="предыдущий слайд" />
            </div>
            <div className={['homeSliderNext', styles.sliderNextBtn, styles.sliderBtn].join(' ')}>
                    <img src={nextBtn} alt="следующий слайд" />
            </div>
        </div>
    )
}