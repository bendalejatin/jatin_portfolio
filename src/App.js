import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import skills from './Components/skills/skills';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Education from './Components/Education/Education';
import Certifications from './Components/Certifications/Certifications';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <skills/>
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
