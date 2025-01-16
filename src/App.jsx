import './App.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import SocialLinks from './Components/SocialLinks'
import StarsCanvas from './Components/starBackground'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="h-full   w-screen">
      <StarsCanvas />
      <Navbar />
      <Home />
      <About />

      <Skills />
      <Projects />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  )
}

export default App
