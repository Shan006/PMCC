import React from "react";
import styled from "styled-components";
import Header from "../components/TopHeader";
 import Menu from "../components/Menu";
 import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
// import "core-js/stable";
// import "@babel/polyfill";

const Layout = ({ children }) => {
  return (
    // <LayoutWrapper>
    <LayoutContainer>
      <HeaderWrapper>
          <Header/>
      </HeaderWrapper>
      <BodyWrapper>
       <MenubarWrapper>
          <Menu/>
      </MenubarWrapper>
     <MobMenubarWrapper>
          <MobileMenu/>
      </MobMenubarWrapper>
        <Body>{children}</Body>
        <Footer/>
      </BodyWrapper>
    </LayoutContainer>
    // </LayoutWrapper>
  );
};

export default Layout;

const BodyWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fff;

  @media (max-width: 480px) {
    // display:none;
    height: 100%;
  }

  overflow-y: scroll;
  scroll-behavior: smooth;
  
  // ::-webkit-scrollbar {
  //   display: none;
  // }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: black;
    // border-radius:5px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #8dc68a 0%, #93d2e0 100%);;
    // border-radius:5px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #8DC68A;
  }


`;

const HeaderWrapper = styled.div`
  width: 100%;
  //height: 8%;
  // opacity:0.7;
  background-color: #231f20;
`;

const MobMenubarWrapper = styled.div`
  width: 100%;
  height: 10%;
  background-color: black;
  display:none;
  z-index:999;

  @media (max-width: 480px) {
    // position: absolute;
    position:fixed;
    display:block;
    bottom:0;
    left:0;
    right:0;
  }

`;

const MenubarWrapper = styled.div`
  width: 100%;
 // height: 10%;
  background-color: #231f20;
//   opacity:0.8;
  display:block;
  z-index:1;
  position:relative;

  
.hidden{
  display:none;
}

.active-menu{
  display:flex;
}

  @media (max-width: 480px) {
    display:none;
  }

`;

const Body = styled.div`
  width: 100%;
  // height: 80%;
  display: flex;
`;
const LayoutContainer = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  // padding-left:50px;
  // padding-right:50px;
  height: 100vh;
  width: 100vw;

  // @media (max-width: 480px) {
  //   padding-left:0;
  // padding-right:0;
  // }
`;