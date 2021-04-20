import React from "react";
import "../styles/Contact.css";
import "../styles/fontawesome/css/all.css";

function Contact() {
  return (
    <section className="contact">
      <div className="header">CONTACT</div>

      <div className="content">
        <div className="item">
          <div className="left">
            <i class="far fa-envelope fa-2x" />
          </div>
          <div className="right">
            <i class="fas fa-angle-right fa-2x" />
            <a
              className="link"
              href="mailto:wvan@laurentian.ca"
              target="_blank"
              rel="noreferrer"
            >
              wvan@laurentian.ca
            </a>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <i class="fab fa-linkedin-in fa-2x" />
          </div>
          <div className="right">
            <i class="fas fa-angle-right fa-2x" />
            <a
              className="link"
              href="https://www.linkedin.com/in/winstonvan/"
              target="_blank"
              rel="noreferrer"
            >
              winstonvan
            </a>
          </div>
        </div>
        <div className="item">
          <div className="left">
            <i class="fab fa-github fa-2x" />
          </div>
          <div className="right">
            <i class="fas fa-angle-right fa-2x" />
            <a
              className="link"
              href="https://github.com/winstonvan"
              target="_blank"
              rel="noreferrer"
            >
              winstonvan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
