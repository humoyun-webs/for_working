import React, {useEffect} from "react";
import "./style.scss";
import light from "../../assets/lighting.svg";
import about from "../../assets/txt.png";
import man from "../../assets/Design.png";
import AOS from "aos";
import "aos/dist/aos.css";

const index = () => {

  useEffect(()=>{
    AOS.init()
  })
  return (
    <div className="about">
      <img src={light} alt="" className="light" />
      <div className="container about_inline" data-aos="fade-right" data-aos-duration="1800">
        <div className="text">
          <h1>О НАС</h1>
          <h5>
            Lorem ipsum dolor sit amet consectetur. Urna semper urna viverra
            pellentesque volutpat et vitae. Consequat felis ut in pellentesque
            feugiat malesuada varius. Aliquam egestas orci dui est eu. Commodo
            lobortis dolor volutpat enim. Tempor interdum aliquet at lorem nisi.
            Amet nec vel donec aliquet rhoncus faucibus. Bibendum dictumst
            ullamcorper nulla.
          </h5>
        </div>
        <div className="imgs">
          <img src={man} width="620" height="400" alt="manphoto" className="man" />
          <img src={about} alt="txt" className="txt" />
        </div>
      </div>
    </div>
  );
};

export default index;
