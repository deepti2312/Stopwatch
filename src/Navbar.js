import './Navbar.css'
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className='navBar'>
                <div className='icon' >
                    <Link to="/" className='clockicon'><i class="fa fa-clock"></i></Link>
                    <Link to="/stopwatch" className='stopwatchicon'><i class="fa fa-stopwatch"></i></Link>
                </div>
            </nav>
        </div>
    )
}
