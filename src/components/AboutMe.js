import React from "react";
import author from "../pic/me.jpg";

const AboutMe = () => {
    return (

        <div className="container py-5">{
            <div className="row">
                <div className="col-lg-6.col-xm-12">
                    <div className="photo-wrap">
                        <img src="profile-img" alt="author..." />
                    </div>
                </div>
                <div className="col-lg-6.col-xm-12">
                    <h1>About Me</h1>
                    <p>Hello! I am Nuntapat.I have been develoing website for 1 years. I'm Web Developer , Tester and Game Developer(UE Engine 4).
                        Technologies I use is MERN(MongoDB , Express , ReactJS and NodeJS).
                        In The Test Section I will use katalon studio and Selenium(Java language)

                    </p>
                </div>

            </div>
        }
        </div>

    )
}

export default AboutMe
