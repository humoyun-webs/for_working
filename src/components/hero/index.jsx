import React from "react";
import "./style.scss";
import chiziq1 from "../../assets/chiziq1.png";
import chiziq2 from "../../assets/chiziq2.png";
import light from "../../assets/lightning.png"


const index = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="texts">
          <h1>Lorem ipsum dolor sit amet</h1>
          <h6>
            Lorem ipsum dolor sit amet consectetur. Tincidunt aliquet dictum{" "}
            <br />
            sodales bibendum etiam viverra mollis amet. Urna sed molestie <br />{" "}
            auctor nisi.
          </h6>
          <div className="btns">
            <button>Lorem, ipsum dolor.</button>
            <button>Lorem, ipsum dolor.</button>
          </div>
          <img src={chiziq1} alt="chiziqcha" className="line1"/>
          <img src={chiziq2} alt="chiziqcha"  className="line2"/>
        
        </div>

      </div>
    </div>
  );
};

export default index;
