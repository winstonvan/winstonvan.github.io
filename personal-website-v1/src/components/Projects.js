import React from 'react'
import "../styles/Projects.css"

function Projects() {
    return (
        <section className="section">
            <div className="header">
                PROJECTS
            </div>

            <div className="content">
                <div className="project">
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
