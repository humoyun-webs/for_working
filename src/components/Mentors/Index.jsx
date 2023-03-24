import React, {useEffect} from 'react'
import Madina from "../../assets/Madina.png"
import Arina from "../../assets/Adriana.png"
import Alina from "../../assets/Alina.png"
import Andrey from "../../assets/Andrey.png"
import { useSpring, animated } from "react-spring";
import AOS from "aos";
import "aos/dist/aos.css";
import "./style.scss"

function Index() {
  useEffect(()=>{
    AOS.init()
  })
      function Number({ n }) {
        const { number } = useSpring({
          from: { number: 0 },
          number: n,
          delay: 200,
          config: { mass: 1, tension: 20, friction: 10 },
        });
        return (
          <animated.div className="animatedDiv">
            {number.to((n) => n.toFixed(0))}
          </animated.div>
        );
      }
  return (
    <>
      <section className="mentors">
        <div className="container">
          <h2>НАСТАВНИКИ</h2>
          <ul
            className="mentors-list"
            data-aos="fade-right"
            data-aos-duration="5000"
          >
            <li
              className="mentor"
              data-aos="fade-right"
              data-aos-duration="5000"
            >
              <img src={Alina} alt="" /> <span>Алина</span>
            </li>
            <li
              className="mentor"
              data-aos="fade-right"
              data-aos-duration="5000"
            >
              <img src={Madina} alt="" /> <span>Мадина</span>
            </li>
            <li
              className="mentor"
              data-aos="fade-right"
              data-aos-duration="5000"
            >
              <img src={Arina} alt="" /> <span>Арина</span>
            </li>
            <li className="mentor">
              <img src={Andrey} alt="" /> <span>Андрей</span>
            </li>
          </ul>
          <div className="StatCardsWrapper">
            <div
              className="StatCard"
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <strong className="StatNumber">
                <Number n={60000} />+
              </strong>
              <p className="StatType">Lorem ipsum dolor sit amet</p>
            </div>
            <div
              className="StatCard"
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <strong className="StatNumber">
                <Number n={150} />+
              </strong>
              <p className="StatType">Lorem ipsum dolor sit amet</p>
            </div>
            <div
              className="StatCard"
              data-aos="flip-down"
              data-aos-duration="1000"
              data-aos-delay="50"
            >
              <strong className="StatNumber">
                <Number n={183000} />
              </strong>
              <p className="StatType">Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Index