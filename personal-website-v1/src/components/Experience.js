import React from 'react'
import "../styles/Experience.css"

function Experience() {
    return (
        <section className="experience">
            <div className="header">
                EXPERIENCE
            </div>

            <div className="content">                
                <div className="experience__item">
                    <div className="experience__company__year">
                        <div className="experience__company">
                            Freelancer
                        </div>
                        <div className="experience__year">
                            September 2019 - Present
                        </div>  
                    </div>
                    <div className="experience__position">
                        Web Developer
                    </div>
                </div>  
                
                <div className="experience__item">
                    <div className="experience__company__year">
                        <div className="experience__company">
                            <a href="https://www.claimsecure.com/" target="_blank" rel="noopener noreferrer">ClaimSecure</a>
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
        </section>
    )
}

export default Experience
