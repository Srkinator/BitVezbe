import React from "react";
import Timer from "./timer";
import { Link } from "react-router-dom";
import Form from "../posts/form";


const Header = function () {
    return (
        <div>
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">My Blog APP</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/Authors'>Authors</Link></li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/About'>About</Link></li>
                        <li><Link to='/Compose'>New Post</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};
export default Header;