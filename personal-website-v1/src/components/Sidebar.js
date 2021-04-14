import React from "react";
import "../styles/Sidebar.css";
import "../styles/fontawesome/css/all.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="icon">
        <a
          className="link"
          href="https://www.linkedin.com/in/winstonvan/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-linkedin-in fa-2x" />
        </a>
      </div>
      <div className="icon">
        <a
          className="link"
          href="https://github.com/winstonvan"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fab fa-github fa-2x" />
        </a>
      </div>
      <div className="icon">
        <a
          className="link"
          href="mailto:wvan@laurentian.ca"
          target="_blank"
          rel="noreferrer"
        >
          <i class="far fa-envelope fa-2x" />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
