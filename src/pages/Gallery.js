import * as React from 'react';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BannerImg from "../images/Pages-Banner.jpg";
import Card from '../components/ImageCard';

const Gallery = () => {

    const [value, setValue] = React.useState('1');

    return (
      <PageContainer>
             <Banner style={{ backgroundImage: `url(${BannerImg})` }}>
          <h2>GALLERY</h2>
          {/* <h4>Campuses included in PUBG Mobile Campus Empower Program</h4> */}
        </Banner>

        <Content>
            <Tabs>
                  <div className="row">
                    <div className="col-lg-4">
                    <aside className="blog-sidebar">
                    <div className="widget mb-45">
                        <div className="sidebar-widget-title mb-25">
                            <h4 style={{color:"#fff"}}>Campuses <span>Gallery</span></h4>
                        </div>
                        <div className="sidebar-cat">
                            <ul>
                                <li><a href="/Gallery?campusID=0" className="active">All ( 122 )</a></li>
                                <li><a href="/Gallery?campusID=1" className="">University of Central Punjab, Lahore ( 20 )</a></li>                         
                            </ul>
                        </div>
                    </div>
                </aside>
                </div>
                <div className="col-lg-8">
                <TabList>
                <Tab>Merchandise Distribution</Tab>
                <Tab>Tournament Winners</Tab>
                <Tab>Activities</Tab>
                </TabList>

                <TabPanel>
                  <div className="row">
                {/* <Card id={1} image="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_md.JPG" imageSmall="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_small.JPG"/>
                <Card id={1} image="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_md.JPG" imageSmall="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_small.JPG"/> */}
                <div className="col-md-12">
                        <h3 style={{color: "#00aa54"}}>Will be uploaded soon</h3>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                <div className="row">
                {/* <Card id={1} image="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_md.JPG" imageSmall="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_small.JPG"/>
                <Card id={1} image="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_md.JPG" imageSmall="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_small.JPG"/> */}
                <div className="col-md-12">
                        <h3 style={{color: "#00aa54"}}>Will be uploaded soon</h3>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                <div className="row">
                {/* <Card id={1} image="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_md.JPG" imageSmall="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_small.JPG"/>
                <Card id={1} image="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_md.JPG" imageSmall="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_small.JPG"/> */}
                <div className="col-md-12">
                        <h3 style={{color: "#00aa54"}}>Will be uploaded soon</h3>
                    </div>
                  </div>
                </TabPanel>
                </div>
                </div>
            </Tabs>
            
        </Content>
      </PageContainer>
    );
  };


  export default Gallery;

  const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;


const Banner = styled.div`
  //display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
//   opacity: 0.9;
//   padding-left: 100px;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0px;

  h2 {
    color: #231f20;
    font-weight: bold;
    // padding: 10px 15px;
    // border-left: 5px solid white;
    text-align:center;
    display:block;
    font-size: 50px;
  }

  h4 {
    color: #D93615;
    font-weight: bold;
    text-align:center;
    display:block;
  }

  @media (max-width: 480px) {
     padding: 40px 0px;
    height: 150px;

    h2 {
        font-size: 25px;
      }
  }
`;

const Content = styled.div`
padding:100px;
@media (max-width: 480px) {
    padding: 50px 10px;
  }
`;