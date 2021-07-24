import "./menu-modal-item.css";

const MenuModalItem = ({ itemName }) => {
    return (
        <div className="menu-modal-item">
            { itemName }
        </div>
    );
}

export default MenuModalItem;