import React, { useEffect } from "react";
import styled from "styled-components";
import PubgmLogos from "../images/footer-white-cut.png";
import AgonLogo from "../images/agon-white.png";

import { Link } from "react-router-dom";
//import { fetchGameInfo } from "../store/gameSlice";
//import { useDispatch, useSelector } from "react-redux";

const Footer = () => {
    return(

        <footer>
        <div className="footer-top">
        </div>
        <div className="copyright-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright-text">
                            <p>
                                Copyright © 2022 - <a href="https://www.pubgmobile.com/en-US/home.shtml">PUBG Mobile</a>  All Rights Reserved.
                                <a href="https://www.pubgmobile.com/en-US/home.shtml">
                                    <img src={PubgmLogos} alt="img" style={{height:'30px'}}/>
                                </a>
                            </p>
                        </div>
                    </div>
                    {/* <div className="col-lg-3 col-md-4 d-none d-md-block">
                        <div className="text-right" style={{fontSize:'12px', color:'white'}}>
                            Powered By Agon Esports -
                            <img src={AgonLogo} alt="img" style={{height:'20px'}}/>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    </footer>

    );
};


export default Footer;
