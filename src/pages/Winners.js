import * as React from 'react';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BannerImg from "../images/Pages-Banner.jpg";
import Card from '../components/ImageCard';

const Winners = () => {

    const [value, setValue] = React.useState('1');

    return (
      <PageContainer>
             <Banner style={{ backgroundImage: `url(${BannerImg})` }}>
          <h2>Campuses Winners</h2>
          <h4>Tournament Campus Wise Points Table, Winners & Campus Queen</h4>
        </Banner>

        <Content>
            <Tabs>
                  <div className="row">
                    <div className="col-lg-4">
                    <aside className="blog-sidebar">
                    <div className="widget mb-45">
                        <div className="sidebar-widget-title mb-25">
                            <h4 style={{color:"#fff"}}>Campuses <span>Winners</span></h4>
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
                <Tab>Points Table</Tab>
                <Tab>Winners</Tab>
                </TabList>

                <TabPanel>
                  <div className='row'>
                  {/* <div className="community-wrap col-md-12">
                       <div className="table-responsive-xl">
                                    <table className="table mt-0">
                                        <thead>
                                            <tr>
                                                <th scope="col">Team</th>
                                                <th scope="col">Place Points</th>
                                                <th scope="col">Kill Points</th>
                                                <th scope="col">Total</th>
                                                <th scope="col">WWCD</th>
                                                <th scope="col">Position</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">
                                                    <div className="community-post-wrap">
                                                        <div className="community-post-content">
                                                            <a href="#">H2E</a>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>30</td>
                                                <td>32</td>
                                                <td>62</td>
                                                <td>2</td>
                                                <td>1</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div className="community-post-wrap">
                                                        <div className="community-post-content">
                                                            <a href="#">『BST』SQUAD</a>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>13</td>
                                                <td>8</td>
                                                <td>21</td>
                                                <td>0</td>
                                                <td>2</td>
                                            </tr>
                        
                                        </tbody>
                                    </table>
                                </div>
                        </div> */}
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


  export default Winners;

  const PageContainer = styled.div`
  width: 100%;
  height: 100%;
`;


const Banner = styled.div`
  //display: flex;
  align-items: center;
  width: 100%;
  height: 300px;
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