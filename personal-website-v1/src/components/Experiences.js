import React from "react";
import "../styles/Experience.css";
import Experience from "./experienceItem";

function Experiences() {
  return (
    <section className="experience">
      <div className="header">EXPERIENCES</div>
      <div className="content">
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
