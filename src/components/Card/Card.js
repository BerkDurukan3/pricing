import './Card.css';
import CardTitle from "../CardTitle/CardTitle";
import Text from "../Text/Text";
import CardItem from "../CardItem/CardItem";
import Button from "../Button/Button";
import CardPrice from "../CardPrice/CardPrice";

function Card(props) {
    return (
        <div className={props.cardType !== undefined ? `card ${props.cardType}` : "card"}>
            <CardTitle bestValue={props.bestValue} type={props.cardType} icon={props.titleIcon}
                       title={props.titleText}></CardTitle>
            <Text cardType={props.cardType} type={"subtitle"} text={props.subtitleText}></Text>
            <CardPrice cardType={props.cardType} price={props.price}></CardPrice>
            {props.cardList.map((data) => {
                return (<CardItem cardType={props.cardType} key={data.id} cardInfo={data}></CardItem>)
            })}
            <Button type={props.buttonType} text={props.buttonText}></Button>
        </div>
    );
}

export default Card;
