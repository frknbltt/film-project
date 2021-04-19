import React, { Component } from "react";
import "./NavbarDropdown.css";
class NavbarDropdown extends Component {
  render() {
    return (
      <div class="dropdown">
        <button class="dropbtn">
          <i>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="7" cy="12" r="2" fill="#7C8DB5" />
              <circle cx="17.1429" cy="12" r="2" fill="#7C8DB5" />
            </svg>
          </i>
        </button>
        <div class="dropdown-content">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
    );
  }
}
export default NavbarDropdown;
