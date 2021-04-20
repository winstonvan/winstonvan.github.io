import React from "react";
import FadeIn from "../scripts/FadeIn";
import "../styles/Experience.css";
import "../styles/fontawesome/css/all.css";

function experienceItem(props) {
  return (
    <div className="experience">
      <div className="content">
        <FadeIn>
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
