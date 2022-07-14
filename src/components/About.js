import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import teaser from "../images/Video.mp4";
import Logo from "../logo192.png"

const About = () => {
    return (
        <Container>
            <div className="row" style={{marginRight:'0px'}}>
                <div className="col-md-6">
                    <div className="about-logo">
                        <img src={Logo}></img>
                    </div>
                    <VideoCon playsinline autoPlay loop muted controls>
                        <source src={teaser} type="video/mp4" />
                    </VideoCon>
                </div>
                <div className="col-md-6">
                    <div className="about-content">
                        <h4 class="about-subtitle  style-color">Check Out Our</h4>
                        <h2 class="about-title">CAMPUS CHALLENGE PROGRAM</h2>
                        <p>As one of the biggest part of PUBG MOBILE Gully Squad campaign, it's an important event initiated to inspire Pakistanis to be heroes.</p>
                        <p>A dedicated program to empower youngsters in Pakistan. You can be the hero players in your team and win glory with your squad. Potential Esports talents can get a chance to enter professional Esports scene with PMCC and potential art talents might be able to see their works being show-cased from PUBG MOBILE official side with this. The winning team of PMCC will qualify for PMNC Pakistan, the national championship in the year and eventually have a chance to compete with professional teams from PMPL Pakistan. This is the highest glory you can win for your squad! Register and catch it!</p>
                        <div className="row">
                        <div style={{ width: 'auto' }}>
                            <div class="about-widget">
                                <div class="number-wrapper">
                                    <span class="number loaded" >42</span>
                                    {/* <sup class="super">+</sup> */}
                                </div>
                                <h3 class="title">Total Campuses</h3>
                            </div>
                        </div>
                        <div style={{ width: 'auto' }}>
                            <div class="about-widget">
                                <div class="number-wrapper">
                                    <span class="number loaded" >4,000,000</span>
                                    <sup class="super">PKR</sup>
                                </div>
                                <h3 class="title">Prize Pool</h3>
                            </div>
                        </div>
                        </div>
                        <a href="/registration" className="reg-btn" style={{textDecoration:"none"}}>Register Now</a>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default About;

const Container = styled.div`
  width: 100%;
  padding-bottom:15px;
  
  @media (min-width: 1550px) {
    padding: 0px 50px;
  }
  @media (min-width: 1650px) {
    padding: 0px 80px;
  }
  
  @media (min-width: 1720px) {
    padding: 0px 120px;
  }

  @media (min-width: 2200px) {
    padding: 0px 200px;
  }

  @media (min-width: 2450px) {
    padding: 0px 200px;
  }
  @media (max-width: 480px) {
    padding: 50px 15px;
  }
`;


const VideoCon = styled.video`
  width: 100%;
  object-fit: cover;
`;
