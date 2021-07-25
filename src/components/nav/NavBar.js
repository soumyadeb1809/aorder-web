import { Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import "./nav-bar.css";

const NavBar = () => {
    return (
    <Navbar className="nav-bar" bg="light" sticky="top">
        <div className="nav-logo-container">
            <img className="nav-logo" src={ logo } alt="Logo"/>
        </div>
        <div className="nav-logo-txt">
            
        </div>
    </Navbar>
    );
}

export default NavBar;