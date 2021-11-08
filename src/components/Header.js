import React from "react";
import Typed from "react-typed";
import {Link} from "react-scroll";

const Header = () => {
    return (
        <div id="home"className="header-wraper">
            <div className="main-info">
                <h1>Welcome to my world</h1>
                <Typed
                className="typed-text"
                strings={["I AM","WEB DEVELOPER","TESTER","AND GAME DEVELOPER"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                 <Link smooth={true} to="contacts" className="btn-main-offer">contact me</Link>
            </div>
        </div>
    )
}

export default Header
