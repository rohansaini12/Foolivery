import "./navbar.css"
import logo from '../../../assets/logo.png'
import { Link } from "react-router-dom"
const Navbar =()=>{
    return(
            <>
             <header className="flex">
                <nav className="navbar flex">
                    <div className="logo">
                        <img src={logo} alt="" className="flex"/>
                    </div>
                    <div className="navmenu">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/About">About</Link></li>
                            <li><Link to="/Contact">Contact</Link></li>
                            <li><Link to="/Signup">SingUp</Link></li>
                        </ul>
                    </div>
                </nav>
                </header>
            </>
    )
}
export default Navbar;