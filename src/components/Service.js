import React from "react";
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import { faDesktop, faDiceD20, faFileCode } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
    return (
        <div id="services" className="services">
            <h1 className="py-5">Skill</h1>
                <div className="container">
                    <div className="row">
                         {/*-*/}
                        <div className="col-md-4 col-sm-8">
                            <div className="box">
                                <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size ="2x"/></div>
                                <h3>Test Application</h3>
                                <p>I test website by Automate Test(Katalon studio,Selenium) in Desktop, Andriod and IOS</p>
                            </div>
                        </div>
                         {/*-*/}
                         <div className="col-md-4 col-sm-8">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size ="2x"/></div>
                                <h3>Web Development</h3>
                                <p>Technologies I use is MERN(MongoDB , Express , ReactJS and NodeJS)</p>
                            </div>
                        </div>
                         {/*-*/}
                         <div className="col-md-4 col-sm-8">
                            <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faDiceD20} size ="2x"/></div>
                                <h3>UE Engine 4</h3>
                                <p>Vr game Interactive. I can make animetion,Event Game in Unreal engine4(and a little bit blender3D)</p>
                            </div>
                        </div>
                         {/*-*/}
                    </div>
                </div>
            </div>
           
   
    )
}

export default Service
