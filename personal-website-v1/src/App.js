import "./App.css";
import FadeIn from "./scripts/FadeIn";
import React from "react";
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

// render components
function App() {
  const components = [
    <Intro />,
    <Skills />,
    <Experiences />,
    <Education />,
    <Projects />,
    <Contact />,
  ];

  const renderComponents = components.map(function (item) {
    return (
      <div>
        <Sidebar />
        <FadeIn> {item} </FadeIn>
      </div>
    );
  });

  return <div className="App">{renderComponents}</div>;
}

export default App;
