import React from "react";
import Experience from "../data/experienceItem";
import "../styles/Experience.css";

function Experiences() {
  return (
    <section className="experience">
      <div className="header">EXPERIENCES</div>
      <div className="content">
      <Experience
          company="Centric Mining Systems"
          title="Software Developer"
          link
          year="July 2021 - Present "
        />        
        <Experience
        company="Freelancer"
        title="Web Developer"
        link
        year="September 2019 - Present"
      />
        <Experience
          company="ClaimSecure"
          title="Web Developer"
          link="https://www.claimsecure.com/"
          year="May - September 2017"
        />
      </div>
    </section>
  );
}

export default Experiences;
