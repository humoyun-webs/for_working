import React, {useState}  from 'react'
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
  const [language, setlanguage] = useState("ru")
  return (
    <div className="App">
      <Header setlang={setlanguage} Lang ={language}/>
      <Hero setlang={setlanguage} Lang ={language}/>
      <About setlang={setlanguage} Lang ={language}/>
      <Cards setlang={setlanguage} Lang ={language}/>
      <Courses setlang={setlanguage} Lang ={language}/>
      <Mentors setlang={setlanguage} Lang ={language}/>
      <News setlang={setlanguage} Lang ={language}/>
      <Certifiates setlang={setlanguage} Lang ={language}/>
      <Order setlang={setlanguage} Lang ={language}/>
      <Footer setlang={setlanguage} Lang ={language}/>
    </div>
  )
}

export default App
