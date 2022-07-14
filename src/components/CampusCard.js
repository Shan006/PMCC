import React, { useEffect } from "react";
import styled from "styled-components";
import TitleBar from "../images/title_bar.png";

import { Link } from "react-router-dom";
//import { fetchGameInfo } from "../store/gameSlice";
//import { useDispatch, useSelector } from "react-redux";

const CampusCard = ({ id, name, abbreviation, city, image, startDate, endDate, registrationCloseDate, timelineTitle, campusType  }) => {

  return (
    
    <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-3 ">
        <div className="upcoming-game-item mb-40 pb-0">
            <div className="upcoming-game-head">
                <div className="uc-game-head-title">
                    <span>{abbreviation}</span>
                </div>
                <div className="uc-game-price">
                    <h5>{city}</h5>
                </div>
            </div>
            <h4 style={{ height: "32px"}}><a href="/registration">{name}</a></h4>
            <div className="upcoming-game-thumb">
                <img src={'data:image/png;base64, '+image} alt=""/>
                <div className="upcoming-game-cart">
                    <a href="/registration" className="btn transparent-btn">Register Here</a>
                </div>
            </div>
            <div className="row justify-content-center p-2" style={{background:"#000"}}>
                <h5 style={{color: "#f2a900", textTransform:"uppercase", textAlign:"center", fontFamily:"sans-serif"}}>{timelineTitle}</h5>
                <h5 style={{color:"white", textAlign:"center", fontFamily:"sans-serif"}}>{(campusType === 2 ? startDate +' - ' + endDate : (campusType === 1 ? registrationCloseDate :"Not Finalized"))}</h5>
            </div>
        </div>
    </div>
    
    // <Link key={id} to={`/registration` } style={{ textDecoration: "none" }}>
    
    // <Content style={{ backgroundImage: `url(${image})` }}>
    //   <Bottom>
    //     <DateArea>
    //       <strong>{name}</strong>
    //       {"[]"}
    //     </DateArea>
    //   </Bottom>
    // </Content>
    // </Link>
  );
};

export default CampusCard;


const DateArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width:100% !important;
  height: 48px !important;
  font-size: 16px;
  line-height: 120%;
  flex-direction: column;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 6px 6px 12px 6px;
  background: #d71920;
  font-weight: 500;
  line-height: 1.2em;
  text-transform: uppercase;
`;

const Bottom = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 48px;
  position: relative;
  padding-right: 64px;

  img {
    width: 18px !important;
    height: 18px !important;
    -o-object-fit: contain;
    object-fit: contain;
    margin: 2px;
  }
`;

const Content = styled.div`
  height: 300px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 18px;
`;


