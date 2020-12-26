import React from 'react'
import "../styles/Intro.css"

function Intro() {
    return (
        <div className="intro">
            
            <p className="intro__title">
                Hello!
            </p>

            <p className="intro__content">
                I'm <span className="name">Winston Van</span>, a web developer and UX enthusiast focused on creating clean and beautiful interfaces.
            </p>

            <p className="intro__contact">
                Get in touch with me: <a href="mailto:winston-van@mail.com" className="link"><span className="email">winston-van@mail.com</span></a>
            </p>

        </div>
    )
}

export default Intro
