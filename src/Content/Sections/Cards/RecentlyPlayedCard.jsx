import React, { Component } from "react";
import "./RecentlyPlayedCard.css";

class RecentlyPlayedCard extends Component {
  render() {
    return (
      <div className="recentlyplayedcard">
        <div className="recentlyplayedcard-left">
          <h4>  {this.props.id}</h4>
          <img src={this.props.img} alt="png2" />
          <div className="recentlyplayedcard-left-data">
            <h4>{this.props.name}</h4>
            <p>{this.props.chapter}</p>
          </div>
        </div>
        <div className="recentlyplayedcard-right">
          <p>{this.props.min}</p>
          <i>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="4.5"
                fill="white"
                stroke="#E6EFFB"
              />
              <path
                d="M14 24.4209V15.5791C14 14.0145 15.7157 13.0558 17.0482 13.8758L24.2321 18.2967C25.5012 19.0777 25.5012 20.9223 24.2321 21.7033L17.0482 26.1242C15.7157 26.9442 14 25.9855 14 24.4209Z"
                fill="#FA7C05"
              />
            </svg>
          </i>
          <i>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="4.5"
                fill="white"
                stroke="#E6EFFB"
              />
              <rect
                x="12"
                y="12"
                width="15"
                height="15"
                rx="3"
                fill="#A3AFCB"
              />
              <rect x="19" y="16" width="1" height="7" fill="white" />
              <rect x="16" y="19" width="7" height="1" fill="white" />
            </svg>
          </i>
        </div>
      </div>
    );
  }
}
export default RecentlyPlayedCard;
