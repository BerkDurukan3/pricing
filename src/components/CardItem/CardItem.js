import './CardItem.css';

function CardItem(props) {

    return (
        <div className="card-list-container">
            <div className={props.cardType === "selected-card" ? `icon check-white` : `${props.cardInfo.icon}`}></div>
            <div className={props.cardInfo.icon === "cross" && props.cardType === "selected-card" ? `card-list disable-text card-list-selected` : props.cardInfo.icon === "check" && props.cardType === "selected-card" ? `card-list card-list-selected` : "card-list"}>{props.cardInfo.text}</div>
        </div>
    );
}

export default CardItem;
