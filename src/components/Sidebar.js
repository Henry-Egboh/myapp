import { Link } from "react-router-dom";

const Sidebar = () => {
    return (  
            <aside className="sidebar">
                <h3>Services</h3>
                <div className="sidenav">
                    <ul>
                        <li>
                            <Link to="/">We are coming there</Link></li>
                        <li>
                            <Link to="/">That is very good</Link></li>
                        <li>
                            <Link to="/">Done well there</Link></li>
                        <li>
                            <Link to="/">Coming soon</Link></li>
                        <li>
                            <Link to="/">Housing things well</Link></li>
                        <li>
                            <Link to="/">Resting well</Link></li>
                    </ul>
                </div>
            </aside>
    );
}
 
export default Sidebar;