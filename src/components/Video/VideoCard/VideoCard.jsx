import { VideosContext } from "@/contexts/VideosContext";
import React, { useContext, useEffect } from "react";
import EmptyBookmark from "@/components/icons/EmptyBookmark";
import FullBookmark from "@/components/icons/FullBookmark";
import MoviesIcon from "@/components/icons/MoviesIcon";
import PlayIcon from "@/components/icons/PlayIcon";
import TvIcon from "@/components/icons/TvIcon";
import "./VideoCard.scss";
import useBreakpoints from "@/hooks/useBreakpoints";
const VideoCard = ({ video }) => {
  const breakpoint = useBreakpoints();
  const isLarge = breakpoint === "lg";
  const isMedium = breakpoint === "md";
  const { actions } = useContext(VideosContext);
  const { toggleBookmark } = actions;
  const backgroundImageInlineStyle = (video) => {
    const backgroundImage = `url(${
      isLarge
        ? video.thumbnail.regular?.large.replace("@", "./src")
        : isMedium
        ? video.thumbnail.regular?.medium?.replace("@", "./src")
        : video.thumbnail.regular?.small.replace("@", "./src")
    })`;
    return backgroundImage;
  };
  useEffect(() => {
    console.log("Rendering");
  }, []);

  return (
    <div
      className="video"
      style={{ backgroundImage: ` ${backgroundImageInlineStyle(video)}` }}
    >
      <div className="video__card">
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
      </div>
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
  );
};

export default VideoCard;
