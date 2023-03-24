import React, {useEffect} from 'react'
import Nuc from "../../assets/NUC.png"
import De from "../../assets/DE.png"
import Alina from "../../assets/Alina.png"
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.scss"

function Index() {
  useEffect(()=>{
    AOS.init()
  })
  return (
    <section className="Certications">
      <div className="container" data-aos="fade-left" data-aos-duration="3000">
        <h2 className="certificateHeading">СЕРТИФИКАТЫ</h2>
        <ul className="Certications-list">
          <li className="Certication">
            <img src={Nuc} alt="" />
          </li>
          <li className="Certication">
            <img src={De} alt="" />
          </li>
          <li className="Certication">
            <img src={Alina} alt="" />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Index