import './Button.css';

function Button(props) {
    return (
        <div className={props.type !== undefined ? `button-default centered ${props.type}` : "button-default centered"}>{props.text}</div>
    );
}

export default Button;
