import { NavLink } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {

    return (
        <div className="nav-container">
            <div className="nav">
                <div className="logo">
                    <span>Logo</span>
                </div>
                <div className="menu">
                <ul>
                    <li>
                        <NavLink to="/registration" className="link">
                            <span>Registros</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/certified" className="link">
                            <span>Certificados</span>
                        </NavLink>
                    </li>
     

                </ul>
                </div>
            </div>
        </div>
    );

}