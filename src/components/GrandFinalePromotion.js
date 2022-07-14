import React, { useEffect } from "react";
import styled from "styled-components";
import TitleBar from "../images/title_bar.png";
import PMCCRoad from "../images/RoadToPMCCImage_1.webp";

import { Link } from "react-router-dom";
//import { fetchGameInfo } from "../store/gameSlice";
//import { useDispatch, useSelector } from "react-redux";

const GrandFinalePromotion = () => {

  return (
    <Container>
      <TitleArea>
        <h2>ROAD TO GRAND FINALE</h2> 
        {/* <p>
          Description.
        </p> */}
        <img src={TitleBar} />
       
      </TitleArea>
      <Body>
        <img  src={PMCCRoad} /><br/>
        <a href="/registration" className="dark-btn">Click to earn a chance to win PKR 4,000,000</a>
      </Body>
    </Container>
  );
};

export default GrandFinalePromotion;



const Body = styled.div`
  width: 100%;
  position: relative;
  text-align:center;

  img{
        //height: 60%;
        width:100%;
  }

  a{
    color:#fff;
    text-decoration:none;
    margin-top:20px;
    // position: absolute;
    // top: 50%;
    // left: 50%;
    // transform: translate(-50%, -50%);
    // -ms-transform: translate(-50%, -50%);
  }

  @media (min-width: 1863px) {
    a{
      font-size: 24px;
    }
    img{
      // display:block;
    }
  }
  @media (max-width: 480px) {
    a{
      padding: 5px 5px;
      font-size: 12px;
      position: relative;
      top: 0;
      top:2em;
    }
  }
  @media (max-width: 768px) {
    a{
      font-size: 16px;
    }
  }

  @media (max-width: 1190px) {
    a{
      // position: relative;
      // top: 0;
      top:2em;
    }
  }
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content:center;
  //color: white;
  text-align: center;
  padding-bottom:2em;

  h4 {
    color:#559532;
    font-weight:800;
  }
  h2 {
    font-size:3em;
    color:#000;
    font-weight:800;
  }
  p {
    text-align: center;
    color:#fff;
  }

  @media (max-width: 480px) {
    h2 {
      font-size:2em;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  background:linear-gradient(to bottom right, #8dc68a 0%, #93d2e0 100%);
  padding: 100px 100px;

  @media (min-width: 1550px) {
    padding: 100px 250px;
  }
  @media (min-width: 1650px) {
    padding:100px 300px;
  }
  
  @media (min-width: 1720px) {
    padding: 100px 350px;
  }

  @media (min-width: 2200px) {
    padding: 100px 450px;
  }

  @media (min-width: 2450px) {
    padding: 100px 500px;
  }
  @media (max-width: 480px) {
    padding: 50px 15px;
  }
`;
