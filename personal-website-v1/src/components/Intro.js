import React from 'react'
import "../styles/Intro.css"
import "../styles/fontawesome/css/all.css"

function Intro() {
    return (
        <section className="intro">
            
            <span className="intro__title">
                Hello!
            </span>

            <span className="intro__content">
                I'm <span className="name">Winston Van</span>, a web developer and UX enthusiast focused on creating clean and beautiful interfaces.
            </span>

            <span className="intro__contact">
                <span className="contact">
                    Get in touch with me: <a href="mailto:winston-van@mail.com" className="link">winston-van@mail.com</a>
                </span> 

                <span className="socials">
                    <span className="social">
                        <a href="https://github.com/winstonvan" target="_blank" rel="noreferrer"><i class="fab fa-github" /></a>
                    </span>

                    <span className="social">
                        <a href="https://linkedin.com/in/winstonvan" target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i></a>
                    </span>

                    <span className="social">
                        <a href="mailto:winston-van@mail.com" target="_blank" rel="noreferrer"><i class="far fa-envelope"></i></a>
                    </span>
                </span>
            </span>

        </section>
    )
}

export default Intro
