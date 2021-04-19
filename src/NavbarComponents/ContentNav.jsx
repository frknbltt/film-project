import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavbarDropdown from "./NavbarDropdown";
import "./ContentNav.css";
import logo from "./LOGO.png";
import Search from "./search";

class ContentNav extends Component {
  render() {
    return (
      <div className="content-nav">
        <div className="content-nav-left">
          <Link to="/film-project">
            {" "}
            <img className="content-nav-logo" src={logo} alt="" />
          </Link>

          <button>
            <Link to="/film-project">Ana Sayfa</Link>
          </button>
          <button>
            <Link to="/film-project/films">Filmler</Link>
          </button>
          <button>
            <Link to="/film-project/people">Oyuncular</Link>
          </button>
        </div>
        <div className="content-nav-right">
          <Search className="search-input" />
        </div>
      </div>
    );
  }
}

export default ContentNav;
