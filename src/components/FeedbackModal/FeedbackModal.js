import { useEffect, useRef, useState } from "react";
import styles from "./FeedbackModal.module.scss";
import { createPortal } from 'react-dom';
import LargeInput from "../../uiComponents/LargeInput";
import { PrimaryBtn } from "../../uiComponents/buttons/PrimaryBtn/PrimaryBtn";


const ym = window.ym;

export function FeedbackModal({show, onClose}) {

    const [showModal, setShowModal] = useState(false);

    const scroll = useRef(window.scrollY);
    const contentBlock = useRef(null);

    useEffect(() => {
        if (show) {
            setShowModal(true);
            scroll.current = window.scrollY;
            document.body.style.paddingRight = window.innerWidth - document.body.offsetWidth + 'px';
            document.body.classList.add('disable-scroll');
            document.body.style.top = -scroll.current + 'px';
        } else {
            setShowModal(false);
        }
    }, [show])

    const close = () => {
        setShowModal(false);
        document.body.style.paddingRight = '0px';
        document.body.classList.remove('disable-scroll');
        document.body.style.top = 'auto';
        window.scroll({top: scroll.current, left: 0})
        setTimeout(() => {
            onClose();
        }, 300)
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(contentBlock.current && !contentBlock.current.contains(event.target)) {
                console.log('click');
                close()
            }
        }

        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
    }, [])

    useEffect(() => {
        function escHandle(e) {
            if (e.key === "Escape" && showModal) {
                close();
            }
        }

        document.addEventListener('keydown', escHandle);

        return () => {
            document.removeEventListener('keydown', escHandle);
        }
    }, [showModal])

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [submitForm, setSubmitForm] = useState(false);

    const submitHandle = (e) => {
        e.preventDefault();
        setSubmitForm(true);
        setName("");
        setPhone("");
        setTimeout(() => {
            close();
            setTimeout(() => {
                setSubmitForm(false);
            }, 300);
        }, 3000)
    }

    return (
            <>
            {show && createPortal(
                <div className={[styles.modal, showModal && styles.showModal].join(' ')}>
                    <div className={styles.overlay}>
                        <div className={styles.content} ref={contentBlock}>
                            <div className={styles.closer} onClick={close}>✖</div>
                            <div className={styles.modalHeader}>Оставить заявку</div>
                            <div className={styles.modalBody}>
                            {!submitForm && <form onSubmit={submitHandle}>
                                <LargeInput placeholder={"Имя *"} value={name} setValue={(val) => setName(val)} options={{required: true}}/>
                                <LargeInput placeholder={"Номер телефона *"} value={phone} setValue={(val) => setPhone(val)} options={{required: true}}/>
                                <div className={styles.description}>* Все данные надежно защищены и не передаются третьим лицам</div>
                                <div className={styles.submitBtn}><PrimaryBtn action={() => ym(94924196,'reachGoal','order')} size={'middle'} options={{type: 'submit'}}>Заказать</PrimaryBtn></div>
                                </form>}
                            {submitForm &&
                                <div className={styles.submitText}>Благодарим за ваше обращение. <br /> Менеджер свяжется с Вами в ближайшее время</div>
                            }
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
            </>
        )
}