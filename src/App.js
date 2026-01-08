import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';
import Certifications from './Components/Certifications/Certifications';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Education/>
      <Certifications/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
