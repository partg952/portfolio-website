import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar.jsx';
import FirstSection from './FirstSection/FirstSection';
import Skills from './Skills/Skills';
import AboutMe from './About Me/AboutMe';
import Experience from './Experience/Experience';
import ContactUs from './ContactUs/ContactUs';
function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <AboutMe/>
      <Skills />
      <Experience />
      <ContactUs/>
    </div>
  );
}

export default App;
