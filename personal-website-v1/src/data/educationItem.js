import React from "react";
import FadeIn from "../scripts/FadeIn";
import "../styles/Experience.css";
import "../styles/fontawesome/css/all.css";

function educationItem(props) {
  return (
    <div>
      <div className="content">
        <FadeIn>
          <div className="education__item">
            <div className="education__institution__year">
              <div className="education__institution">
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                  {props.institution}
                </a>
              </div>
              <div className="education__year"></div>
            </div>
            <div className="education__degree">{props.degree}</div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

export default educationItem;
