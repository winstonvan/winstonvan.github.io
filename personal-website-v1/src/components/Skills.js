import React from "react";
import "../styles/Skills.css";

function Skills() {
  return (
    <section className="skills">
      <div className="header">SKILLS</div>

      <div className="content">
        <div className="skill">
          <div className="skills__category">
            <div className="skills__header">Languages</div>
            <ul className="items">
              <li className="item">Java</li>
              <li className="item">C++</li>
              <li className="item">C#</li>
              <li className="item">Javascript</li>
              <li className="item">CSS</li>
              <li className="item">HTML</li>
              <li className="item">PHP</li>
            </ul>
          </div>

          <div className="skills__category">
            <div className="skills__header">Frameworks</div>
            <ul className="items">
              <li className="item">React</li>
              <li className="item">SQL</li>
              <li className="item">Firebase</li>
              <li className="item">Wordpress</li>
            </ul>
          </div>

          <div className="skills__category">
            <div className="skills__header">Tools</div>
            <ul className="items">
              <li className="item">Git</li>
              <li className="item">Github</li>
              <li className="item">Bash</li>
              <li className="item">Chrome DevTools</li>
            </ul>
          </div>

          <div className="skills__category">
            <div className="skills__header">Design</div>
            <ul className="items">
              <li className="item">Photoshop</li>
              <li className="item">Figma</li>
              <li className="item">Prototyping</li>
              <li className="item">Wireframing</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
