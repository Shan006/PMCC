import  React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BannerImg from "../images/Pages-Banner.jpg";
import Card from '../components/ImageCard';
import { Alert, Snackbar,TextField, TextareaAutosize } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  submitInfo
} from "../store/FeedbackSlice";

const Feedback = () => {

    const [showAlert, setShowAlert] = React.useState(false);

    // const { data } = useSelector((state) => state.registration);
    const { msg } = useSelector((state) => state.feedback);
    const { code } = useSelector((state) => state.feedback);
  
    // useEffect(() => {
    //   dispatch(fetchCampuses())
    //  }, []);
  
    const [Subject, setSubject] = React.useState("");
    const [Description, setDescription] = React.useState("");
    const [FullName, setFullName] = React.useState("");
    const [Email, setEmail] = React.useState("");
    const [Campus, setCampus] = React.useState("");
   
  
  
    const dispatch = useDispatch();
  
    
  
    const handleSuggestionSubmit = () => {
      let data = {
        ProjectType:2,
        Type : 2,
        Description: Description,
        FullName: FullName,
        Email: Email,
        Campus: Campus
      };
  
      dispatch(submitInfo(data));
      setShowAlert(true);
    };
  
    const handleQuerySubmit = () => {
      let data = {
        ProjectType:2,
        Type : 1,
        Subject: Subject,
        Description: Description,
        FullName: FullName,
        Email: Email,
        Campus: Campus
  
      };
  
      dispatch(submitInfo(data));
      setShowAlert(true);
    };

    return (
      <PageContainer>
             <Banner style={{ backgroundImage: `url(${BannerImg})` }}>
          <h2>Feedback</h2>
          {/* <h4>Campuses included in PUBG Mobile Campus Empower Program</h4> */}
        </Banner>

        <Content>
            <Tabs>
                  <div className="row">
                <div className="col-lg-12">
                <TabList>
                {/* <Tab>How are we doing?</Tab> */}
                <Tab>Tell Us How to Improve!</Tab>
                <Tab>ANY COMPLAINT/QUERY?</Tab>
                </TabList>

                {/* <TabPanel>
                  <div className="row">
               
                  </div>
                </TabPanel> */}
                <TabPanel>
                <div className="row">
                                <div className='col-md-6'>
                                <TextField
                                  sx={{
                                    width: "100%",
                                    "& .MuiFormLabel-root ": {
                                      color: "black !important",
                                      fontSize: "16px",
                                    },
                                    "& .MuiInput-input": {
                                      color: "black",
                                    },
                                    ".MuiFilledInput-input": {
                                       backgroundColor: "#fff",
                                      borderBottom: "2px solid #1573a6",
                                      color: "black",
                                      fontSize: "16px",
                                    },
                                  }}
                                  label="Full Name"
                                  variant="filled"
                                  key="FullName"
                                  onChange={(e) =>
                                    setFullName(e.target.value)}
                                />
                                </div>
                                <div className='col-md-6'>
                                <TextField
                                  sx={{
                                    width: "100%",
                                    "& .MuiFormLabel-root ": {
                                      color: "black !important",
                                      fontSize: "16px",
                                    },
                                    "& .MuiInput-input": {
                                      color: "black",
                                    },
                                    ".MuiFilledInput-input": {
                                       backgroundColor: "#fff",
                                      borderBottom: "2px solid #1573a6",
                                      color: "black",
                                      fontSize: "16px",
                                    },
                                  }}
                                  label="Email Address"
                                  variant="filled"
                                  key="Email"
                                  onChange={(e) =>
                                    setEmail(e.target.value)}
                                />
                                </div>

                                <div className='col-md-12'>
                                <TextField
                                  sx={{
                                    width: "100%",
                                    "& .MuiFormLabel-root ": {
                                      color: "black !important",
                                      fontSize: "16px",
                                    },
                                    "& .MuiInput-input": {
                                      color: "black",
                                    },
                                    ".MuiFilledInput-input": {
                                       backgroundColor: "#fff",
                                      borderBottom: "2px solid #1573a6",
                                      color: "black",
                                      fontSize: "16px",
                                    },
                                  }}
                                  label="Campus"
                                  variant="filled"
                                  key="Campus"
                                  onChange={(e) =>
                                    setCampus(e.target.value)}
                                />

                            <TextField
                                  sx={{
                                    width: "100%",
                                    "& .MuiFormLabel-root ": {
                                      color: "black !important",
                                      fontSize: "16px",
                                    },
                                    "& .MuiInput-input": {
                                      color: "black",
                                    },
                                    ".MuiFilledInput-input": {
                                       backgroundColor: "#fff",
                                      color: "black",
                                      fontSize: "16px",
                                    },
                                    ".MuiFilledInput-root":{
                                        backgroundColor: "#fff",
                                       borderBottom: "2px solid #1573a6",
                                    }
                                  }}
                                  multiline={true}
                                  rows = {3}
                                  label="Suggestion"
                                  variant="filled"
                                  key="Suggestion"
                                  onChange={(e) =>
                                    setDescription(e.target.value)}
                                />
                        </div>
                        <div className="col-md-12 pt-20">
                    <div className="row justify-content-center">
                      <button className="reg-btn" style={{ width: "fit-content" }}  onClick={handleSuggestionSubmit}>Submit</button>
                    </div>
                  </div>
               </div>
                </TabPanel>
                <TabPanel>
                <div className="row">
                                <div className='col-md-6'>
                                <TextField
                                  sx={{
                                    width: "100%",
                                    "& .MuiFormLabel-root ": {
                                      color: "black !important",
                                      fontSize: "16px",
                                    },
                                    "& .MuiInput-input": {
                                      color: "black",
                                    },
                                    ".MuiFilledInput-input": {
                                       backgroundColor: "#fff",
                                      borderBottom: "2px solid #1573a6",
                                      color: "black",
                                      fontSize: "16px",
                                    },
                                  }}
                                  label="Full Name"
                                  variant="filled"
                                  key="FullName"
                                  onChange={(e) =>
                                    setFullName(e.target.value)}
                                />
                                
                                <TextField
                                  sx={{
                                    width: "100%",
                                    "& .MuiFormLabel-root ": {
                                      color: "black !important",
                                      fontSize: "16px",
                                    },
                                    "& .MuiInput-input": {
                                      color: "black",
                                    },
                                    ".MuiFilledInput-input": {
                                       backgroundColor: "#fff",
                                      borderBottom: "2px solid #1573a6",
                                      color: "black",
                                      fontSize: "16px",
                                    },
                                  }}
                                  label="Campus"
                                  variant="filled"
                                  key="Campus"
                                  onChange={(e) =>
                                    setCampus(e.target.value)}
                                />
                                </div>
                                <div className='col-md-6'>
                                <TextField
                                  sx={{
                                    width: "100%",
                                    "& .MuiFormLabel-root ": {
                                      color: "black !important",
                                      fontSize: "16px",
                                    },
                                    "& .MuiInput-input": {
                                      color: "black",
                                    },
                                    ".MuiFilledInput-input": {
                                       backgroundColor: "#fff",
                                      borderBottom: "2px solid #1573a6",
                                      color: "black",
                                      fontSize: "16px",
                                    },
                                  }}
                                  label="Email Address"
                                  variant="filled"
                                  key="Email"
                                  onChange={(e) =>
                                    setEmail(e.target.value)}
                                />
                                
                                <TextField
                                  sx={{
                                    width: "100%",
                                    "& .MuiFormLabel-root ": {
                                      color: "black !important",
                                      fontSize: "16px",
                                    },
                                    "& .MuiInput-input": {
                                      color: "black",
                                    },
                                    ".MuiFilledInput-input": {
                                       backgroundColor: "#fff",
                                      borderBottom: "2px solid #1573a6",
                                      color: "black",
                                      fontSize: "16px",
                                    },
                                  }}
                                  label="Subject"
                                  variant="filled"
                                  key="Subject"
                                  onChange={(e) =>
                                    setSubject(e.target.value)}
                                />
                                </div>

                                <div className='col-md-12'>

                            <TextField
                                  sx={{
                                    width: "100%",
                                    "& .MuiFormLabel-root ": {
                                      color: "black !important",
                                      fontSize: "16px",
                                    },
                                    "& .MuiInput-input": {
                                      color: "black",
                                    },
                                    ".MuiFilledInput-input": {
                                       backgroundColor: "#fff",
                                      color: "black",
                                      fontSize: "16px",
                                    },
                                    ".MuiFilledInput-root":{
                                        backgroundColor: "#fff",
                                       borderBottom: "2px solid #1573a6",
                                    }
                                  }}
                                  multiline={true}
                                  rows = {3}
                                  label="Complaint or Query"
                                  variant="filled"
                                  key="Description"
                                  onChange={(e) =>
                                    setDescription(e.target.value)}
                                />
                        </div>
                        <div className="col-md-12 pt-20">
                    <div className="row justify-content-center">
                      <button className="reg-btn" style={{ width: "fit-content" }}  onClick={handleQuerySubmit}>Submit</button>
                    </div>
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


  export default Feedback;

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
@media (min-width: 1550px) {
    padding: 100px 250px;
  }
  @media (min-width: 1650px) {
    padding:100px 300px;
  }
  
  @media (min-width: 1720px) {
    padding: 100px 350px;
  }
  
  @media (min-width: 2200px) {
    padding: 100px 450px;
  }
  
  @media (min-width: 2450px) {
    padding: 100px 500px;
  }
  @media (max-width: 480px) {
    padding: 50px 15px;
  }
`;