import { Navbar } from 'react-bootstrap';
import logo from '../../logo.svg';
import "./nav-bar.css";

const NavBar = () => {
    return (
    <Navbar className="nav-bar" bg="dark" sticky="top">
        <div className="nav-logo-container">
            <img className="nav-logo" src={ logo } alt="Logo"/>
        </div>
        <div className="nav-logo-txt">
            Aorder NavBar
        </div>
    </Navbar>
    );
}

export default NavBar;