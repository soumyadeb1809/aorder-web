import "./menu-fab.css";

import { Button } from "react-bootstrap";
import { MdRestaurantMenu } from "react-icons/md";

const MenuFAB = ({ onClick }) => {
    return (
        <Button className="menu-fab" onClick={ onClick }>
            <MdRestaurantMenu className="mf-icon" />
            <div className="mf-txt">
                MENU
            </div>
        </Button>
    );
}

export default MenuFAB;