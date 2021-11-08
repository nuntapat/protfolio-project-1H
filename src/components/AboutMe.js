import React from "react";
import author from "../pic/me.jpg";

const AboutMe = () => {
    return (
        // <div className="container py-5">
        //     { <div className="row">
        //         <div className="col-lg-6.col-xm-12">
                    
        //             <img src={author} alt="author..."/>
        //         </div>
        //         <div className="col-lg-6.col-xm-12">
                    
        //         <h1>About Me</h1>
        //             <p>Hello! I am Nuntapat.I have been develoing website for 1 years. I'm Web Developer , Tester and Game Developer(UE Engine 4 4). 
        //             Technologies I use is MERN(MongoDB , Express , ReactJS and NodeJS).
        //             In The Test Section I will use katalon studio and Selenium(Java language)
                    
        //             </p>
        //         </div>
                    
        //     </div> 
               
        //     }
        // </div>
        <div className="card">
        <div className="row no-gutters">
            <div className="col-auto">
               <img src={author} alt="author.."
            </div>


            <div className="col">
                <div className="card-block px-2">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Description</p>
                    <a href="#" className="btn btn-primary">BUTTON</a>
                </div>
            </div>
        </div>
        <div className="card-footer w-100 text-muted">
            Footer stating cats are CUTE little animals
        </div>
  </div>
    )
}

export default AboutMe
