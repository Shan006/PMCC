import  React, { useState, useEffect } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope} from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
    fetchUpcomingCampus
} from "../store/RegistrationSlice";
import { useDispatch, useSelector } from 'react-redux';

const TopHeader = () => {

    const { campus } = useSelector((state) => state.registration);
    const { msg } = useSelector((state) => state.registration);
  
    useEffect(() => {
      dispatch(fetchUpcomingCampus())
    }, []);
    
  const dispatch = useDispatch();

    let currentDate = new Date();
    let regDate = new Date(campus.VisitStartDate);

    let Difference_In_Time = regDate.getTime() - currentDate.getTime();
    let Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));

  return (
      <Container>
<div class="header-top-area">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="header-top-offer">


                                <p>  {campus.FullName} ! Upcoming University </p>
                                <div class="time-count"><span>{Difference_In_Days}</span>Days</div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="header-top-right">
                            <div class="header-social">
                                <ul>
                                    <li><a href="https://www.facebook.com/PUBGM.PK.OFFICIAL/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                    <li><a href="https://www.youtube.com/PUBGMOBILEPakistan/"><FontAwesomeIcon icon={faYoutube} /></a></li>
                                    <li><a href="https://www.instagram.com/pubgm.pk.official/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>
                            </div>
                            <div class="header-top-action">
                                <ul>
                                    <li>
                                        <div class="header-top-mail">
                                            <p><span>|</span><FontAwesomeIcon icon={faEnvelope} style={{paddingRight:'5px', color:'#93D2E0'}} /><a href="mailto:contact@pmcc.pk">contact@pmcc.pk</a></p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Container>

);
};

export default TopHeader;

const Container = styled.div`
  width: 100%;
`;