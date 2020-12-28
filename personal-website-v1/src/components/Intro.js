import React from 'react'
import "../styles/Intro.css"

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
                Get in touch with me: <a href="mailto:winston-van@mail.com" className="link">winston-van@mail.com</a>
            </span>

        </section>
    )
}

export default Intro
