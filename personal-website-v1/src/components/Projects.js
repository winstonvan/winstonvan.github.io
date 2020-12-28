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
                        <img src="%PUBLIC_URL%/mockup.png" alt=""/>    
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
                    <span className="demo">
                        
                    </span>
                </div>

                <div className="project">
                <   span className="mockup">
                        <img src="%PUBLIC_URL%/inform/home.png" width ="33%" alt=""/>
                        <img src="%PUBLIC_URL%/inform/test.png" width ="33%" alt=""/> 
                        <img src="%PUBLIC_URL%/inform/test2.png" width ="33%" alt=""/>     
                    </span>
                    <span className="project__name">
                    <a href="https://github.com/winstonvan/Inform">Inform</a>
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

                <div className="project">
                    <span className="project__name">
                        <a href="https://github.com/winstonvan/Studium">Studium</a>
                    </span>
                    <span className="project__description">
                    Studium is a virtual tutoring application written in Java for Android. 
                    It is designed to assist and enhance learning at the user's convenience. 
                    Uses a combination of PHP and mySQL to store data. <br /><br />

                    Features:
                    <ul className="features">
                        <li className="item">Question search</li>
                        <li className="item">Submit question</li>
                        <li className="item">Answer to other user's questions</li>
                        <li className="item">Chat (1:1)</li>
                    </ul>
                    </span>
                    <span className="project__languages">
                        Java
                    </span>
                    <span className="project__languages">
                        Android
                    </span>
                    <span className="project__languages">
                        PHP
                    </span>
                    <span className="project__languages">
                        SQL
                    </span>
                </div>

                <div className="project">
                    <span className="project__name">
                        <a href="https://github.com/winstonvan/ExpertProject1">Medical Expert System</a>
                    </span>
                    <span className="project__description">
                    This expert system was developed for a fourth year expert systems class. <br />
                    A forward-chaining inference engine was used to infer data from a knowledge base.
                    </span>
                    <span className="project__languages">
                        C#
                    </span>
                </div>

            </div>
        </section>
    )
}

export default Projects
