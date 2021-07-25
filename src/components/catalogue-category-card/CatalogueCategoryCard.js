import "./catelogue-category-card.css";

const CatelogueCategoryCard = ({ name, children }) => {
    return (
        <div className="catalogue-category-card">
            <div className="cc-header">
                { name }
            </div>
            <div className="cc-items">
                { children }
            </div>
        </div>
    );
}

export default CatelogueCategoryCard;