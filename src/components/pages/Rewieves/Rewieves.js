import styles from "./Rewieves.module.scss";
import { youtubeRewieves } from "../../../data/rewiews";
import { FeedbackForm } from "../../FeedbackForm/FeedbackForm";
import { sliceText } from "../../../utills/functions";


export function Rewieves() {

    return (
        <div>
            <div>
                <h1 className="common_header">Отзывы</h1>
            </div>
            <div className="common_about">
                    <p>Вот уже более пяти лет мы бережно храним великолепные отзывы, которые оставляют нам наши благодарные клиенты! Спасибо и Вам, мы рады с вами сотрудничать, ваши пожелания нас очень вдохновляют!</p>
            </div>
            <h3 className="common_title">Благодарственные письма</h3>
                {Array.from(Array(10).keys()).map(item => <div key={item} className={styles.letter}><img alt="благодарственное письмо" src={`assest/images/rewieves/page_9_gallery_image_${item+1}.jpg`} /></div>)}
            <h3 className="common_title">Нам присылают даже видеоотзывы!</h3>
            <div className={styles.videos}>
                {youtubeRewieves.map(item => 
                    <div className={styles.video} key={item}>
                        <iframe style={{height: "100%", width: "100%"}} src={`https://www.youtube.com/embed/${item}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                )}
            </div>
            <div className={styles.feedback}>
                <FeedbackForm />
            </div>
        </div>
    )
}