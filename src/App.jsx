import NavBar from "./components/NavBar";
import Body from "./components/Body";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import  ScrollToTop from "./components/ScrollToTop"

function App() {
  
  return (
    
    <>
      <NavBar />
      <Body /> 
      <About /> 
      <Skills /> 
      <Experience /> 
      <Education /> 
      <Portfolio /> 
      <Projects /> 
      <Contact /> 
      <ScrollToTop />
    </>
  );
}

export default App;
