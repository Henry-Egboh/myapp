import { Link } from "react-router-dom";
const Footer = () => {
    const year = new Date();
    const isYear = year.toLocaleString("en-us", {year:"numeric"}); 
    return (
        <div className="bg">
        <div className="container">
        <footer className="main_footer"> 
            <footer className="footer">
                    <div>
                        <img className="bullet_image" src={require("../assets/img/restart.png")} alt="bullet_image" />
                        <h4>Novela</h4>
                        <p>Take the bull by the horn. Resolute and strong.</p>
                    </div>
                    <div>
                        <h4>Mainstream</h4>
                        <ul>
                            <li><Link to="/">Question</Link></li>
                            <li><Link to="/">Maintainance</Link></li>
                            <li><Link to="/">Justify</Link></li>
                            <li><Link to="/">Googler</Link></li>
                            <li><Link to="/">Instrument</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Weekend</h4>
                        <ul>
                            <li><Link to="/">Question</Link></li>
                            <li><Link to="/">Maintainance</Link></li>
                            <li><Link to="/">Justify</Link></li>
                            <li><Link to="/">Googler</Link></li>
                            <li><Link to="/">Instrument</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Debris</h4>
                        <ul>
                            <li><Link to="/">Question</Link></li>
                            <li><Link to="/">Maintainance</Link></li>
                            <li><Link to="/">Justify</Link></li>
                            <li><Link to="/">Googler</Link></li>
                            <li><Link to="/">Instrument</Link></li>
                        </ul>
                    </div>
                    {/* ==========================SECOND ROW ========================================================== */}
                    <div></div>
                    <div>
                        <h4>Mainstream</h4>
                        <ul>
                            <li><Link to="/">Question</Link></li>
                            <li><Link to="/">Maintainance</Link></li>
                            <li><Link to="/">Justify</Link></li>
                            <li><Link to="/">Googler</Link></li>
                            <li><Link to="/">Instrument</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Weekend</h4>
                        <ul>
                            <li><Link to="/">Question</Link></li>
                            <li><Link to="/">Maintainance</Link></li>
                            <li><Link to="/">Justify</Link></li>
                            <li><Link to="/">Googler</Link></li>
                            <li><Link to="/">Instrument</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4>Debris</h4>
                        <ul>
                            <li><Link to="/">Question</Link></li>
                            <li><Link to="/">Maintainance</Link></li>
                            <li><Link to="/">Justify</Link></li>
                            <li><Link to="/">Googler</Link></li>
                            <li><Link to="/">Instrument</Link></li>
                        </ul>
                    </div>
            </footer>
            <footer className="base_footer">
                <div>
                    <ul>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Cookies</Link></li>
                        <li><Link to="/">Insurance</Link></li>
                        <li><Link to="/">Googler</Link></li>
                    </ul>
                </div>
                
                <div>
                    <ul>
                        <li><Link to="/">Privacy Policy</Link></li>
                        <li><Link to="/">Cookies</Link></li>
                        <li><Link to="/">Insurance</Link></li>
                        <li><Link to="/">Googler</Link></li>
                    </ul>
                </div>

                <div>
                    <p> All rights reserved. { isYear }</p>
                </div>
            </footer>
        </footer>
        </div>
        </div>
    );
}
 
export default Footer;