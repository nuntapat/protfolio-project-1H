import React from "react";

import testpic from "../pic/Bkk.png"
import testpic2 from "../pic/Ue4.PNG"
import testpic3 from "../pic/port.png"
import testpic4 from "../pic/itpe.png"
//Font Awesome

import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Popupbox
import{ PopupboxManager, PopupboxContainer} from"react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    //pic1
    const openPopupboxTestpicOne = () => {
        const content =(
    <>
    <img className="portfolio-image-popupbox" src={testpic} alt="Testpic..."/>
        <p>One of the development team.
             Responsible for quality testing and manage database.</p>
     <b>Website:</b> <a className="hyper-link" onClick={() => window.open("https://www.bangkoknoimodel.org/")} >https://www.bangkoknoimodel.org/</a>
    </>
   )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Bangkoknoi Model",
          },
        },
      });
    }
    
    const popupboxConfigTestpicOne ={
        titleBar:{
            enable: true,
            text: "Test One"
        },
        fadeIn: true,
        fadeInSpeed: 500
        }


        //pic2
    const openPopupboxTestpicTwo = () => {
        const content =(
    <>
    <img className="portfolio-image-popupbox" src={testpic2} alt="TestpicTwo..."/>
            
        <p>Unreal Engine4 Create Project teaser Of doozy digilab restaurant.</p>
     <b>Video:</b> <a className="hyper-link" onClick={() => window.open("https://drive.google.com/drive/folders/1XKjzNfmtu2RkzxM6gUHIRubkr1pxseCN?usp=sharing")} >https://shortest.link/1FUQ</a>
    </>
   )
    PopupboxManager.open({content})
    PopupboxManager.update({
        content,
        config: {
          titleBar: {
            text: "Unreal Engine 4",
          },
        },
      });
    }
    
    const popupboxConfigTestpicTwo ={
        titleBar:{
            enable: true,
            text: "Test Two"
        },
        fadeIn: true,
        fadeInSpeed: 500
        }

          //pic3
    const openPopupboxTestpicThree = () => {
        const content =(
    <>
    <img className="portfolio-image-popupbox" src={testpic3} alt="3...."/>
        <p>My Portpolio use react and bootstrap 4 to create.</p>
     <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nuntapat/protfolio-project-1H.git")} >https://github.com/nuntapat/protfolio-project-1H.git</a>
    </>
   )
    PopupboxManager.open({content})
    }
    
    const popupboxConfigTestpicThree ={
        titleBar:{
            enable: true,
            text: "Work Collection"
        },
        fadeIn: true,
        fadeInSpeed: 500
        }
       
         //pic4
    const openPopupboxTestpicFour = () => {
        const content =(
    <>
    <img className="portfolio-image-popupbox" src={testpic4} alt="4...."/>
        <p>ITPE Certificate.</p>
    </>
   )
    PopupboxManager.open({content})
    const popupboxConfigTestpicThree ={
        titleBar:{
            enable: true,
            text: "ITPE Certificate"
        },
        fadeIn: true,
        fadeInSpeed: 500
        }
    }
    
    const popupboxConfigTestpicFour ={
        titleBar:{
            enable: true,
            text: "ITPE CER."
        },
        fadeIn: true,
        fadeInSpeed: 500
        }
       
    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">
                    <div className="portfolio-image-box" onClick={openPopupboxTestpicOne}>
                    <img className="portfolio-image" src={testpic} alt="Test picture on website.."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                
                {/*  */}
               
               
                <div className="portfolio-image-box" onClick={openPopupboxTestpicTwo}>
                    <img className="portfolio-image" src={testpic2} alt="Test picture on website.."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                
                {/*  */}
                
               
                <div className="portfolio-image-box" onClick={openPopupboxTestpicThree}>
                    <img className="portfolio-image" src={testpic3} alt="Test picture on website.."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                {/* */}
                <div className="portfolio-image-box" onClick={openPopupboxTestpicFour}>
                    <img className="portfolio-image" src={testpic4} alt="Test picture on website.."/>
                    <div className="overflow"></div>
                    <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                </div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigTestpicOne}/>
            <PopupboxContainer {...popupboxConfigTestpicTwo}/>
            <PopupboxContainer {...popupboxConfigTestpicThree}/>
            <PopupboxContainer {...popupboxConfigTestpicFour}/>
           
        </div>
    )
}

export default Portfolio
