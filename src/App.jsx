import NavBar from "./components/NavBar";
import Body from "./components/Body";
import About from "./components/Abouts";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";

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
    </>
  );
}

export default App;
