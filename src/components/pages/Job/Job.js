import styles from "./Job.module.scss";

export function Job() {

    return (
        <div>
            <h1 className="common_header">Вакансии</h1>
            <p>
            Вы амбициозны, энергичны, полны идей и желания работать в компании ведущего event-агентства Нижнего Новгорода и Нижегородской области? Тогда присылай свое резюме на нашу электронную почту. Возможно, именно ты станешь частью звездной команды PARTY STARS ®!
            </p>
            <p>Открыты вакансии:</p>
            <div className="common_list">
                <ul>
                    <li>Менеджера event-мероприятий;</li>
                    <li>PR-менеджера, СММ менеджера;</li>
                    <li>BLT- менеджера;</li>
                    <li>Промоутера;</li>
                    <li>Рекламного агента;</li>
                    <li>Регионального представителя;</li>
                    <li>Региональных партнеров.</li>
                </ul>
            </div>
            <p>
            Резюме направлять по адресу: <span className="common_link"><a style={{textDecoration: "none", color: "inherit"}} href="mailto:superstar.ru@bk.ru">superstar.ru@bk.ru</a></span>
            </p>
        </div>
    )
}