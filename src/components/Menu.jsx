import React from "react";

const Menu = ({ menuOpen }) => (
  <div className="overlay-menu">
    <h4>
      Close menu
      <button
        className="btn-link"
        style={{ cursor: "pointer" }}
        onClick={menuOpen}
      >
        <i className="fa fa-close pull-right" />
      </button>
    </h4>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
);

export default Menu;
