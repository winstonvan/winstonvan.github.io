import React from "react";
import "../styles/Sidebar.css";
import "../styles/fontawesome/css/all.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <i class="fab fa-github fa-2x" />
      <i class="fab fa-linkedin-in fa-2x" />
      <i class="far fa-envelope fa-2x"></i>
    </div>
  );
}

export default Sidebar;
