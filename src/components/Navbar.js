import LogInOut from "./LogInOut";
import { Link } from "react-router-dom";

const Navbar = () => {
    const name = "Sandra";
    const time = new Date();
    const dayTime = time.toLocaleString("en-us", { weekday: "short", hour: "2-digit", minute: "2-digit", second: "2-digit"});
    const morning = time.getHours() >= 6 && time.getHours() <= 12;
    const afternoon = time.getHours() >= 13 && time.getHours() <= 15;

    let greeting;

    if (dayTime && morning) {
        greeting = `Good morning ${name} as at: ${dayTime}`;
    }
    else if (dayTime && afternoon) {
        greeting = `Good day ${name} as at: ${dayTime}`;
    }
    else {
        greeting = `Good evening ${name} as at: ${dayTime}`;
    }
    
    function handleSigninClick(props) {
        <LogInOut isLoggedIn= "true" />
    }

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
                            <Link to="/components/services" className="navs">Services</Link>
                        </li>
                        <li>
                            <Link to="/" className="navs">Quantity Feign</Link>
                        </li>
                        <li>  
                            <Link to="/" className="navs">Register</Link>
                        </li>
                    </ul>
                </nav>
                <button className="btn" onClick={handleSigninClick}>Signin</button>
                <div>{greeting}</div>
            </header>

        </header>
    );
}
export default Navbar;