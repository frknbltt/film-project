import React, { Component } from "react";
import RecentlyPlayedCard from "./Cards/RecentlyPlayedCard";
import "./RecentlyPlayed.css";

class RecentlyPlayed extends Component {
  render() {
    const bolumler = [
      {
        name: "film-5",
        chapter: "chapter-1",
        img:
          "https://readcomicsonline.ru/uploads/manga/the-walking-dead-2003/chapters/192/01.jpg",
        id: "01",
        min: "12.43",
      },
      {
        name: "film-6",
        chapter: "chapter-2",
        img:
          "https://readcomicsonline.ru/uploads/manga/the-walking-dead-2003/chapters/187/01.jpg",
        id: "02",
        min: "10.05",
      },
      {
        name: "film-7",
        chapter: "chapter-3",
        img:
          "https://www.omgbeaupeep.com/comics/mangas/The%20Walking%20Dead/001%20-%20The%20Walking%20Dead%20001%20(2003)/The-Walking-Dead-Comic-001.jpg",
        id: "03",
        min: "8.37",
      },
      {
        name: "film-8",
        chapter: "chapter-4",
        img:
          "https://readcomicsonline.ru/uploads/manga/the-walking-dead-2003/chapters/183/01.jpg",
        id: "04",
        min: "14.50",
      },
    ];
    return (
      <div className="recentlyplayed">
        <div className="recentlyplayed-head">
          <h4>
            <i>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.3"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19 16H21V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12V16H5V12C5 8.13401 8.13401 5 12 5C15.866 5 19 8.13401 19 12V16Z"
                  fill="#F8991C"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5 14C3.89543 14 3 14.8954 3 16V19C3 20.1046 3.89543 21 5 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H5ZM18 14C16.8954 14 16 14.8954 16 16V19C16 20.1046 16.8954 21 18 21H19C20.1046 21 21 20.1046 21 19V16C21 14.8954 20.1046 14 19 14H18Z"
                  fill="#F8991C"
                />
              </svg>
            </i>
            Recently Played
          </h4>
          <button>See All</button>
        </div>
        <div className="recentlyplayed-body">
          {bolumler.map((item) => {
            return (
              <RecentlyPlayedCard
                name={item.name}
                chapter={item.chapter}
                img={item.img}
                id={item.id}
                min={item.min}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default RecentlyPlayed;
