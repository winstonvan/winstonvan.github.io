import React from "react";
import FadeIn from "../Scripts/FadeIn";
import "../styles/Project.css";
import "../styles/fontawesome/css/all.css";

class Project extends React.Component {
  render() {
    var languages = this.props.languages.trim().split(",", 10);
    var innerHTML = "";
    for (var i = 0; i < languages.length; i++) {
      innerHTML +=
        "<div className='project__languages'>" +
        this.props.languages.split(",", 10)[i] +
        "</div>";
    }

    console.log(innerHTML);

    document.getElementsByClassName("test").innerHTML = innerHTML;

    return (
      <div className="project">
        <div className="content">
          <FadeIn>
            <div className="project__image">
              <img
                style={{ display: this.props.img === "" ? "none" : "block" }}
                src={this.props.img}
                alt={this.props.name}
              />
            </div>
            <div className="project__name">
              <a href={this.props.demo} target="_blank" rel="noreferrer">
                {this.props.name}
                <span className="arrow">
                  <i class="fas fa-external-link-alt" />
                </span>
              </a>
            </div>
            <div className="project__description">
              {this.props.desc}
              <a className="source" href={this.props.src}>
                View source
              </a>
            </div>
            <div className="test"></div>
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default Project;
