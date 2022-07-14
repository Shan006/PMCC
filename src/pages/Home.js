import React from "react";
import styled from "styled-components";
import Slider from "../components/SlideShow";
import Categories from "../components/Categories";
import About from "../components/About";
import Campuses from "../components/Campuses";
import GrandFinalePromotion from "../components/GrandFinalePromotion";
import GullySquadPromotion from "../components/GullySquadPromotion";
import StudentMarketer from "./StudentMarketer";

const Home = () => {
  return (
    <PageContainer>
      <Slider />
      {/* <div className="elementor-shape elementor-shape-bottom" data-negative="false">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
	<path className="elementor-shape-fill" d="M0,6V0h1000v100L0,6z"></path>
</svg>		</div> */}
      <Categories />
      <About />
      <Campuses />
      <GrandFinalePromotion />
      <GullySquadPromotion />
      <StudentMarketer />
    </PageContainer>
  );
};

export default Home;

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;
