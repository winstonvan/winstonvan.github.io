import React from 'react'
import "../styles/Projects.css"

function Projects() {
    return (
        <section className="projects">
            <div className="header">
                PROJECTS
            </div>

            <div className="content">
                <div className="project">
                    <span className="mockup">
                        <img src="mockup.png" />    
                    </span>
                    <span className="project__name">
                        <a href="https://winstonvan.github.com">winstonvan.github.io</a>
                    </span>
                    <span className="project__description">
                    A responsive and mobile-friendly portfolio website created using React JS.  
                    </span>
                    <span className="project__languages">
                        React
                    </span>
                    <span className="project__languages">
                        CSS
                    </span>
                    <span className="project__languages">
                        HTML
                    </span>
                </div>

                <div className="project">
                <span className="mockup">
                        <img src="Inform/test.png" />    
                    </span>
                    <span className="project__name">
                        Inform
                    </span>
                    <span className="project__description">
                    Internet Gaming Disorder Assessment Tool. This tool is based on the first standardized 
                    psychometric tool to assess Internet Gaming Disorder (Pontes et al., 2014). This tool
                    was inspired by the increasing gaming addictions and mental health concerns among youths.
                    </span>
                    <span className="project__languages">
                        Android
                    </span>
                    <span className="project__languages">
                        Java
                    </span>
                    <span className="project__languages">
                        Firebase
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Projects
