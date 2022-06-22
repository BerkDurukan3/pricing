import './Text.css';

function Text(props) {
    return (
        <div className={props.type !== undefined && props.cardType === "selected-card" ? `${props.type} text-selected` : `${props.type}`}>{props.text}</div>
    );
}

export default Text;
