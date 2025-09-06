import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ScrollToTop from "./components/ScrollToTop";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

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
