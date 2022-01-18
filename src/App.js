import React from 'react'
import './css/App.css'
import Nav from './components/nav'
import Hero from './components/hero'
import About from './components/about'
import Skills from './components/skills'
import Projects from'./components/projects'
import Footer from './components/footer'
import Contact from './components/contact'

const App = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
    </div>
  )
}

export default App
