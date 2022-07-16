import React from "react";
import TrendingVideo from "../TrendingVideo/TrendingVideo";
import "./TrendingSection.scss";
const TrendingSection = ({ videos = [] }) => {
  return (
    <section className="trending">
      <h2 className="trending__title">Trending</h2>
      <ul className="trending__videos">
        {videos.length &&
          videos.map((video) => {
            return (
              <li key={video.title} className="trending__video">
                <TrendingVideo video={video} />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default TrendingSection;
