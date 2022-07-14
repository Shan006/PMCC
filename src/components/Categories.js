import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import category2 from "../images/category-1.svg";
import category3 from "../images/category-2.svg";
import category1 from "../images/category-3.svg";

const Categories = () => {
  return (
    <Container>
      <div className="Categories">
        <div className="row" style={{ marginRight: '0px' }}>
          <div className="col-lg-3 col-sm-6" style={{ padding: '0px', backgroundColor: '#896cba' }}>
          <Link to={{ pathname: `/registration` }}>
            <div className="CategoryBox">
              {/* <img src={category1} style={{ height:"50px" }} /> */}
              <p><span className="count-circle">16</span></p>
              <h5>Online Campuses</h5>
              <p>Click to Register</p>
            </div>
          </Link>
          </div>
          <div className="col-lg-3 col-sm-6" style={{ padding: '0px', backgroundColor: '#1775a5' }}>
          <Link to={{ pathname: `/registration` }}>
            <div className="CategoryBox">
              {/* <img src={category2} style={{ height:"50px" }} /> */}
              <p><span className="count-circle">16</span></p>
              <h5 >Offline Campuses</h5>
              <p>Click to Register</p>
            </div>
          </Link>
          </div>
          <div className="col-lg-3 col-sm-6" style={{ padding: '0px', backgroundColor: '#5ce9ff' }}>
          <Link to={{ pathname: `/registration` }}>
            <div className="CategoryBox">
              {/* <img src={category3} style={{ height:"50px" }} /> */}
              <p><span className="count-circle">10</span></p>
              <h5 >Designer Campuses</h5>
              <p>Click to Register</p>
            </div>
          </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Categories;

const Container = styled.div`
  width: 100%;
`;
