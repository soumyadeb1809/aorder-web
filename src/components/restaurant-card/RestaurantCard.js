import "./restaurant-card.css";
import { Card } from "react-bootstrap";

const RestaurantCard = ({ img, name, category }) => {

    return (
        <Card className="restaurant-card">
            <Card.Body className="rc-body">
                <div className="rc-restaurant-img-c">
                    <img className="rc-restaurant-img" src={ img } />
                </div>
                <Card.Title className="rc-restaurant-name">
                    { name }
                </Card.Title>
                <Card.Text className="rc-restaurant-category">
                    { category }
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default RestaurantCard;