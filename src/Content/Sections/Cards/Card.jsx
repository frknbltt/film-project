import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="card">
        <img
          className="card-img"
          src={"https://image.tmdb.org/t/p/w500" + this.props.img}
          alt="png"
        />
        <div className="card-body">
          <h4>{this.props.title}</h4>

          <p>
            IMDB : <span>{this.props.imdb}</span>{" "}
          </p>

          <p>
            Yayın Tarihi : <span>{this.props.date}</span>
          </p>
        </div>
      </div>
    );
  }
}
export default Card;
