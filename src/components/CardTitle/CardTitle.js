import './CardTitle.css';

function CardTitle(props) {
    return (
        <div className="card-title-container">
            <div className={props.icon !== undefined ? `icon ${props.icon}` : ""}></div>
            <div className={props.type === "selected-card" ? `card-title text-selected` : "card-title"}>{props.title}</div>
            <div className={props.bestValue === true ? "best-value centered" : "hide"}>Best Value</div>
        </div>
    );
}

export default CardTitle;
