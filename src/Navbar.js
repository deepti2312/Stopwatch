import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div data-testid="clock-icon">
            <nav  className='navBar'>
                <div className='icon' >
                    <Link to="/" className='clockicon'><i className="fa fa-clock"></i></Link>
                    <Link to="/stopwatch" className='stopwatchicon'><i className="fa fa-stopwatch"></i></Link>
                </div>
            </nav>
        </div>
    )
}
