import React from 'react'
import "../styles/Education.css"

function Education() {
    return (
        <section className="education">
            <div className="header">
                EDUCATION
            </div>

            <div className="content">                
                <div className="education__item">
                    <div className="education__institution__year">
                        <div className="education__institution">
                            <a href="https://laurentian.ca/program/computer-science/details" target="_blank" rel="noopener noreferrer">Laurentian University</a>
                        </div>
                        <div className="education__year">
                            
                        </div>  
                    </div>
                    <div className="education__degree">
                        Computer Science: Specialization in Web Data Management 
                    </div>
                </div>          
            </div>
        </section>
    )
}

export default Education
