import React, { useEffect } from "react";
import styled from "styled-components";
import TitleBar from "../images/title_bar.png";
import GC from "../images/Gully Squad KV.webp";

import { Link } from "react-router-dom";
//import { fetchGameInfo } from "../store/gameSlice";
//import { useDispatch, useSelector } from "react-redux";

const GullySquadPromotion = () => {

  return (
    <Container>
      <TitleArea>
        <h2>GULLY SQUAD</h2> 
        <p>
        Advance your team game skills now with some random squads as PUBGM brings something new for the community. Enroll yourself in any random squad via gully squad and explore new team players.
        </p>
        <img src={TitleBar} />
       
      </TitleArea>
      <Body>
      <img  src={GC} />
        {/* <p>This is for the promotion of Gully Squad</p> */}
      </Body>
    </Container>
  );
};

export default GullySquadPromotion;



const Body = styled.div`
  width: 100%;
  position: relative;
  text-align:center;

  img{
        height: 60%;
        width:100%;
  }

  a{
    color:#000;
    text-decoration:none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
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
      position: relative;
      top: 0;
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
    color:#1573a6;
    font-weight:800;
  }
  h2 {
    font-size:3em;
    color:#1c4294;
    font-weight:800;
  }
  p {
    text-align: center;
  }

  @media (max-width: 480px) {
    h2 {
      font-size:2em;
    }
  }
`;

const Container = styled.div`
  width: 100%;
  background-color:#dee1e6;
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
