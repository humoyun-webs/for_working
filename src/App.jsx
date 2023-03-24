import React  from 'react'
import Header from "./components/header/Index"
import Hero from "./components/hero/index"
import About from "./components/about/index"
import Cards from "./components/cards/index"
import Courses from "./components/kurslar/index"
import Footer from "./components/Footer/Index"
import Order from "./components/Order/Index"
import Mentors from "./components/Mentors/Index"
import News from "./components/News/Index"
import Certifiates from "./components/Certificates/Index"

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
