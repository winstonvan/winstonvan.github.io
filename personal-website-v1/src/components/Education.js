import React from "react";
import "../styles/Education.css";
import EducationItem from "../data/educationItem";

function Education() {
  return (
    <section className="education">
      <div className="header">EDUCATION</div>

      <div className="content">
        <EducationItem
          institution="Laurentian University"
          degree="Computer Science: Specialization in Web Data Management"
          link="https://laurentian.ca/program/computer-science/details"
        />
      </div>
    </section>
  );
}

export default Education;
