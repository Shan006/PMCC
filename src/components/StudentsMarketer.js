import React from "react";
import Smart from "../images/Smart.webp";
import Strategic from "../images/Strategic.webp";
import Spirited from "../images/Spirited.webp";
import Successive from "../images/Successive.webp";
import BannerImg from "../images/Pages-Banner.jpg";
const StudentsMarketer = () => {
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
      <div className="main_container">
        <div className="characteristics">
          {Motivation.map((e) => {
            const { img, heading, content } = e;
            return (
              <>
                <div className="motivation">
                  <img src={img} alt="Image" />
                  <div className="SpecialWords">
                    <h5 className="keyword">{heading}</h5>
                    <h5 className="specs">{content}</h5>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="studentMarketer">
          <div>
            <h1 className="heading">
              Student <span className="marketer_keyword">Marketeer</span>
            </h1>
            <p className="wording">
              This is definitely not your average 9-5 job! As a Tencent Student
              Marketeer, you'll be empowered to develop and deliver tailor-made
              services & ideas related to gaming industry to hit our goals in
              the most relevant way thanks to your in-depth local knowledge.
            </p>
          </div>
          <div className="form">
            <div className="sec1">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="CNIC" />
            </div>
            <div className="sec2">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="City" />
            </div>
            <div className="sec3">
              <input type="text" placeholder="Email Adress" />
              <input type="text" placeholder="Campus" />
            </div>
          </div>
          <div className="submit">
            <button>SUBMIT APPLICATION</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentsMarketer;
