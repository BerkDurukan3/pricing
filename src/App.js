import './App.css';
import Text from "./components/Text/Text";
import Card from "./components/Card/Card";

function App() {
    const firstCard = [
        {
            id: "1",
            icon: "check",
            text: "2 links",
        },
        {
            id: "2",
            icon: "check",
            text: "Own analytics platform",
        },
        {
            id: "3",
            icon: "cross",
            text: "Chat support",
        },
        {
            id: "4",
            icon: "cross",
            text: "Mobile application",
        },
        {
            id: "5",
            icon: "cross",
            text: "Unlimited users",
        }
    ];
    const secondCard = [
        {
            id: "1",
            icon: "check",
            text: "2 links",
        },
        {
            id: "2",
            icon: "check",
            text: "Own analytics platform",
        },
        {
            id: "3",
            icon: "check",
            text: "Chat support",
        },
        {
            id: "4",
            icon: "cross",
            text: "Mobile application",
        },
        {
            id: "5",
            icon: "cross",
            text: "Unlimited users",
        }
    ];
    const thirdCard = [
        {
            id: "1",
            icon: "check",
            text: "2 links",
        },
        {
            id: "2",
            icon: "check",
            text: "Own analytics platform",
        },
        {
            id: "3",
            icon: "check",
            text: "Chat support",
        },
        {
            id: "4",
            icon: "check",
            text: "Mobile application",
        },
        {
            id: "5",
            icon: "check",
            text: "Unlimited users",
        },
        {
            id: "6",
            icon: "check",
            text: "Customize Panel",
        }
    ];
    return (
        <div className="main-container centered">
            <div className="texts-container centered">
                <Text type={"title"} text={"Simple, transparent pricing"}></Text>
                <Text type={"subtitle"} text={"No contracts. No suprise fees."}></Text>
            </div>
            <div className="card-container">
                <Card titleIcon={"free"} titleText={"Free"}
                      subtitleText={"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do"} price={"0"}
                      buttonText={"Get Started"} buttonType={""} cardList={firstCard}>
                </Card>
                <Card bestValue={true} titleIcon={"pro"} titleText={"Pro"}
                      subtitleText={"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris"} price={"18"}
                      buttonText={"Get Started"} buttonType={""} cardList={secondCard}>
                </Card>
                <Card cardType={"selected-card"} titleIcon={"enterprise"} titleText={"Enterprise"}
                      subtitleText={"Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor"} price={"20"}
                      buttonText={"Get Started"} buttonType={"button-selected"} cardList={thirdCard}>
                </Card>

            </div>
        </div>
    );
}

export default App;
