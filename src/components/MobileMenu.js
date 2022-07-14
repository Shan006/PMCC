import React from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import SchoolIcon from "@mui/icons-material/School";
import GalleryIcon from "@mui/icons-material/Camera";
import WinnersIcon from "@mui/icons-material/EmojiEvents";
import FeedbackIcon from "@mui/icons-material/Feedback";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavLink } from "react-router-dom";


const MobileMenu = () => {
  return (
    <MobMC>
      <NavLink style={{ textDecoration: "none" }} className={({ isActive }) => (isActive ? "active" : "")} to="/">
        <span>
          <HomeIcon sx={{ color: "white", width: "20px", height: "20px" }} />
          <small>Home</small>
        </span>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} className={({ isActive }) => (isActive ? "active" : "")} to="/campuses" >
        <span>
          <SchoolIcon sx={{ color: "white", width: "20px", height: "20px" }} />
          <small>CAMPUSES</small>
        </span>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} className={({ isActive }) => (isActive ? "active" : "")} to="/winners" >
      <span>
          <WinnersIcon sx={{ color: "white", width: "20px", height: "20px" }} />
        <small>WINNERS</small>
      </span>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} className={({ isActive }) => (isActive ? "active" : "")} to="/gallery" >
      <span>
          <GalleryIcon sx={{ color: "white", width: "20px", height: "20px" }} />
        <small>GALLERY</small>
      </span>
      </NavLink>
      <NavLink style={{ textDecoration: "none" }} className={({ isActive }) => (isActive ? "active" : "")} to="/feedback" >
      <span>
          <FeedbackIcon sx={{ color: "white", width: "20px", height: "20px" }} />
        <small>FEEDBACK</small>
      </span>
      </NavLink>
    </MobMC>
  );
};

export default MobileMenu;

const MobMC = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 8px;

  span {
    display: flex;
    flex-direction: column;
    align-items: center;

    small {
      color: white;
    }
  }

  .active {
    height: 100%;
    display: flex;
    align-items: center;
    border-top: 2px solid #559532;

    span {
      svg {
        color:#559532;
      }
      small {
        color:#559532;
      }
     
    }
  }
`;
