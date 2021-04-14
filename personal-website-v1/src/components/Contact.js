import React from "react";
import "../styles/Contact.css";
import "../styles/fontawesome/css/all.css";

function Contact() {
  return (
    <section className="contact">
      <div className="header">CONTACT</div>

      <div className="content">
        <FadeInSection>
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
        </FadeInSection>
      </div>
    </section>
  );
}

// fade in transition
function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default Contact;
