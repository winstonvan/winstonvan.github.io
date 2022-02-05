import React from "react";
import Project from "../data/projectItem";

function Projects() {
  return (
    <div>
      <section className="projects">
        <div className="header">PROJECTS</div>
        <div className="content">
          <Project
            name="winstonvan.github.io"
            desc="A responsive and mobile-friendly portfolio website created using
              React.js."
            demo="https://winstonvan.github.io"
            src="https://github.com/winstonvan/winstonvan.github.io"
            img="portfolio/mockup.png"
            languages="React,CSS,HTML"
          />
          <Project
            name="Inform"
            desc="Internet Gaming Disorder Assessment Tool. This tool is based on
              the first standardized psychometric tool to assess Internet Gaming
              Disorder (Pontes et al., 2014). This tool was inspired by the
              increasing gaming addictions and mental health concerns among
              youths."
            demo="https://github.com/winstonvan/Inform"
            src="https://github.com/winstonvan/Inform"
            img="inform/mockup.png"
            languages="Android,Java,Firebase"
          />
          <Project
            name="Web Chat Application"
            desc="A responsive and mobile-friendly chat application built using
              React.js and Firebase. Uses BrowserRouter for page navigation and
              themed with MaterialUI."
            demo="https://winstonvan-chat.herokuapp.com/"
            src="https://github.com/winstonvan/messenger-clone"
            img="chat-app/mockup.png"
            languages="React,Firebase,MaterialUI,CSS,HTML"
          />
          <Project
            name="Studium"
            desc="Studium is a virtual tutoring application written in Java for
              Android. It is designed to assist and enhance learning at the
              user's convenience. Uses a combination of PHP and mySQL to store
              data."
            demo="https://github.com/winstonvan/Studium"
            src="https://github.com/winstonvan/Studium"
            img=""
            languages="Java,Android,PHP,SQL"
          />
          <Project
            name="Medical Expert System"
            desc="This expert system was developed for a fourth year expert systems
            class. A forward-chaining inference engine was used to infer
            data from a knowledge base."
            demo="https://github.com/winstonvan/ExpertProject1"
            src="https://github.com/winstonvan/ExpertProject1"
            img=""
            languages="C#"
          />
          <Project
            name="NX Inc."
            desc="A responsive and mobile ready website built using Wordpress.
              Canadian owned and operated with a proven network of manufacturing
              partners. Focused on providing clients with RTA kitchen cabinets
              and bathroom vanity products in Canada."
            demo="https://nxinc.ca/"
            src=""
            img=""
            languages="Wordpress,PHP,CSS"
          />
          <Project
            name="The DIY Chief"
            desc="A responsive and mobile ready website built using Wordpress.
              Woodworking tips, tools, ideas and reviews."
            demo="https://thediychief.com/"
            src=""
            img=""
            languages="Wordpress,PHP,CSS"
          />
        </div>
      </section>
    </div>
  );
}

export default Projects;
