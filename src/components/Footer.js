import React from 'react'
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LineShareButton,
    LineIcon


} from "react-share";
import {Link} from "react-scroll";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="d-flex">
                            <p>Bangkok Thailand 10220</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel:095-253-9699">+(66)95-2539699</a>
                        </div>
                        <div className="d-flex">
                            <p>Nuntapat.aru@gmail.com</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-2 col-sm-6">
                        <div className="row">
                            <div className="col">
                                 <Link smooth={true} to="home" className="footer-nav">Home </Link>
                                <br />
                                 <Link smooth={true} to="about" className="footer-nav">About me</Link>
                                <br />
                                 <Link smooth={true} to="services" className="footer-nav">Skill</Link>
                                <br />
                            </div>
                            <div className="col">
                                 <Link smooth={true} to="experience" className="footer-nav">Experience</Link>
                                <br />
                                 <Link smooth={true} to="portfolio" className="footer-nav">Portfolio</Link>
                                <br />
                                 <Link smooth={true} to="contacts" className="footer-nav">Contacts</Link>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                        <div className="d-flex justify-content-center">
                            <FacebookShareButton
                                url={"https://github.com/nuntapat/protfolio-project-1H"}
                                quote={"LullLife"}
                                hashtag="#LullLife"
                            >
                                <FacebookIcon className="mx-3" size={36} />
                            </FacebookShareButton>
                            <TwitterShareButton
                                url={"https://github.com/nuntapat/protfolio-project-1H"}
                                quote={"LullLife"}
                                hashtag="#LullLife"
                            >
                                <TwitterIcon className="mx-3" size={36} />
                            </TwitterShareButton>
                            <RedditShareButton
                                url={"https://github.com/nuntapat/protfolio-project-1H"}
                                quote={"LullLife"}
                                hashtag="#LullLife"
                            >
                                <RedditIcon className="mx-3" size={36} />
                            </RedditShareButton>
                            <LineShareButton
                                url={"https://github.com/nuntapat/protfolio-project-1H"}
                                quote={"LullLife"}
                                hashtag="#LullLife"
                            >
                                <LineIcon className="mx-3" size={36} />
                            </LineShareButton>
                        </div>
                        <p className="pt-3 text-center">
                            Copyrights&copy;
                            {new Date().getFullYear()}&nbsp; By Lulllife
                        </p>
                    </div>
                </div>
            </div>


        </div>

    )
}

export default Footer
