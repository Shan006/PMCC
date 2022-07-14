import React, { useEffect } from "react";
import styled from "styled-components";
import TitleBar from "../images/title_bar.png";
import BGImg from "../images/parallex-small.webp";

import AU from "../images/Air_University.png";
import Bahria from "../images/Campuses Logo/Bahria-University.webp";
import NUST from "../images/Campuses Logo/NUST.webp";
import FAST from "../images/Campuses Logo/FAST-ISB.webp";
import MAJU from "../images/Campuses Logo/MAJU Karachi.webp";
import NED from "../images/Campuses Logo/NED-University.webp";
import SZABIST from "../images/Campuses Logo/Szabist.webp";
import IBA from "../images/Campuses Logo/IBA-Sukkur.webp";
import FU from "../images/Campuses Logo/Foundation-University.webp";
import arid from "../images/Campuses Logo/ARID Rwp.webp";
import UOF from "../images/Campuses Logo/Faisalabad University.webp";
import GC from "../images/Campuses Logo/GC Faislabad.webp";
import UMT from "../images/Campuses Logo/UMT-Lahore.webp";
import UCP from "../images/Campuses Logo/UCP-Lahore.webp";
import PU from "../images/Campuses Logo/Punjab-University-Lahore.webp";
import FastLhr from "../images/Campuses Logo/FAST-Lahore.webp";
import KU from "../images/Campuses Logo/Karachi_University.webp";
import fjwu from "../images/Campuses Logo/Fatima-Jinnah-Women-University.webp";
import IBM from "../images/Campuses Logo/IOBM.webp";

import { Link } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
//import { fetchGameInfo } from "../store/gameSlice";
//import { useDispatch, useSelector } from "react-redux";

const Campuses = () => {

 // const dispatch = useDispatch();
  // const { data } = useSelector((state) => state.games);

  const handleLeft = () => {
    document.getElementById("container").scrollLeft -= 300;
  };
  const handleRight = () => {
    document.getElementById("container").scrollLeft += 300;
  };


  // useEffect(() => {
  //  dispatch(fetchGameInfo())  
  // }, [])
  
  // console.log("asd", data)

  return (
    <Container
    style={{
      backgroundImage: `url(${BGImg})`,
      backgroundAttachment: `fixed`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
    }}
    >
      <TitleArea>
        <h4>PUBG MOBILE IS NOW</h4>
        <h2>IN YOUR CAMPUS</h2>
        <img src={TitleBar} />
        {/* <p>
          Daily tournaments for your favourite games. Build your stats & win
          exciting prizes!.
        </p> */}
      </TitleArea>
      <Body>
        <CardsArea id="container">
          {
            // data?.length ?   data.map((game) => (
            //   <Link key={game.ID} to={{ pathname: game.AllowRegistration === true ? `/${game.Abbreviation}/registration`: `#` }}>
            //   <Card>
            //   <img src={game.Image} />              
            //     {/* <img src={CardImg0} /> */}
            //     <h5  style={{fontFamily:"sans-serif"}}> {game.Name} </h5>
            //     <p style={{color:'red', fontSize:'14px'}} >{game.AllowRegistration === false ? "Coming Soon": "Register Now"}</p>
            //   </Card>
            // </Link>
            // ) ) : ""
          }
            <Link to='#'>
              <Card>
                <img src={Bahria} height="200px" />      
                <div className="tilt-title">
                    <h5 style={{fontFamily:"sans-serif"}}> Bahria University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>1st Aug - 2nd Aug</span> </h5>
                </div>        
              </Card>
            </Link>

            <Link to='#'>
              <Card>
                <img src={NUST} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> NUST University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>3rd Aug - 4th Aug</span></h5>
                </div>        
              </Card>
            </Link>

            <Link to='#'>
              <Card>
                <img src={FAST} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> FAST University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>5th Aug - 6th Aug</span> </h5>
                </div>        
              </Card>
            </Link>


            <Link to='#'>
              <Card>
                <img src={IBM} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> IBM University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>1st Aug - 2nd Aug</span></h5>
                </div>        
              </Card>
            </Link>


            <Link to='#'>
              <Card>
                <img src={NED} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> NED University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>3rd Aug - 4th Aug</span></h5>
                </div>        
              </Card>
            </Link>


            <Link to='#'>
              <Card>
                <img src={KU} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> Karachi University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>5th Aug - 6th Aug</span></h5>
                </div>        
              </Card>
            </Link>

            <Link to='#'>
              <Card>
                <img src={SZABIST} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> SZABIST <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>9th Aug - 10th Aug</span></h5>
                </div>        
              </Card>
            </Link>

<Link to='#'>
  <Card>
    <img src={IBA} height="200px" />      
    <div className="tilt-title">
        <h5  style={{fontFamily:"sans-serif"}}> IBA University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>15th Aug - 16th Aug</span></h5>
    </div>        
  </Card>
</Link>

            <Link to='#'>
              <Card>
                <img src={FastLhr} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> Fast University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>15th Aug - 16th Aug</span></h5>
                </div>        
              </Card>
            </Link>

            <Link to='#'>
              <Card>
                <img src={PU} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> Punjab University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>17th Aug - 18th Aug</span></h5>
                </div>        
              </Card>
            </Link>

            <Link to='#'>
              <Card>
                <img src={UCP} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> Central Punjab <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>19th Aug - 20th Aug</span></h5>
                </div>        
              </Card>
            </Link>

            <Link to='#'>
              <Card>
                <img src={UMT} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}>UMT University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>22nd Aug - 23rd Aug</span></h5>
                </div>        
              </Card>
            </Link>

            <Link to='#'>
              <Card>
                <img src={GC} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> GC University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>17th Aug - 18th Aug</span></h5>
                </div>        
              </Card>
            </Link>

            <Link to='#'>
              <Card>
                <img src={UOF} width="200px" height="200px"/>      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> Faisalabad University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>19th Aug - 20th Aug</span></h5>
                </div>        
              </Card>
            </Link>

            <Link to='#'>
              <Card>
                <img src={fjwu} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> FJWU <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>9th Aug - 10th Aug</span></h5>
                </div>        
              </Card>
            </Link>

            <Link to='#'>
              <Card>
                <img src={FU} height="200px" />      
                <div className="tilt-title">
                    <h5  style={{fontFamily:"sans-serif"}}> Foundation University <br/> <span style={{fontSize:'12px', textTransform:'capitalize'}}><b>TimeLine: </b>11th Aug - 12th Aug</span></h5>
                </div>        
              </Card>
            </Link>

        </CardsArea>
        <LROptions>
          <ChevronLeftIcon
            sx={{
              color: "black",
              height: "35px",
              width: "35px",
              backgroundColor: "#8DC68A",
              borderRadius: "100%",
              cursor: "pointer",
            }}
            onClick={handleLeft}
          />
          <ChevronRightIcon
            sx={{
              color: "black",
              height: "35px",
              width: "35px",
              backgroundColor: "#8DC68A",
              borderRadius: "100%",
              cursor: "pointer",
            }}
            onClick={handleRight}
          />
        </LROptions>
      </Body>
    </Container>
  );
};

export default Campuses;

const LROptions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  // position: relative;
  // display: flex;
  justify-content: center;
  width:260px;
  text-align:center;

  h5 {
    //color: white;
    padding:10px;
    position: relatove;
    // bottom: 35px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    transform: skewX(10deg);
  }

  p {
    padding:3px;
    position: absolute;
    bottom: 5px;
    font-weight: bold;
    font-size: 14px;
    text-align: center;
  }
  img {
    border-radius: 10px;
    // width:auto;
    // height:auto;
  }
`;

const CardsArea = styled.div`
  display: flex;
  flex-direaction: row;
  //   align-items:center;
  //   justify-content:center;
  gap: 12px;

  overflow-x: scroll;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    display: none;
  }

  a{    
    text-decoration: none;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
    color:#000;
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
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 100px 80px;

  @media (max-width: 480px) {
    padding: 50px 15px;
  }
`;
