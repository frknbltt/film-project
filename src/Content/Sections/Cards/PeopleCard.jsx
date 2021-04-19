import React, { Component } from "react";
import "./PeopleCard.css";

class PeopleCard extends Component {
  render() {
    return (
      <div className="people-card">
        <img
          className="people-card-img"
          src={"https://image.tmdb.org/t/p/w500" + this.props.img}
          alt="png"
        />
        <div className="people-card-body">
          <h4>{this.props.title}</h4>
          <p>
            Popularity: <span>{this.props.popularity}</span>
          </p>

          <p>
            Departman: <span>{this.props.department}</span>
          </p>
        </div>
      </div>
    );
  }
}
export default PeopleCard;
