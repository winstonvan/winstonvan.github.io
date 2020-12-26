import React from 'react'
import "../styles/Experience.css"

function Experience() {
    return (
        <div className="experience">
            <div className="experience__header">
                    EDUCATION
            </div>

            <div className="experiences">                
                <div className="experience__item">
                    <div className="experience__company__year">
                        <div className="experience__company">
                            Laurentian University
                        </div>
                        <div className="experience__year">
                            September 2015 - May 2020
                        </div>  
                    </div>
                    <div className="experience__position">
                        Computer Science: Specialization in Web Data Management (B.CoSc)
                    </div>
                </div>  
            </div>

            <div className="experience__header">
                    EXPERIENCE
            </div>

            <div className="experiences">                
                <div className="experience__item">
                    <div className="experience__company__year">
                        <div className="experience__company">
                            Freelancer
                        </div>
                        <div className="experience__year">
                            September 2020 - Present
                        </div>  
                    </div>
                    <div className="experience__position">
                        Web Developer
                    </div>
                </div>  
                
                <div className="experience__item">
                    <div className="experience__company__year">
                        <div className="experience__company">
                            ClaimSecure
                        </div>
                        <div className="experience__year">
                            May - September 2017
                        </div>  
                    </div>
                    <div className="experience__position">
                        Web Developer
                    </div>
                </div>        
            </div>
        </div>
    )
}

export default Experience
