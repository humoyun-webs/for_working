import React, { useEffect } from "react";
import "./style.scss";
import card1 from "../../assets/card1.svg";
import card2 from "../../assets/card2.svg";
import card3 from "../../assets/card3.svg";
import kor from "../../assets/kor.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import content from "../../localization/context"
const index = ({setlang,Lang}) => {

  const langs = content[Lang]
  const {courses} = langs
  console.log(courses);

  useEffect(() => {
    AOS.init();
    
  });
  return (
    <div className="kurslar">
      <div className="container">
        <h1 className="sar1">КУРСЫ</h1>
        <div className="cardss">
          <div className="card" data-aos="flip-left" data-aos-duration="1800">
            <img src={card1} alt="card1img" className="cardimg" />
            <div className="texts">
              <div className="lorems">
                <h3>
                  {courses.tx1}
                </h3>
                <h4>
                  {courses.tx2}
                </h4>
              </div>
              <p>
               {courses.tx3}
              </p>
              <div className="kor">
                <img src={kor} alt="" />
              </div>
            </div>
          </div>
          <div className="card" data-aos="flip-left" data-aos-duration="1800">
            <img src={card2} alt="card1img" className="cardimg" />
            <div className="texts">
              <div className="lorems">
              <h3>
                  {courses.tx1}
                </h3>
                <h4>
                  {courses.tx2}
                </h4>
              </div>
              <p>
               {courses.tx3}
              </p>
              <div className="kor">
                <img src={kor} alt="" />
              </div>
            </div>
          </div>
          <div className="card" data-aos="flip-left" data-aos-duration="1800">
            <img src={card3} alt="card1img" className="cardimg" />
            <div className="texts">
              <div className="lorems">
              <h3>
                  {courses.tx1}
                </h3>
                <h4>
                  {courses.tx2}
                </h4>
              </div>
              <p>
               {courses.tx3}
              </p>
              <div className="kor">
                <img src={kor} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
