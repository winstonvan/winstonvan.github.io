import React from "react";
import FadeIn from "../Scripts/FadeIn";
import "../styles/Project.css";
import "../styles/fontawesome/css/all.css";

class projectItem extends React.Component {
  render() {
    // split string into array
    var languages = this.props.languages.split(",", 10);

    // map array
    var languagesList = languages.map(function (item) {
      return <div className="project__languages">{item}</div>;
    });

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
            <div className="languages">{languagesList}</div>
          </FadeIn>
        </div>
      </div>
    );
  }
}

export default projectItem;
