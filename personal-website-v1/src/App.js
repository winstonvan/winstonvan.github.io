import './App.css';
import Intro from './components/Intro'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Intro />
      <Skills />
      <Experience />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
