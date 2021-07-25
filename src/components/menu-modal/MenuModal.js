import "./menu-modal.css";

import { Modal } from "react-bootstrap";
import MenuModalItem from "./MenuModalItem";
import { MdClose } from "react-icons/md";

const MenuModal = ({ show, closeHandler }) => {
    return (
        <Modal 
            className="menu-modal modal-10w" 
            show={ show } 
            dialogClassName="modal-10w"
            onHide={ closeHandler } 
            centered>
            <Modal.Header className="mm-header">
                <Modal.Title className="mm-title">
                    Menu
                </Modal.Title>
                <button className="mm-close-btn-c" onClick={ closeHandler }>
                    <MdClose className="mm-close-btn" />
                </button>
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
                <MenuModalItem 
                    itemName="Tandoori Items"
                />
                <MenuModalItem 
                    itemName="Cold drinks"
                />
                <MenuModalItem 
                    itemName="Salad"
                />
                <MenuModalItem 
                    itemName="Rolls"
                />
            </Modal.Body>
        </Modal>
    );
}

export default MenuModal;