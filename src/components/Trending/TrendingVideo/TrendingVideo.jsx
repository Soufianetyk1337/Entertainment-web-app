/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import MoviesIcon from "@/components/icons/MoviesIcon";
import TvIcon from "@/components/icons/TvIcon";
import FullBookmark from "@/components/icons/FullBookmark";
import EmptyBookmark from "@/components/icons/EmptyBookmark";
import PlayIcon from "@/components/icons/PlayIcon";
import "./TrendingVideo.scss";
import { VideosContext } from "@/contexts/VideosContext";
import { useEffect } from "react";
const TrendingVideo = ({ video }) => {
  const isLarge = false;
  const backgroundImageInlineStyle = (video) => {
    const backgroundImage = `url(${
      isLarge
        ? video.thumbnail.trending?.large.replace("@", "./src")
        : video.thumbnail.trending?.small.replace("@", "./src")
    })`;
    return backgroundImage;
  };
  useEffect(() => {}, [video.isBookmarked]);
  const { actions } = useContext(VideosContext);
  const { toggleBookmark } = actions;
  return (
    <div
      className="video"
      style={{ backgroundImage: `${backgroundImageInlineStyle(video)}` }}
    >
      <button
        className="video__bookmark-btn"
        onClick={() => toggleBookmark(video)}
        aria-label="Toggle this bookmark"
      >
        {video.isBookmarked ? <FullBookmark /> : <EmptyBookmark />}
      </button>
      <button className="play-btn">
        <PlayIcon />
        Play
      </button>
      <div className="video__content">
        <div className="video__info">
          <div className="video__year">{video.year}</div>
          <div className="dot"></div>
          <div className="video__category">
            {video.category === "Movie" ? <MoviesIcon /> : <TvIcon />}
            {video.category}
          </div>
          <div className="dot"></div>
          <div className="video__rating">{video.rating}</div>
        </div>
        <h3 className="video__title">{video.title}</h3>
      </div>
    </div>
  );
};

export default TrendingVideo;
