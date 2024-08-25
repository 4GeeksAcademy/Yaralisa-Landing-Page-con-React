import React from "react";

export const Navbar = () => {
  return (
    <div>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
        Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
        Sercises
          </a>
        </li>
        <li className="nav-item">
        <a className="nav-link" href="#">
          Contact
          </a>
        </li>
      </ul>
    </div>
  );
};
