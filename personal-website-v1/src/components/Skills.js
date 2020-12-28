import React from 'react'
import '../styles/Skills.css'

function Skills() {
    return (
        <section className="section">
            <div className="header">
                SKILLS
            </div>

            <div className="content">
                <div className="languages">
                    <div className="languages__header">
                        Languages
                    </div> 
                    <div className="item">
                        Java
                    </div>
                    <div className="item">
                        C#
                    </div>
                    <div className="item">
                        C++
                    </div>
                    <div className="item">
                        HTML
                    </div>
                    <div className="item">
                        CSS
                    </div>
                    <div className="item">
                        Javascript
                    </div>                   
                </div>

                <div className="frameworks">
                    <div className="languages__header">
                        Frameworks
                    </div> 
                    <div className="item">
                        React
                    </div>
                    <div className="item">
                        Node.js
                    </div>
                    <div className="item">
                        Firebase
                    </div>
                    <div className="item">
                        Wordpress
                    </div>
                </div>

                <div className="tools">
                    <div className="tools__header">
                        Tools
                    </div> 
                    <div className="item">
                        Git
                    </div>
                    <div className="item">
                        Github
                    </div>
                    <div className="item">
                        Bash
                    </div>
                </div>
            </div>

        </section>    
    )
}

export default Skills
