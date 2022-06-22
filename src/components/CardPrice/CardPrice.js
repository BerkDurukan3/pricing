import './CardPrice.css';

function CardPrice(props) {
    return (
        <div>
            <div className={props.cardType === "selected-card" ? "card-price hide-price" : "card-price show-price"}>${props.price}<span className="card-month">/ month</span></div>
            <div className={props.cardType === "selected-card" ? "card-price price-selected show-price" : "hide-price"}>Let's Talk</div>
        </div>
    );
}

export default CardPrice;
