import "./App.css";
import React, { Suspense } from "react";

// lazy loading components
import Sidebar from "./components/Sidebar";
const Intro = React.lazy(() => import("./components/Intro"));
const Experience = React.lazy(() => import("./components/Experience"));
const Projects = React.lazy(() => import("./components/Projects"));
const Education = React.lazy(() => import("./components/Education"));
const Skills = React.lazy(() => import("./components/Skills"));
const Footer = React.lazy(() => import("./components/Footer"));

// render components
function App() {
  return (
    <div className="App">
      <Sidebar />

      <FadeInSection>
        <Suspense fallback={<div></div>}>
          <Intro />
        </Suspense>
      </FadeInSection>

      <FadeInSection>
        <Suspense fallback={<div></div>}>
          <Skills />
        </Suspense>
      </FadeInSection>

      <FadeInSection>
        <Suspense fallback={<div></div>}>
          <Experience />
        </Suspense>
      </FadeInSection>

      <FadeInSection>
        <Suspense fallback={<div></div>}>
          <Education />
        </Suspense>
      </FadeInSection>

      <FadeInSection>
        <Suspense fallback={<div></div>}>
          <Projects />
        </Suspense>
      </FadeInSection>

      <FadeInSection>
        <Suspense fallback={<div></div>}>
          <Footer />
        </Suspense>
      </FadeInSection>
    </div>
  );
}

// fade in transition
function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default App;
