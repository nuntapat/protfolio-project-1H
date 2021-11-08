import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Welcome to my world</h1>
                <Typed
                className="typed-text"
                strings={["I AM","WEB DEVELOPER","TESTER","AND GAME DEVELOPER"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a href="#" className="btn-main-offer">contact me</a>
            </div>
        </div>
    )
}

export default Header
