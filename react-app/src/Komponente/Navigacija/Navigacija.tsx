import {Link} from 'react-router-dom';
import './Navigacija.css';

export default function Navigacija() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/">Domov</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/seznamEkip">Seznam ekip</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}