import React from 'react'
import Nav from "../src/components/nav/Nav"
import AboutMe from "../src/components/About Me/AboutMe"
import Projects from './components/projects/projects'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Nav/>
        {/* <Body/> */}        
        <AboutMe/>
        <Projects/>
        <Footer/>
        
    </div>
  )
  
}

export default App
