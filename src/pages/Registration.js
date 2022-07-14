import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import BannerImg from "../images/Pages-Banner.jpg";
import Card from '../components/ImageCard';
import FileBase from "react-file-base64";
import RegProcess from "../images/Registration_Process.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import {
  submitInfo, fetchCampuses, fetchCities
} from "../store/RegistrationSlice";
import { Alert, Snackbar, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";

const steps = ["Team", "Player Two", "Player Three", "Player Four"];

const Registration = () => {


  const [activeStep, setActiveStep] = React.useState(0);
  const [registrationStatus, setRegistrationStatus] = React.useState('1');

  const [showAlert, setShowAlert] = React.useState(false);

  const { cities } = useSelector((state) => state.registration);
  const { data } = useSelector((state) => state.registration);
  const { msg } = useSelector((state) => state.registration);
  const { code } = useSelector((state) => state.registration);

  useEffect(() => {
    dispatch(fetchCampuses())
  }, []);

  useEffect(() => {
    dispatch(fetchCities())
  }, []);

  const [CampusType, setCampusType] = React.useState(0);
  const [TeamName, setTeamName] = React.useState("");
  const [PlayerMobile, setPlayerMobile] = React.useState("");
  const [PlayerEmail, setPlayerEmail] = React.useState("");
  const [PlayerCNIC, setPlayerCNIC] = React.useState("");
  const [PlayerName, setPlayerName] = React.useState("");
  const [PlayerIDProofURL, setPlayerIDProofURL] = React.useState("");
  const [PlayerSecondaryMobile, setPlayerSecondaryMobile] = React.useState("");
  const [PlayerCharacterID, setPlayerCharacterID] = React.useState("");
  const [PlayerDiscordID, setPlayerDiscordID] = React.useState("");
  const [PlayerIGN, setPlayerIGN] = React.useState("");
  const [CityID, setCityID] = React.useState("");
  const [CampusID, setCampusID] = React.useState("");
  const [PlayerTwoName, setPlayerTwoName] = React.useState("");
  const [PlayerTwoIDProofURL, setPlayerTwoIDProofURL] = React.useState("");
  const [PlayerTwoCharacterID, setPlayerTwoCharacterID] = React.useState("");
  const [PlayerTwoIGN, setPlayerTwoIGN] = React.useState("");
  const [PlayerThreeIGN, setPlayerThreeIGN] = React.useState("");
  const [PlayerThreeName, setPlayerThreeName] = React.useState("");
  const [PlayerThreeIDProofURL, setPlayerThreeIDProofURL] = React.useState("");
  const [PlayerThreeCharacterID, setPlayerThreeCharacterID] = React.useState("");
  const [PlayerFourIGN, setPlayerFourIGN] = React.useState("");
  const [PlayerFourName, setPlayerFourName] = React.useState("");
  const [PlayerFourIDProofURL, setPlayerFourIDProofURL] = React.useState("");
  const [PlayerFourCharacterID, setPlayerFourCharacterID] = React.useState("");


  const dispatch = useDispatch();
  const [filteredData, setFilteredData] = useState(data);
  const [filteredCities, setFilteredCities] = useState(cities);
  // setFilteredData(data);
  // console.log(filteredData);

  // console.log("cities:",cities);
  // console.log("campuses:",data);

  const setCityFilter = (value) => {

    setCampusType(value);

    let citiesFiltered = [];
    citiesFiltered = cities.filter((city) => {
      return city.CampusType == value;
    });
    setFilteredCities(citiesFiltered);
    console.log("cities:",citiesFiltered);

    let result = [];
    result = data.filter((campus) => {
      return campus.CampusType == value;
    });
    setFilteredData(result);
    setCityID("0");
  };

  const handleChangeCampuses = (value, type) => {
    let result = [];

    console.log(type);
    console.log(value);

    if (value > 0) {
      result = data.filter((campus) => {
        return campus.CampusType == type && campus.CityID == value;
      });
      setFilteredData(result);
    }

    setCityID(value);
    console.log(filteredData);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSoloSubmit = () => {
    let data = {
      RegistrationType: 1,
      ProjectType: 2,
      PlayerName: PlayerName,
      PlayerCNIC: PlayerCNIC,
      PlayerEmail: PlayerEmail,
      PlayerMobile: PlayerMobile,
      PlayerSecondaryMobile: PlayerSecondaryMobile,
      PlayerIDProofURL: PlayerIDProofURL,
      PlayerCharacterID: PlayerCharacterID,
      PlayerDiscordID: PlayerDiscordID,
      PlayerIGN: PlayerIGN,
      CityID: CityID,
      CampusID: CampusID
    };

    dispatch(submitInfo(data));
    setShowAlert(true);
  };

  const handleSquadSubmit = () => {
    let data = {
      RegistrationType: 2,
      ProjectType: 2,
      PlayerName: PlayerName,
      PlayerCNIC: PlayerCNIC,
      PlayerEmail: PlayerEmail,
      PlayerMobile: PlayerMobile,
      PlayerSecondaryMobile: PlayerSecondaryMobile,
      PlayerIDProofURL: PlayerIDProofURL,
      PlayerCharacterID: PlayerCharacterID,
      PlayerDiscordID: PlayerDiscordID,
      PlayerIGN: PlayerIGN,
      CityID: CityID,
      CampusID: CampusID,
      TeamName: TeamName,
      PlayerTwoName: PlayerTwoName,
      PlayerTwoIDProofURL: PlayerTwoIDProofURL,
      PlayerTwoCharacterID: PlayerTwoCharacterID,
      PlayerTwoIGN: PlayerTwoIGN,
      PlayerThreeName: PlayerThreeName,
      PlayerThreeIDProofURL: PlayerThreeIDProofURL,
      PlayerThreeCharacterID: PlayerThreeCharacterID,
      PlayerThreeIGN: PlayerThreeIGN,
      PlayerFourName: PlayerFourName,
      PlayerFourIDProofURL: PlayerFourIDProofURL,
      PlayerFourCharacterID: PlayerFourCharacterID,
      PlayerFourIGN: PlayerFourIGN

    };

    dispatch(submitInfo(data));
    setShowAlert(true);
  };

  return (
    <PageContainer>
      <Banner style={{ backgroundImage: `url(${BannerImg})` }}>
        <h2>Registration</h2>
        {/* <div className='row' style={{marginRight:"0px"}}>
                <div className="col-md-4 col-sm-4 col-xs-4" style={{textAlign:"center"}}>
                    <img src="https://pubgmcampus.s3.amazonaws.com/UCP_Lahore/_DSC7578_md.JPG"/>
                </div>
                <div className="col-md-8 col-sm-8 col-xs-8" style={{textAlign:"left", paddingLeft:"15px"}}>
                  <h2>Campus 01</h2>
                  <h4><b>City :</b> Lahore<br/>
                  <b>Visit Scheduled On:</b> Jan 17, 2022 to Jan 18, 2022</h4>
                </div>
              </div> */}
      </Banner>

      <Content>

        <div className="row justify-content-center">
          <div className="col-md-12 text-center">
            <h3 style={{ color: "#1c4294" }}>Registration Process</h3>
            {/* <p>Please make sure, you can get the PUBG Mobile Character ID and In-Game Name from the screen below</p> */}
            <div className="cta-img">
              <img className="mb-20" src={RegProcess} />
            </div>
          </div>
        </div>

        <Tabs>
          <TabList>
            <Tab>Solo Registration</Tab>
            <Tab>Squad Registration</Tab>
          </TabList>

          <TabPanel>
            <div id="SoloForm" className="row mt-30">
              <div className="col-12">
                <div className="contact-form" >
                  <h4 style={{ color: "#1c4294", textAlign: "center" }}>IMPORTANT:</h4>
                  <p style={{ textAlign: "center" }}>No Player can participate outside the university. The participate should be the university student.</p>
                  <input id="CampusID" name="CampusID" type="hidden" />
                  <input value="Solo" id="RegistrationType" name="RegistrationType" type="hidden" />
                  <div className="row">

                    <div className="col-md-6">
                      <div className="floating-label-group">

                        <select onChange={(e) => handleChangeCampuses(0, 2)}
                          // onChange={(e) =>
                          //   setCityID(e.target.value)}
                          defaultValue="2"
                          disabled>
                          <option value="">Select Campus Type</option>
                          <option value="1">Online</option>
                          <option value="2">Offline</option>
                        </select>
                      </div>
                      <div className="floating-label-group">

                        <select
                          onChange={(e) => handleChangeCampuses(e.target.value, 2)}
                        // onChange={(e) =>
                        //   setCityID(e.target.value)}
                        >
                          <option value="">Select City</option>
                          <option value="1">Islamabad</option>
                          <option value="2">Lahore</option>
                          <option value="3">Karachi</option>
                          <option value="5">Faisalabad</option>
                          <option value="6">Rawalpindi</option>
                          <option value="7">Sukkar</option>
                          {/* <option value="8">Swat</option>
                          <option value="9">Peshawar</option>
                          <option value="10">Sialkot</option>
                          <option value="11">Quetta</option>
                          <option value="12">Multan</option>
                          <option value="13">Swabi</option>
                          <option value="14">Hyderabad</option>
                          <option value="15">Gilgit</option>
                          <option value="16">Gujranawala</option> */}
                        </select>
                      </div>
                      <div className="floating-label-group">
                        <select onChange={(e) =>
                          setCampusID(e.target.value)}>
                          <option value="">Select Campus</option>
                          {
                            filteredData?.length ? filteredData.map((campus) => (
                              <option value={campus.ID}>{campus.FullName}</option>
                            )) : ""
                          }
                        </select>
                      </div>
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
                        label="Player Full Name"
                        variant="filled"
                        key="PlayerName"
                        onChange={(e) =>
                          setPlayerName(e.target.value)}
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
                        label="Player CNIC (XXXXX-XXXXXXX-X or XXXXXXXXXXXXX)"
                        variant="filled"
                        key="PlayerCNIC"
                        onChange={(e) =>
                          setPlayerCNIC(e.target.value)}
                      />
                      <label style={{ color: "#231f20", textAlign: "left", fontSize: "18px", marginTop: "10px", paddingRight: '20px' }}>Student ID Proof</label>
                     <div style={{ display: "inline-block", marginTop: "10px", fontFamily:"sans-serif" }}>
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            setPlayerIDProofURL(base64)
                          }
                          style={{ paddingBottom: "0px" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
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
                        label="Player Email Address"
                        variant="filled"
                        key="PlayerEmail"
                        onChange={(e) =>
                          setPlayerEmail(e.target.value)}
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
                        label="Primary Phone Number (0333-1234567 or 03331234567)"
                        variant="filled"
                        key="PlayerMobile"
                        onChange={(e) =>
                          setPlayerMobile(e.target.value)}
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
                        label="Player Secondary Phone Number (0333-1234567 or 03331234567)"
                        variant="filled"
                        key="SecondaryMobile"
                        onChange={(e) =>
                          setPlayerSecondaryMobile(e.target.value)}
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
                        label="Player Character ID (PUBG Mobile CharacterID)"
                        variant="filled"
                        key="PlayerCharacterID"
                        onChange={(e) =>
                          setPlayerCharacterID(e.target.value)}
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
                        label="Player IGN (In Game Name)"
                        variant="filled"
                        key="PlayerIGN"
                        onChange={(e) =>
                          setPlayerIGN(e.target.value)}
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
                        label="Player Discord ID (In Game)"
                        variant="filled"
                        key="PlayerDiscordID"
                        onChange={(e) =>
                          setPlayerDiscordID(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="col-md-12 pt-20">
                    <div className="row justify-content-center">
                      <button className="reg-btn" style={{ width: "fit-content" }} onClick={handleSoloSubmit}>Submit Application</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>

            <div id="SquadForm" className="row mt-30">
              <div className="col-12">
                <div className="contact-form" style={{ textAlign: "left" }}>
                  <input value="Squad" id="RegistrationType" name="RegistrationType" type="hidden" />
                  <div className="row">


                    <Stepper activeStep={activeStep} style={{ padding: '30px 5px' }}>
                      {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        return (
                          <Step
                            key={label}
                            {...stepProps}
                            sx={{
                              "& .MuiStepIcon-root.Mui-active": { color: "#1573a6" },
                              "& .MuiStepIcon-root.Mui-completed": { color: "#1573a6" },
                            }}
                          >
                            <StepLabel
                              sx={{
                                ".MuiStepLabel-label.Mui-active": { color: "#1573a6" },
                                ".MuiStepLabel-label": {
                                  color: "black",
                                  fontSize: "20px",
                                },
                                ".MuiStepLabel-label.Mui-completed": { color: "black" },
                              }}
                              {...labelProps}
                            >
                              {label}
                            </StepLabel>
                          </Step>
                        );
                      })}
                    </Stepper>
                    {activeStep === steps.length ? (
                      <React.Fragment>
                        {/* <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box> */}
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        {activeStep + 1 === 1 ? (
                          <div className="row">
                            <div className="col-md-6">
                              <div className="floating-label-group">

                                <select
                                // onChange={(e) => handleChangeCampuses(0 , e.target.value)}
                                onChange={(e) =>
                                  setCityFilter(e.target.value)}
                                >
                                  <option value="0">Select Campus Type</option>
                                  <option value="1">Online</option>
                                  <option value="2">Offline</option>
                                </select>
                              </div>
                              <div className="floating-label-group">

                                <select  value={CityID}
                                   onChange={(e) => handleChangeCampuses(e.target.value, CampusType)}
                                  // onChange={(e) =>
                                  //   setCityID(e.target.value)}
                                >
                                  
                                  <option value="0">Select City</option>
                                  {
                                    filteredCities?.length ? filteredCities.map((city) => (
                                      <option value={city.ID}>{city.CityName}</option>
                                    )) : ""
                                  }
                                  {/* <option value="1">Islamabad</option>
                                  <option value="2">Lahore</option>
                                  <option value="3">Karachi</option>
                                  <option value="5">Faisalabad</option>
                                  <option value="6">Rawalpindi</option>
                                  <option value="7" hidden={CampusType == 1? true:false}>Sukkar</option>
                                  <option value="8" hidden={CampusType == 2? true:false}>Swat</option>
                                  <option value="9" hidden={CampusType == 2? true:false}>Peshawar</option>
                                  <option value="10"hidden={CampusType == 2? true:false}>Sialkot</option>
                                  <option value="11" hidden={CampusType == 2? true:false}>Quetta</option>
                                  <option value="12" hidden={CampusType == 2? true:false}>Multan</option>
                                  <option value="13" hidden={CampusType == 2? true:false}>Swabi</option>
                                  <option value="14" hidden={CampusType == 2? true:false}>Hyderabad</option>
                                  <option value="15" hidden={CampusType == 2? true:false}>Gilgit</option>
                                  <option value="16" hidden={CampusType == 2? true:false}>Gujranawala</option> */}
                                </select>
                              </div>
                              <div className="floating-label-group">
                                <select required onChange={(e) =>
                                  setCampusID(e.target.value)}>
                                  <option value="">Select Campus</option>
                                  {
                                    filteredData?.length ? filteredData.map((campus) => (
                                      <option value={campus.ID}>{campus.FullName}</option>
                                    )) : ""
                                  }
                                </select>
                              </div>

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
                                label="Team Name"
                                variant="filled"
                                key="TeamName"
                                onChange={(e) =>
                                  setTeamName(e.target.value)}
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
                                label="Email Address"
                                variant="filled"
                                key="PlayerEmail"
                                onChange={(e) =>
                                  setPlayerEmail(e.target.value)}
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
                                label="Captain CNIC"
                                variant="filled"
                                key="PlayerCNIC"
                                onChange={(e) =>
                                  setPlayerCNIC(e.target.value)}
                              />
                            </div>

                            <div className="col-md-6">
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
                                label="Primary Phone Number (0333-1234567 or 03331234567)"
                                variant="filled"
                                key="PlayerMobile"
                                onChange={(e) =>
                                  setPlayerMobile(e.target.value)}
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
                                label="Player Secondary Phone Number (0333-1234567 or 03331234567)"
                                variant="filled"
                                key="SecondaryMobile"
                                onChange={(e) =>
                                  setPlayerSecondaryMobile(e.target.value)}
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
                                label="Player One Name"
                                variant="filled"
                                key="PlayerOneName"
                                onChange={(e) =>
                                  setPlayerName(e.target.value)}
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
                                label="Player One In-Game Name"
                                variant="filled"
                                key="PlayerOneIGN"
                                onChange={(e) =>
                                  setPlayerIGN(e.target.value)}
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
                                label="Player One Character ID"
                                variant="filled"
                                key="PlayerCharacterID"
                                onChange={(e) =>
                                  setPlayerCharacterID(e.target.value)}
                              />
                              <label style={{ color: "#231f20", textAlign: "left", fontSize: "18px", marginTop: "10px", paddingRight: '10px' }}>Player Student ID Proof</label>
                             <div style={{ display: "inline-block", marginTop: "10px", fontFamily:"sans-serif" }}>
                                <FileBase
                                  id="P1File"
                                  type="file"
                                  multiple={false}
                                  onDone={({ base64 }) =>
                                    setPlayerIDProofURL(base64)
                                  }
                                  style={{ paddingBottom: "0px" }}
                                />
                              </div>

                            </div>
                          </div>
                        ) : activeStep + 1 === 2 ? (
                          activeStep + 1 === 2 && (
                            <div className='row'>
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
                                  label="Player Two Name"
                                  variant="filled"
                                  key="PlayerTwoName"
                                  onChange={(e) =>
                                    setPlayerTwoName(e.target.value)}
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
                                  label="Player Two In-Game Name"
                                  variant="filled"
                                  key="PlayerTwoIGN"
                                  onChange={(e) =>
                                    setPlayerTwoIGN(e.target.value)}
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
                                  label="Player Two Character ID"
                                  variant="filled"
                                  key="PlayerTwoCharacterID"
                                  onChange={(e) =>
                                    setPlayerTwoCharacterID(e.target.value)}
                                />
                                <label style={{ color: "#231f20", textAlign: "left", fontSize: "18px", marginTop: "10px", paddingRight: '10px' }}>Player Two Student ID Proof</label>
                               <div style={{ display: "inline-block", marginTop: "10px", fontFamily:"sans-serif" }}>
                                  <FileBase
                                  id="P2File"
                                  name="P2File"
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) =>
                                      setPlayerTwoIDProofURL(base64)
                                    }
                                    style={{ paddingBottom: "0px" }}
                                  />
                                </div>
                              </div>
                            </div>
                          )) : activeStep + 1 === 3 ? (
                            activeStep + 1 === 3 && (
                              <div className='row'>
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
                                    label="Player Three Name"
                                    variant="filled"
                                    key="PlayerThreeName"
                                    onChange={(e) =>
                                      setPlayerThreeName(e.target.value)}
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
                                    label="Player Three In-Game Name"
                                    variant="filled"
                                    key="PlayerThreeIGN"
                                    onChange={(e) =>
                                      setPlayerThreeIGN(e.target.value)}
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
                                    label="Player Three Character ID"
                                    variant="filled"
                                    key="PlayerThreeCharacterID"
                                    onChange={(e) =>
                                      setPlayerThreeCharacterID(e.target.value)}
                                  />
                                  <label style={{ color: "#231f20", textAlign: "left", fontSize: "18px", marginTop: "10px", paddingRight: '10px' }}>Player Three Student ID Proof</label>
                                  <div style={{ display: "inline-block", marginTop: "10px", fontFamily:"sans-serif" }}>
                                    <FileBase
                                  id="P3File"
                                  name="P3File"
                                      type="file"
                                      multiple={false}
                                      onDone={({ base64 }) =>
                                        setPlayerThreeIDProofURL(base64)
                                      }
                                      style={{ paddingBottom: "0px" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            )) : (
                          activeStep + 1 === 4 && (
                            <div className='row'>
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
                                  label="Player Four Name"
                                  variant="filled"
                                  key="PlayerFourName"
                                  onChange={(e) =>
                                    setPlayerFourName(e.target.value)}
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
                                  label="Player Four In-Game Name"
                                  variant="filled"
                                  key="PlayerFourIGN"
                                  onChange={(e) =>
                                    setPlayerFourIGN(e.target.value)}
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
                                  label="Player Four Character ID"
                                  variant="filled"
                                  key="PlayerFourCharacterID"
                                  onChange={(e) =>
                                    setPlayerFourCharacterID(e.target.value)}
                                />
                                <label style={{ color: "#231f20", textAlign: "left", fontSize: "18px", marginTop: "10px", paddingRight: '10px' }}>Player Four Student ID Proof</label>
                               <div style={{ display: "inline-block", marginTop: "10px", fontFamily:"sans-serif" }}>
                                  <FileBase
                                  id="P4File"
                                  name="P4File"
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) =>
                                      setPlayerFourIDProofURL(base64)
                                    }
                                    style={{ paddingBottom: "0px" }}
                                  />
                                </div>
                              </div>
                            </div>
                          )
                        )}
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            padding: "16px 50px",
                            marginBottom: "60px"
                          }}
                        >
                          <button
                            className="reg-btn"
                            width="auto"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                          >
                            Back
                          </button>
                          <Box sx={{ flex: "1 1 auto" }} />
                          {/* {isStepOptional(activeStep) && (
                <button 
                className="reg-btn" color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </button> 
              )}*/}

                          {activeStep === steps.length - 1 ? (
                            <button
                              className="reg-btn" width="auto" onClick={handleSquadSubmit}>
                              Submit Application
                            </button>
                          ) : (
                            <button
                              className="reg-btn" width="auto" onClick={handleNext} >
                              Next
                            </button>
                          )}
                        </Box>
                      </React.Fragment>
                    )}
                  </div>

                </div>
              </div>
            </div>

          </TabPanel>
        </Tabs>

        {/* <div className="col-md-12">
                        <h3 style={{color: "#00aa54"}}>Registrations are closed for Punjab University, Lahore</h3>
                    </div> */}
        <Snackbar
          open={showAlert}
          autoHideDuration={6000}
          onClose={() => setShowAlert(false)}
        >
          {code === "1" ? (
            <Alert
              onClose={() => setShowAlert(false)}
              variant="filled"
              severity="success"
              sx={{ width: "100%" }}
            >
              {msg}
            </Alert>
          ) : code === "2" ? (
            <Alert
              onClose={() => setShowAlert(false)}
              variant="filled"
              severity="error"
              sx={{ width: "100%" }}
            >
              {msg}
            </Alert>
          ) : code === "3" ? (
            <Alert
              onClose={() => setShowAlert(false)}
              variant="filled"
              severity="info"
              sx={{ width: "100%" }}
            >
              {msg}
            </Alert>
          ) : code === "4" ? (
            <Alert
              onClose={() => setShowAlert(false)}
              variant="filled"
              severity="info"
              sx={{ width: "100%" }}
            >
              {msg}
            </Alert>
          ) : (
            code === "5" && (
              <Alert
                onClose={() => setShowAlert(false)}
                variant="filled"
                severity="info"
                sx={{ width: "100%" }}
              >
                {msg}
              </Alert>
            )
          )}
        </Snackbar>
      </Content>
    </PageContainer>
  );
};


export default Registration;

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
    // text-align:center;
    display:block;
  }

  img{
    height:150px;
  }

  @media (max-width: 480px) {
     padding: 40px 0px;
    height: 150px;

    h2 {
        font-size: 14px;
        text-align:center;
      }

      h4{
        font-size:12px;
        text-align:center;
      }

      img{
        height:50px;
        text-align:center;
      }
  }
`;

const Content = styled.div`
padding:100px;

form input[type="file"]{
  padding-bottom:0px;
}

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