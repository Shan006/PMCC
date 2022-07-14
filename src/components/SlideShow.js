import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import MainKV from "../images/main_kv.webp";

const SlideShow = () => {
  return (
    <Container>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={MainKV} width="100%"  alt="Third slide" />
        </Carousel.Item>
         {/* <Carousel.Item>
          <Link to={{ pathname: `/ASP9/registration` }}>
          <img className="d-block w-100" src="https://d3o74r8ui4zzeg.cloudfront.net/Sliders/asphalt-9.webp" width="100%"  alt="First slide" />
          </Link>
        </Carousel.Item> */}
       {/* <Carousel.Item>
        <Link to={{ pathname: `/PUBGM/registration` }}>
          <img className="d-block w-100" src="https://d3o74r8ui4zzeg.cloudfront.net/Sliders/PUBGM.webp" width="100%"  alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to={{ pathname: `/FF/registration` }}>
          <img className="d-block w-100" src="https://d3o74r8ui4zzeg.cloudfront.net/Sliders/freefire.webp" width="100%"  alt="First slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to={{ pathname: `/VAROLANT/registration` }}>
          <img className="d-block w-100" src="https://d3o74r8ui4zzeg.cloudfront.net/Sliders/valorant.webp" width="100%"  alt="Second slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to={{ pathname: `/COD4/registration` }}>
          <img className="d-block w-100" src="https://d3o74r8ui4zzeg.cloudfront.net/Sliders/COD4.webp" width="100%"   alt="Third slide" />
          </Link>
        </Carousel.Item>
        <Carousel.Item>
        <Link to={{ pathname: `/DOTA2/registration` }}>
          <img className="d-block w-100" src="https://d3o74r8ui4zzeg.cloudfront.net/Sliders/dota2.webp" alt="Third slide" />
          </Link>
        </Carousel.Item> */}
      </Carousel>
    </Container>
  );
};

export default SlideShow;

const UpSvg = styled.div`
  opacity: 0.5;
  transform: rotate(180deg);
`;

const Container = styled.div`
  width: 100%;
  border-bottom-left-radius: 10px;
  
  svg {
    position: absolute;
  }

  img {
    // border-bottom-left-radius:250px;
     height:100%;
  }

  @media (max-width: 480px) {
    img {
      height: auto;
    }
  }
`;
