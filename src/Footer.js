import youtube from "./img/youtube.png";

const Footer = () => {
    return (
        <div className="bg">
        <div className="container">  
        <footer className="footer">
                <div>
                    <img className="bullet_image" src={youtube} alt="bullet_image" />
                    <h4>Novela</h4>
                    <p>Take the bull by the horn. Resolute and strong.</p>
                </div>
                <div>
                    <h4>Mainstream</h4>
                    <ul>
                        <li><a href="./App.js" target={"_self"}>Dust in the Complexity</a></li>
                        <li><a href="./App.js" target={"_self"}>Dust in the Complexity</a></li>
                        <li><a href="./App.js" target={"_self"}>Dust in the Complexity</a></li>
                        <li><a href="./App.js" target={"_self"}>Dust in the Complexity</a></li>

                    </ul>
                </div>
                <div>
                    <h4>Weekend</h4>
                    <ul>
                        <li><a href="./App.js" target={"_self"}>Gone into the Complexity</a></li>
                        <li><a href="./App.js" target={"_self"}>Gone into the Complexity</a></li>
                        <li><a href="./App.js" target={"_self"}>Gone into the Complexity</a></li>
                        <li><a href="./App.js" target={"_self"}>Gone into the Complexity</a></li>
                    </ul>
                </div>
                <div>
                    <h4>Debris</h4>
                    <ul>
                        <li><a href="./App.js">Maintainance</a></li>
                        <li><a href="./App.js">Question</a></li>
                        <li><a href="./App.js">Justify</a></li>
                        <li><a href="./App.js">Googler</a></li>
                        <li><a href="./App.js">Instrument</a></li>
                    </ul>
                </div>
        </footer>
        </div>
        </div>
    );
}
 
export default Footer;