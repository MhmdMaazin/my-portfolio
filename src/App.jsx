import React from 'react'
import Home from './pages/Home'
import Skills from './components/Skills'
import Education from './components/Education'
import Navbar from './components/Navbar'
import About from './components/About'
import Footer from './components/Footer'
import Projects from './components/Projects'
import Contact from './components/Contact'
import CustomCursor from './utils/CursorAnimation'

export default function App() {
  return (
    <div className='font-sora scroll-smooth overflow-x-hidden'>
      <CustomCursor/>
      <Navbar />
      <Home />
      <Skills />
      <Education />
      <About />
      <Projects />
      <Contact />

      <Footer />
    </div>
  )
}
