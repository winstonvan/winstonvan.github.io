import React from "react";
import FadeIn from "../Scripts/FadeIn";
import "../styles/Experience.css";
import "../styles/fontawesome/css/all.css";

function experienceItem(props) {
  return (
    <div>
      <div className="content">
        <FadeIn>
          <div className="experience__item">
            <div className="experience__company__year">
              <div className="experience__company">Freelancer</div>
              <div className="experience__year">September 2019 - Present</div>
            </div>
            <div className="experience__position">Web Developer</div>
          </div>

          <div className="experience__item">
            <div className="experience__company__year">
              <div className="experience__company">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                  {props.company}
                </a>
              </div>
              <div className="experience__year">{props.year}</div>
            </div>
            <div className="experience__position">{props.title}</div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default experienceItem;
