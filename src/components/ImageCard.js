import React, { useEffect } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare} from '@fortawesome/free-regular-svg-icons';

import { Link } from "react-router-dom";
//import { fetchGameInfo } from "../store/gameSlice";
//import { useDispatch, useSelector } from "react-redux";

const CampusCard = ({ id, title, subtitle, image, imageSmall  }) => {

  return (
    
    <div className="col-lg-6 col-md-6 col-sm-8 image">
    <div className="mb-60">  
        <div className="img-wrapper chair-product-thumb">
            <a href={image}>
            <img src={imageSmall} alt=""/></a>
         <div className="img-overlay" >
         <FontAwesomeIcon icon={faPlusSquare} />
{/* <i className="fa fa-plus-circle" aria-hidden="true"></i> */}
</div>
        </div>
        
    </div>
</div>
    
    // <Link key={id} to={`/registration` } style={{ textDecoration: "none" }}>
    
    // <Content style={{ backgroundImage: `url(${image})` }}>
    //   <Bottom>
    //     <DateArea>
    //       <strong>{name}</strong>
    //       {"[]"}
    //     </DateArea>
    //   </Bottom>
    // </Content>
    // </Link>
  );
};

export default CampusCard;

