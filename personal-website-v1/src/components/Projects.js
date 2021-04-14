import React from "react";
import "../styles/Projects.css";
import "../styles/fontawesome/css/all.css";

function Projects() {
  return (
    <section className="projects">
      <div className="header">PROJECTS</div>

      <div className="content">
        <FadeInSection>
          <div className="project">
            <div className="project__portfolio">
              <figure className="project__images">
                <div className="laptop">
                  <img src={"portfolio/mockup.png"} alt="" />
                </div>
              </figure>
            </div>
            <div className="project__name">
              <a
                href="https://winstonvan.github.io"
                target="_blank"
                rel="noreferrer"
              >
                winstonvan.github.io
                <span className="arrow">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </a>
            </div>
            <div className="project__description">
              A responsive and mobile-friendly portfolio website created using
              React.js.
              <a
                className="source"
                href="https://github.com/winstonvan/winstonvan.github.io"
              >
                View source
              </a>
            </div>
            <div className="project__languages">React</div>
            <div className="project__languages">CSS</div>
            <div className="project__languages">HTML</div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="project">
            <div className="project__inform">
              <figure className="project__images">
                <div className="phone">
                  <img src={"inform/mockup1.png"} alt="" />
                </div>
                <div className="phone">
                  <img src={"inform/mockup2.png"} alt="" />
                </div>
                <div className="phone">
                  <img src={"inform/mockup3.png"} alt="" />
                </div>
              </figure>
            </div>
            <div className="project__name">
              <a
                href="https://github.com/winstonvan/Inform"
                target="_blank"
                rel="noreferrer"
              >
                Inform
                <span className="arrow">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </a>
            </div>
            <div className="project__description">
              Internet Gaming Disorder Assessment Tool. This tool is based on
              the first standardized psychometric tool to assess Internet Gaming
              Disorder (Pontes et al., 2014). This tool was inspired by the
              increasing gaming addictions and mental health concerns among
              youths.
              <a className="source" href="https://github.com/winstonvan/Inform">
                View source
              </a>
            </div>
            <div className="project__languages">Android</div>
            <div className="project__languages">Java</div>
            <div className="project__languages">Firebase</div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="project">
            <div className="project__chat">
              <figure className="project__images">
                <div className="laptop">
                  <img src={"chat-app/mockup1.png"} alt="" />
                </div>
              </figure>
            </div>
            <div className="project__name">
              <a
                href="https://lit-shelf-68563.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                A Chat App
                <span className="arrow">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </a>
            </div>
            <div className="project__description">
              A responsive and mobile-friendly chat application built using
              React.js and Firebase. Uses BrowserRouter for page navigation and
              themed with MaterialUI.
              <a
                className="source"
                href="https://github.com/winstonvan/messenger-clone"
              >
                View source
              </a>
            </div>
            <div className="project__languages">React</div>
            <div className="project__languages">CSS</div>
            <div className="project__languages">HTML</div>
            <div className="project__languages">Firebase</div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="project">
            <div className="project__name">
              <a
                href="https://github.com/winstonvan/Studium"
                target="_blank"
                rel="noreferrer"
              >
                Studium
                <span className="arrow">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </a>
            </div>
            <div className="project__description">
              Studium is a virtual tutoring application written in Java for
              Android. It is designed to assist and enhance learning at the
              user's convenience. Uses a combination of PHP and mySQL to store
              data. <br />
              <br />
              Features:
              <ul className="features">
                <li className="item">Question search</li>
                <li className="item">Submit question</li>
                <li className="item">Answer to other user's questions</li>
                <li className="item">Chat (1:1)</li>
              </ul>
              <a
                className="source"
                href="https://github.com/winstonvan/Studium"
              >
                View source
              </a>
            </div>
            <div className="project__languages">Java</div>
            <div className="project__languages">Android</div>
            <div className="project__languages">PHP</div>
            <div className="project__languages">SQL</div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="project">
            <div className="project__name">
              <a href="https://nxinc.ca/" target="_blank" rel="noreferrer">
                NX Cabinets Inc.
                <span className="arrow">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </a>
            </div>
            <div className="project__description">
              A responsive and mobile ready website built using Wordpress.
              Canadian owned and operated with a proven network of manufacturing
              partners. Focused on providing clients with RTA kitchen cabinets
              and bathroom vanity products in Canada.
            </div>
            <div className="project__languages">Wordpress</div>
            <div className="project__languages">PHP</div>
            <div className="project__languages">CSS</div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="project">
            <div className="project__name">
              <a
                href="https://thediychief.com/"
                target="_blank"
                rel="noreferrer"
              >
                The DIY Chief
                <span className="arrow">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </a>
            </div>
            <div className="project__description">
              A responsive and mobile ready website built using Wordpress.
              Woodworking tips, tools, ideas and reviews.
            </div>
            <div className="project__languages">Wordpress</div>
            <div className="project__languages">PHP</div>
            <div className="project__languages">CSS</div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="project">
            <div className="project__name">
              <a
                href="https://github.com/winstonvan/ExpertProject1"
                target="_blank"
                rel="noreferrer"
              >
                Medical Expert System
                <span className="arrow">
                  <i class="fas fa-chevron-right"></i>
                </span>
              </a>
            </div>
            <div className="project__description">
              This expert system was developed for a fourth year expert systems
              class. <br />A forward-chaining inference engine was used to infer
              data from a knowledge base.
              <a
                className="source"
                href="https://github.com/winstonvan/ExpertProject1"
              >
                View source
              </a>
            </div>
            <div className="project__languages">C#</div>
          </div>
        </FadeInSection>
      </div>
    </section>
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

export default Projects;
