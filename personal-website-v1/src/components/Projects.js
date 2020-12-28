import React from 'react'
import "../styles/Projects.css"
import "../styles/fontawesome/css/all.css"

function Projects() {
    return (
        <section className="projects">
            <div className="header">
                PROJECTS
            </div>

            <div className="content">
                <div className="project">
                    <div className="project__portfolio">
                            <figure className="project__images">
                                <div className="laptop">
                                    <img src={("portfolio/mockup.png")}  alt=""/>    
                                </div>
                            </figure> 
                        </div>
                    <div className="project__name">
                        <a href="https://winstonvan.github.com" target="_blank" rel="noreferrer">
                            winstonvan.github.io
                            <span className="arrow">
                                <i class="fas fa-chevron-right"></i>
                            </span>
                        </a>
                    </div>
                    <div className="project__description">
                    A responsive and mobile-friendly portfolio website created using React JS.  
                    </div>
                    <div className="project__languages">
                        React
                    </div>
                    <div className="project__languages">
                        CSS
                    </div>
                    <div className="project__languages">
                        HTML
                    </div>
                </div>

                <div className="project">
                    <div className="project__inform">
                        <figure className="project__images">
                            <div className="phone">
                                <img src={("inform/mockup1.png")}  alt=""/>
                            </div>
                            <div className="phone">
                                <img src={("inform/mockup2.png")} alt=""/> 
                            </div>
                            <div className="phone">
                                <img src={("inform/mockup3.png")}  alt=""/>    
                            </div>
                        </figure> 
                    </div>
                    <div className="project__name">
                    <a href="https://github.com/winstonvan/Inform" target="_blank" rel="noreferrer">
                        Inform
                        <span className="arrow">
                                <i class="fas fa-chevron-right"></i>
                        </span>    
                    </a>
                    </div>
                    <div className="project__description">
                    Internet Gaming Disorder Assessment Tool. This tool is based on the first standardized 
                    psychometric tool to assess Internet Gaming Disorder (Pontes et al., 2014). This tool
                    was inspired by the increasing gaming addictions and mental health concerns among youths.
                    </div>
                    <div className="project__languages">
                        Android
                    </div>
                    <div className="project__languages">
                        Java
                    </div>
                    <div className="project__languages">
                        Firebase
                    </div>
                </div>

                <div className="project">
                    <div className="project__name">
                        <a href="https://github.com/winstonvan/Studium" target="_blank" rel="noreferrer">
                            Studium
                            <span className="arrow">
                                <i class="fas fa-chevron-right"></i>
                            </span>
                        </a>
                    </div>
                    <div className="project__description">
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
                    </div>
                    <div className="project__languages">
                        Java
                    </div>
                    <div className="project__languages">
                        Android
                    </div>
                    <div className="project__languages">
                        PHP
                    </div>
                    <div className="project__languages">
                        SQL
                    </div>
                </div>

                <div className="project">
                    <div className="project__name">
                        <a href="https://github.com/winstonvan/ExpertProject1" target="_blank" rel="noreferrer">
                            Medical Expert System
                            <span className="arrow">
                                <i class="fas fa-chevron-right"></i>
                            </span>    
                        </a>
                    </div>
                    <div className="project__description">
                    This expert system was developed for a fourth year expert systems class. <br />
                    A forward-chaining inference engine was used to infer data from a knowledge base.
                    </div>
                    <div className="project__languages">
                        C#
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Projects
