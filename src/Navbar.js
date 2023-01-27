import { Link } from "react-router-dom";
const Navbar = () => {
    return (  
        <header className="container">
            <header className="head">
                <h2>Re - <span id="so">so</span> - la</h2>
                <nav className="navbar">    
                    <ul>
                        <li>
                            <Link to="/" className="navs">Home</Link>
                        </li>
                        <li>  
                            <Link to="/services" className="navs">Services</Link>
                        </li>
                        <li>
                            <Link to="/" className="navs">Quantity Feign</Link>
                        </li>
                        <li>  
                            <Link to="/services" className="navs">Register</Link>
                        </li>
                    </ul>
                </nav>
            </header>

        </header>
    );
}
export default Navbar;