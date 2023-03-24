import React  from 'react'
import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Cards from "./components/cards"
import Courses from "./components/kurslar"
import Footer from "./components/Footer/Index"
import Order from "./components/Order/Index"
import Mentors from "./components/Mentors/Index"
import News from "./components/News/Index"
import Certifiates from "./components/Certificates"

function App() {

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Cards/>
      <Courses/>
      <Mentors/>
      <News/>
      <Certifiates/>
      <Order/>
      <Footer/>
    </div>
  )
}

export default App
