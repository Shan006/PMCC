import React, { useState } from "react";
import { Link } from "react-router-dom";
import Smart from "../images/Smart.webp";
import Strategic from "../images/Strategic.webp";
import Spirited from "../images/Spirited.webp";
import Successive from "../images/Successive.webp";

const StudentMarketer = () => {
  var Motivation = [
    {
      img: Smart,
      heading: "Smart",
      content: "Smart Methodology , Smart Work & Smart Communication",
    },
    {
      img: Strategic,
      heading: "Strategic",
      content: "Strategic Structuring, Strategic Mindset, Strategic Approach",
    },
    {
      img: Spirited,
      heading: "Spirited",
      content: "Spirited Energy, Spirited Lifestyle, Spirited Workstyle",
    },
    {
      img: Successive,
      heading: "Successive",
      content: "Successive Dream, Successive Goal, Successive Life",
    },
  ];
  return (
    <>
      <div className="Students">
        <div className="main_div">
          <div className="bimage"></div>
          <div className="content">
            <h1 className="heading">
              Student <span className="marketer_keyword">Marketeer</span>
            </h1>
            <p className="wording">
              If you're ready to take on the challenge, we want to hear from
              you. Most jobs take energy. This one gives it.
            </p>
            {Motivation.map((e) => {
              const { img, heading, content } = e;
              return (
                <>
                  <div className="visual_content_Motivation">
                    <img src={img} alt="Image" />
                    <div className="Motivation">
                      <h5 className="keyword">{heading}</h5>
                      <h5 className="specs">{content}</h5>
                    </div>
                  </div>
                </>
              );
            })}
            {/* <div className="getstarted"> */}
            {/* <button onClick={redirect}>Get Started</button> */}
            <Link to="/studentmarketer">
              <div className="getstarted">
                <h4>Get Started</h4>
              </div>
            </Link>
            <div className="borderline"></div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentMarketer;
