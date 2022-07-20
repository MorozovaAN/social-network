import React from "react";

export const Navbar = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <a href="#" className="navigation__list-link">
            Profile
          </a>
        </li>
        <li className="navigation__list-item">
          <a href="#" className="navigation__list-link">
            Messages
          </a>
        </li>
        <li className="navigation__list-item">
          <a href="#" className="navigation__list-link">
            Main content
          </a>
        </li>
      </ul>
    </nav>
  );
};
