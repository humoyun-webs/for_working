import React, {useState} from 'react'
import {NavLink} from "react-router-dom"
import Logo from "../../assets/logo.svg"
import topBG from  "../../assets/topBG.jpg"
import Palts from "../../assets/heropalts.svg"
import RU from "../../assets/ru.png"
import UZ from "../../assets/uz.png"
import "./style.scss"

function Index() {

  const [lang, setLang] = useState("ru")


  return (
    <header className="header">
      <div className="container headContents">
        <img
          src={topBG}
          width="1000"
          height="700"
          className="topBG"
          alt="background photo"
        />
        <nav className="navbar">
          <NavLink>
            <img src={Logo} alt="Logotip" />
          </NavLink>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link">О НАС</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link">КУРСЫ</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link">НОВОСТИ</NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link">НАСТАВНИКИ</NavLink>
            </li>
          </ul>

          <div className="LangHeader">
            <img src={lang === "ru" ? RU : UZ} width="18" height="18" alt="" />
            <select
              name="lang"
              id="lang"
              className="setLang"
              onChange={(e) => setLang(e.target.value)}
            >
              <option value="ru">RU</option>
              <option value="uz">UZ</option>
            </select>
          </div>

          <button className='buttoncha'>КОНТАКТЫ</button>
        </nav>
        <img
          src={Palts}
          width="550"
          height="450"
          className="finger"
          alt="barmoq izi"
        />
      </div>
    </header>
  );
}

export default Index