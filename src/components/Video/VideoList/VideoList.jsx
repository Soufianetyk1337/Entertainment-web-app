import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./VideoList.scss";
const VideoList = ({ title, videos = [] }) => {
  return (
    <section className="videos">
      <h2 className="videos__title">{title}</h2>
      <ul className="videos__list">
        {videos.length &&
          videos.map((video) => {
            return (
              <li key={video.title} className="videos__item">
                <VideoCard video={video} />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default VideoList;
