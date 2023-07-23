import { useRef, useState } from "react";
import LargeInput from "../../uiComponents/LargeInput";
import SecondaryInput from "../../uiComponents/secondary/SecondaryInput";
import styles from "./FeedbackFrom.module.scss";
import { SecondaryTextArea } from "../../uiComponents/secondary/SecondaryTextArea/SeccondaryTextArea";
import useMathCaptha from "../../hooks/useMathCapcha";
import { Value } from "sass";
import PrimaryBtn from "../../uiComponents/buttons/PrimaryBtn";
import { rewievs } from "../../data/rewiews";
import { sliceText } from "../../utills/functions";

console.log(rewievs);

export function FeedbackForm() {

    const [name, setName] = useState("");
    const [mail, setMail] = useState("");

    const [reviewes, setReviewes] = useState(rewievs);
    
    const [message, setMessage] = useState("");
    const [isValid, valCaptha, setValCaptcha, values] = useMathCaptha();
    const [formValidationState, setFormValidationState] = useState(false);

    const [capchaStyle, setCaptchaStyle] = useState({});

    const items_block = useRef(null);

    function formHandler(e) {
        e.preventDefault();
        if(!isValid()) {
            setFormValidationState(true);
            setValCaptcha("Неверный ответ");
            setCaptchaStyle({"color": "red"});
            return;
        }

        const now = new Date();

        const date = `${now.getDate()}.${now.getMonth()}.${now.getFullYear()}`;

        const data = {
            name,
            date,
            text: message,
        };

        setReviewes([...reviewes, data]);
        if (items_block.current) {
            const scrto = items_block.current.lastElementChild;
            scrto?.scrollIntoView({ behavior: 'smooth' });
        };

        setName(""); setMail(""); setMessage(""); setFormValidationState(false); setCaptchaStyle({}); setValCaptcha("");
    }


    function rewiev(item) {
        return (
            <div key={item.name} className={styles.rewievBlock}>
                <div className={styles.avatar}>
                    <img src="/assest/images/icons/girl_avatar.png" />
                </div>
                <div className={styles.itemContent}>
                    <div className={styles.itemHeader}>
                      {item.name}, {item.date}
                    </div>
                    <div className={styles.itemText}>
                        {item.text.length < 250 ? item.text : <div>{sliceText(item.text, 250)}... <a className={styles.readMore}>Читать далее</a></div>}
                    </div>
                </div>
            </div>        
            )
    }

    return (
        <div className={styles.feedbackForm}>
            <div><h3 className={styles.header}>Оставить свой отзыв о работе агентства «PARTY STARS ®»</h3></div>
            <form className={styles.form} onSubmit={formHandler}>
            <div className={styles.inputs}>
                <SecondaryInput label={"Ваше имя *"} value={name} setValue={(val) => setName(val)} id={"feedback-name-0"} options={{required: true}} />
                <SecondaryInput label={"Электронная почта *"} value={mail} setValue={(val) => setMail(val)} id={"feedback-phone-0"} options={{required: true, type: "email"}} />
            </div>
            <div className={styles.area}>
                <SecondaryTextArea 
                    setValue={(val) => setMessage(val)} 
                    value={message}
                    id={"feedback-area-0"}
                    label={"Текст сообщения *"}
                    required
                    type="text"
                    maxLength={400}
                    minLength={100}
                />
            </div>
            <div className={styles.captcha}>
                <SecondaryInput 
                    setValue={(val) => setValCaptcha(val)}
                    value={valCaptha}
                    id={"feedback-capcha-0"}
                    label={"Введите правильный ответ:"}
                    placeholder={`${values.first_value } + ${values.second_value} = `}
                    style={capchaStyle}
                    options={{onFocus: function(e) {
                         if(!isValid() && formValidationState) {
                            setValCaptcha("");
                            setCaptchaStyle({});
                            setFormValidationState(false);
                         }
                    }}}
                />
            </div>
            <PrimaryBtn size={"middle"}>Отправить</PrimaryBtn>
            </form>

            <h3 className={[styles.header, styles.subheader].join(' ')}>Отзывы</h3>
            <div className={styles.review_items} ref={items_block}>{reviewes.map( item => rewiev(item))}</div>
            Отзывов: {reviewes.length}
        </div>
    )
}