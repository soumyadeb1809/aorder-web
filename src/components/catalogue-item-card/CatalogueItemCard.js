import { Card } from "react-bootstrap";
import "./catalogue-item-card.css";
import { BiFoodTag } from "react-icons/bi";

const CatalogueItemCard = ({ name, price, description, tag="veg", img }) => {
    return (
        <Card className="catalogue-item-card">
            <Card.Body className="cic-body">
                <div className="cic-item-info">
                    <BiFoodTag className={ `cic-food-tag food-tag-${tag}` }/>
                    <Card.Title className="cic-name">
                        { name }
                    </Card.Title>
                    <Card.Text className="cic-price">
                        { price }
                    </Card.Text>
                    <Card.Text className="cic-description">
                        { description }
                    </Card.Text>
                </div>
                {
                    img ? (
                    <div className="cic-item-img-c">
                        <img className="cic-item-img" src={ img } alt = { name }/>
                    </div>
                    ) :
                    ""
                }
                
            </Card.Body>
            
        </Card>
    );
}

export default CatalogueItemCard;