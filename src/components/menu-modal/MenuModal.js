import "./menu-modal.css";

import { Modal } from "react-bootstrap";
import MenuModalItem from "./MenuModalItem";

const MenuModal = () => {
    return (
        <Modal className="menu-modal modal-10w" show="true" dialogClassName="modal-10w" centered>
            <Modal.Header className="mm-header" closeButton>
                <Modal.Title className="mm-title">
                    Menu
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="mm-body">
                <MenuModalItem 
                    itemName="Recommended"
                />
                <MenuModalItem 
                    itemName="Starters"
                />
                <MenuModalItem 
                    itemName="Chinese Starters"
                />
                <MenuModalItem 
                    itemName="Main Course"
                />
                <MenuModalItem 
                    itemName="Breads"
                />
                <MenuModalItem 
                    itemName="Biryani & Rice"
                />
                <MenuModalItem 
                    itemName="Combos"
                />
                <MenuModalItem 
                    itemName="Dessert"
                />
            </Modal.Body>
        </Modal>
    );
}

export default MenuModal;