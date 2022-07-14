import  React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BannerImg from "../images/Pages-Banner.jpg";
import CampusCard from '../components/CampusCard';
import {
  fetchCampuses
} from "../store/RegistrationSlice";
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";

// import AU from "../images/Campuses Logo/Air.webp";
// import Bahria from "../images/Campuses Logo/Bahria-University.webp";
// import NUST from "../images/Campuses Logo/NUST.webp";
// import FAST from "../images/Campuses Logo/FAST-ISB.webp";
// import MAJU from "../images/Campuses Logo/MAJU Karachi.webp";
// import NED from "../images/Campuses Logo/NED-University.webp";
// import SZABIST from "../images/Campuses Logo/Szabist.webp";
// import IBA from "../images/Campuses Logo/IBA-Sukkur.webp";
// import FU from "../images/Campuses Logo/Foundation-University.webp";
// import arid from "../images/Campuses Logo/ARID Rwp.webp";
// import UOF from "../images/Campuses Logo/Faisalabad University.webp";
// import GC from "../images/Campuses Logo/GC Faislabad.webp";
// import UMT from "../images/Campuses Logo/UMT-Lahore.webp";
// import UCP from "../images/Campuses Logo/UCP-Lahore.webp";
// import PU from "../images/Campuses Logo/Punjab-University-Lahore.webp";
// import FastLhr from "../images/Campuses Logo/FAST-Lahore.webp";
// import KU from "../images/Campuses Logo/Karachi_University.webp";
// import IM from "../images/Campuses Logo/IM-Sciences.webp";
// import UOS from "../images/Campuses Logo/University-of-SWAT.webp";
// import USA from "../images/Campuses Logo/USA.webp";
// import BZU from "../images/Campuses Logo/Zikria_Bahauddin_Uni.webp";
// import UOAD from "../images/Campuses Logo/University-of-Arts-and-Design--Lahore.webp";
// import UOE from "../images/Campuses Logo/University-of-Education.webp";
// import LUMS from "../images/Campuses Logo/LUMS.webp";
// import SialkotUni from "../images/Campuses Logo/University-of-Sialkot.webp";
// import FMU from "../images/Campuses Logo/Faisalabad-Medical-University-FMU.webp";
// import GMC from "../images/Campuses Logo/Gujranwala-Medical-College.webp";
// import GIKI from "../images/Campuses Logo/GIKI-Swabi.webp";
// import IV from "../images/Campuses Logo/Indus-Valley.webp";
// import IU from "../images/Campuses Logo/IQRA-University-ISL.webp";
// import KMDC from "../images/Campuses Logo/Karachi-Medical-Dental-College.webp";
// import IADM from "../images/Campuses Logo/Institute-of-Art-and-Design-Management.webp";
// import NCA from "../images/Campuses Logo/NCA.webp";
// import KIET from "../images/Campuses Logo/PAF-KIET.webp";
// import KIU from "../images/Campuses Logo/Korakoram-International-University.webp";
// import SAU from "../images/Campuses Logo/sau.webp";
// import UOL from "../images/Campuses Logo/University-of-Lahore.webp";
// import PIFD from "../images/Campuses Logo/Pakistan-Institute-of-Fashion-andf-Design.webp";
// import KSA from "../images/Campuses Logo/Karachi-School-of-Arts.webp";
// import BNU from "../images/Campuses Logo/BNU-Lahore.webp";
// import UOQ from "../images/Campuses Logo/Pakistan-Institute-of-Fashion-andf-Design.webp";
// import fjwu from "../images/Campuses Logo/Fatima-Jinnah-Women-University.webp";
// import IBM from "../images/Campuses Logo/IOBM.webp";

const Campuses = () => {

  const [value, setValue] = React.useState('1');

  const { data } = useSelector((state) => state.registration);
  const { msg } = useSelector((state) => state.registration);

  useEffect(() => {
    dispatch(fetchCampuses())
  }, []);

  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState(data);

  const filterData = (value) => {
console.log(value);
    let result = [];
    result = data.filter((campus) => {
      return campus.CampusType == value;
    });
    setFilteredData(result);
  };
  return (
    <PageContainer>
      <Banner style={{ backgroundImage: `url(${BannerImg})` }}>
        <h2>CAMPUSES</h2>
        {/* <h4>Campuses included in PUBG Mobile Campus Empower Program</h4> */}
      </Banner>

      <Content>
        <Tabs>
          <TabList onClick={(e) => filterData(e.target.value)}>
            <Tab value="2">Offline Campuses</Tab>
            <Tab value="1">Online Campuses</Tab>
            <Tab value="3">Designer Campuses</Tab>
          </TabList>

          <TabPanel>
            <div className="row">
              {
                filteredData?.length ? filteredData.map((campus) => (
                  campus.CampusType === 2 ? 
                  <CampusCard abbreviation={campus.ShortName} city={campus.City} name={campus.FullName} image={campus.Logo} startDate={moment(new Date(campus.VisitStartDate)).format("MMM Do")} 
                  endDate={moment(new Date(campus.VisitEndDate)).format("MMM Do")} registrationCloseDate={moment(new Date(campus.ApplicationCloseDateTime)).format("MMM Do")} id={campus.ID} timelineTitle={"Timeline"} campusType={campus.CampusType} />
                  : ""
                  )) :  data?.length ? data.map((campus) => (
                  campus.CampusType === 2 ? 
                  <CampusCard abbreviation={campus.ShortName} city={campus.City} name={campus.FullName} image={campus.Logo} startDate={moment(new Date(campus.VisitStartDate)).format("MMM Do")} 
                  endDate={moment(new Date(campus.VisitEndDate)).format("MMM Do")} registrationCloseDate={moment(new Date(campus.ApplicationCloseDateTime)).format("MMM Do")} id={campus.ID} timelineTitle={"Timeline"} campusType={campus.CampusType} />
                  : ""
                )) : ""
              }
              {/* <CampusCard abbreviation={"BAHRIA"} city={"ISB"} name={"Bahria University"} image={Bahria} timeline={"1st Aug - 2nd Aug"} id={1}/>
                <CampusCard abbreviation={"NUST"} city={"ISB"} name={"National University of Science & Technology"} image={NUST} timeline={"3rd Aug - 4th Aug"} id={1}/>
                <CampusCard abbreviation={"FAST"} city={"ISB"} name={"FAST University"} image={FAST} timeline={"5th Aug - 6th Aug"} id={1}/>
                <CampusCard abbreviation={"IBM"} city={"KCH"} name={"Institute of Business Management"} image={IBM} timeline={"1st Aug - 2nd Aug"} id={1}/>
                <CampusCard abbreviation={"NED"} city={"KCH"} name={"NED University"} image={NED} timeline={"3rd Aug - 4th Aug"} id={1}/>
                <CampusCard abbreviation={"KU"} city={"KCH"} name={"Karachi University"} image={KU} timeline={"5th Aug - 6th Aug"} id={1}/>
                <CampusCard abbreviation={"SZABIST"} city={"KCH"} name={"SZABIST University"} image={SZABIST} timeline={"9th Aug - 10th Aug"} id={1}/>
                <CampusCard abbreviation={"FAST"} city={"LHR"} name={"Fast University"} image={FastLhr} timeline={"15th Aug - 16th Aug"} id={1}/>
                <CampusCard abbreviation={"IBA"} city={"SKR"} name={"Institute of Business Administration"} image={IBA} timeline={"15th Aug - 16th Aug"} id={1}/>
                <CampusCard abbreviation={"PU"} city={"LHR"} name={"Punjab University"} image={PU} timeline={"17th Aug - 18th Aug"} id={1}/>
                <CampusCard abbreviation={"UCP"} city={"LHR"} name={"University of Central Punjab"} image={UCP} timeline={"19th Aug - 20th Aug"} id={1}/>
                <CampusCard abbreviation={"UMT"} city={"LHR"} name={"University of Management & Technology"} image={UMT} timeline={"22nd Aug - 23rd Aug"} id={1}/>
                <CampusCard abbreviation={"GC"} city={"FSB"} name={"Government College University"} image={GC} timeline={"17th Aug - 18th Aug"} id={1}/>
                <CampusCard abbreviation={"TUF"} city={"FSB"} name={"The University of Faisalabad"} image={UOF} timeline={"19th Aug - 20th Aug"} id={1}/>
                <CampusCard abbreviation={"FU"} city={"RWP"} name={"Foundation University"} image={FU} timeline={"11th Aug - 12th Aug"} id={1}/>
                <CampusCard abbreviation={"ARID"} city={"RWP"} name={"ARID Agriculture University"} image={arid} timeline={"11th Aug - 12th Aug"} id={1}/> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
            {
                filteredData?.length ? filteredData.map((campus) => (
                  <CampusCard abbreviation={campus.ShortName} city={campus.City} name={campus.FullName} image={campus.Logo} startDate={moment(new Date(campus.VisitStartDate)).format("MMM Do")} 
                  endDate={moment(new Date(campus.VisitEndDate)).format("MMM Do")} registrationCloseDate={moment(new Date(campus.ApplicationCloseDateTime)).format("MMM Do")} id={campus.ID} timelineTitle={"Registration Closing Date"} campusType={campus.CampusType} />
                )) : ""
              }
              {/* <CampusCard abbreviation={"FJWU"} city={"RWP"} name={"Fatima Jinnah Women University"} image={fjwu} timeline={"9th Aug - 10th Aug"} id={1} />
              <CampusCard abbreviation={"UOS"} city={"SWAT"} name={"University Of Swat"} image={UOS} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"IMS"} city={"PSH"} name={"IM SCIENCES"} image={IM} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"LUMS"} city={"LHR"} name={"LUMS"} image={LUMS} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"USA"} city={"LHR"} name={"University of South Asia Cantt"} image={USA} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"SU"} city={"SLK"} name={"Sialkot University"} image={SialkotUni} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"FMU"} city={"FSB"} name={"Faisalabad Medical University"} image={FMU} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"UOQ"} city={"QUT"} name={"University of Quetta"} image={UOQ} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"UOE"} city={"MUL"} name={"University of Education"} image={UOE} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"AU"} city={"ISB"} name={"Air University"} image={AU} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"GIKI"} city={"SWABI"} name={"GIKI University"} image={GIKI} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"SAU"} city={"HYB"} name={"Sindh Agriculture University"} image={SAU} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"KIU"} city={"GLT"} name={"Karokaram INT University"} image={KIU} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"GMC"} city={"GJR"} name={"Gujranawala Medical College"} image={GMC} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"PAF-KIET"} city={"KCH"} name={"PAF KEIT MAIN Campus"} image={KIET} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"KMDU"} city={"KCH"} name={"Karachi Medical and Dental University"} image={KMDC} timeline={"Not Finalized"} id={1} /> */}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="row">
            {
                filteredData?.length ? filteredData.map((campus) => (
                  <CampusCard abbreviation={campus.ShortName} city={campus.City} name={campus.FullName} image={campus.Logo} startDate={moment(new Date(campus.VisitStartDate)).format("MMM Do")} 
                  endDate={moment(new Date(campus.VisitEndDate)).format("MMM Do")} registrationCloseDate={moment(new Date(campus.ApplicationCloseDateTime)).format("MMM Do")} id={campus.ID} timelineTitle={"Registration Closing Date"} campusType={campus.CampusType} />
                )) : ""
              }
              {/* <CampusCard abbreviation={"NCA"} city={"LHR"} name={"NCA"} image={NCA} timeline={"9th Aug - 10th Aug"} id={1} />
              <CampusCard abbreviation={"STEP"} city={"LHR"} name={"STEP Institute of Art, Design & Management"} image={IADM} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"UOAD"} city={"LHR"} name={"University College of Arts and Design, PU"} image={UOAD} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"SCA"} city={"LHR"} name={"School of Creative Arts, UOL"} image={UOL} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"PIFD"} city={"LHR"} name={"PAKISTAN INSTITUTE OF FASHION AND DESIGN"} image={PIFD} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"KSA"} city={"KCH"} name={"Karachi School of Arts"} image={KSA} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"IV"} city={"KCH"} name={"Indus Valley"} image={IV} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"IU"} city={"ISB"} name={"Iqra University"} image={IU} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"MCA"} city={"MLT"} name={"Multan College of Arts, Bahauddin Zakariya University"} image={BZU} timeline={"Not Finalized"} id={1} />
              <CampusCard abbreviation={"BNU"} city={"LHR"} name={"BEACONHOUSE NATIONAL UNIVERSITY"} image={BNU} timeline={"Not Finalized"} id={1} /> */}
            </div>
          </TabPanel>
        </Tabs>

      </Content>
    </PageContainer>
  );
};


export default Campuses;

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