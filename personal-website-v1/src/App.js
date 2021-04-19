import "./App.css";
import React, { Suspense } from "react";
import FadeIn from "./Scripts/FadeIn";

// lazy loading components
const Sidebar = React.lazy(() => import("./components/Sidebar"));
const Intro = React.lazy(() => import("./components/Intro"));
const Experience = React.lazy(() => import("./components/Experience"));
const Projects = React.lazy(() => import("./components/Projects"));
const Education = React.lazy(() => import("./components/Education"));
const Skills = React.lazy(() => import("./components/Skills"));
const Contact = React.lazy(() => import("./components/Contact"));

// render components
function App() {
  return (
    <div className="App">
      <Suspense fallback={<div></div>}>
        <Sidebar />
      </Suspense>

      <FadeIn>
        <Suspense fallback={<div></div>}>
          <Intro />
        </Suspense>
      </FadeIn>

      <FadeIn>
        <Suspense fallback={<div></div>}>
          <Skills />
        </Suspense>
      </FadeIn>

      <FadeIn>
        <Suspense fallback={<div></div>}>
          <Experience />
        </Suspense>
      </FadeIn>

      <FadeIn>
        <Suspense fallback={<div></div>}>
          <Education />
        </Suspense>
      </FadeIn>

      <FadeIn>
        <Suspense fallback={<div></div>}>
          <Projects />
        </Suspense>
      </FadeIn>

      <FadeIn>
        <Suspense fallback={<div></div>}>
          <Contact />
        </Suspense>
      </FadeIn>
    </div>
  );
}

export default App;
