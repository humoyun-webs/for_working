import React from 'react'
import Logo from "../../assets/logo.svg"
import Vector from "../../assets/Vector.svg"
import {NavLink} from "react-router-dom"
import facebook from "../../assets/facebook.svg"
import instagram from "../../assets/instagram.svg"
import linkedin from "../../assets/linkedin.svg"
import twitter from "../../assets/twitter.svg"
import "./style.scss"

function Index() {
  return (
    <>
      <footer className="footer">
        <div className="container footer-contents">
          <div className="footer-left">
            <NavLink className="footer__logo">
              <img src={Logo} width="390" height="95" alt="" />
            </NavLink>
            <h2 className="Education">Education</h2>
            <p className="edu__desc">
              Lorem ipsum dolor sit amet, consectetur adipis cing elit. Amet,
              vestibulum euismod nullam the elementum. Urna, posuere nisi sit
              gravid.
            </p>
          </div>
          <ul className="footer__list">
            <li className="footer__list__item">
              <ul className="footer-list-inline">
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">About Us</NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">Graduation</NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">Scholarship</NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">Admissions</NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">International</NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">Events</NavLink>
                </li>
              </ul>
            </li>
            <li className="footer__list__item">
              <ul className="footer-list-inline">
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">Language</NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">WordPress</NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">Privacy</NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">FAQs</NavLink>
                </li>
                <li className="footer-list-inline-item">
                  <img src={Vector} alt="" />
                  <NavLink className="footer__Link">Support</NavLink>
                </li>
              </ul>
            </li>
          </ul>
          <div className="footer-right">
            <p className="footer-left-title">Звонок по Узбекистану бесплатный</p>
            <strong className="phone__number">+998 (99) 99-99-99</strong>
            <button className="footer__btn">Перезвоните нам</button>
            <ul className="footer__social__media">
              <li className="footer__social_media_item">
                <img src={facebook} alt="" />
              </li>
              <li className="footer__social_media_item">
                <img src={instagram} alt="" />
              </li>
              <li className="footer__social_media_item">
                <img src={linkedin} alt="" />
              </li>
              <li className="footer__social_media_item">
                <img src={twitter} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index