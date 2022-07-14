import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../logo.png";

const Menu = () => {
  
  return (
    <MenuContainer>
      <img src={Logo} style={{ height:"60px" }} onClick={() => window.open('http://pmcc.pk', '_self')}  />
      <NavLink
        style={{ textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/"
      >
        <h6>HOME</h6>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/campuses"
      >
        <h6>CAMPUSES</h6>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/winners"
      >
        <h6>WINNERS</h6>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/gallery"
      >
        <h6>GALLERY</h6>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none" }}
        className={({ isActive }) => (isActive ? "active" : "")}
        to="/feedback"
      >
        <h6>FEEDBACK</h6>
      </NavLink>
      <NavLink
        style={{ textDecoration: "none", padding:"10px" }}
        className={({ isActive }) => (isActive ? "" : "")}
        to="/registration"
      >
        <button className="reg-btn">Register</button>
      </NavLink>
    </MenuContainer>
  );
};

export default Menu;

const MenuContainer = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #231f20;
  justify-content: end;
  align-items: end;
  gap: 40px;
  padding-right:2.5em;

  img {
    position:absolute;
    left:8%;
    top:0;
  }

  @media (max-width: 768px) {
    img{
      display: none;
    }
    
  }

  h6 {
    color: white;
    // width:100%;
    // height:100%;
    padding:17px 13px 10px;
  }

  .active {
    display: flex;
    align-items: center;
    height: 100%;
    border-bottom: 3px solid #8dc68a;;
    background:linear-gradient(to bottom right, #8dc68a 0%, #93d2e0 100%);
    transform: skewX(-10deg);

    h6 {
      color: #000;
      transform: skewX(10deg);
    }
  }
`;
