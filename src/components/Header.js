import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Web development and website promo</h1>
                <Typed
                className="typed-text"
                strings={["Web Design","Web Developement","Facebook Ads SMM","Google Ads"]}
                typeSpeed={40}
                backSpeed={60}
                />
            </div>
        </div>
    )
}

export default Header