import React from "react";
import { createContext, useState } from "react";
import data from "@public/assets/data.json";

export const VideosContext = createContext();

const VideosContextProvider = (props) => {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [rerender, setRerender] = useState(false);

  const getters = {
    trendingVideos: () => {
      return videos.filter((video) => video.isTrending);
    },
    recommandedVideos: () => {
      return videos.filter((video) => !video.isTrending);
    },
    filteredVideos: () => {
      return videos.filter((video) =>
        video.title.toLowerCase().includes(search)
      );
    },
    movies: () => {
      return videos.filter((video) => video.category === "Movie");
    },
    filteredMovies: () => {
      return videos.filter(
        (video) =>
          video.category === "Movie" &&
          video.title.toLowerCase().includes(search)
      );
    },
    series: () => {
      return videos.filter((video) => video.category === "TV Series");
    },
    filteredSeries: () => {
      return videos.filter(
        (video) =>
          video.category === "TV Series" &&
          video.title.toLowerCase().includes(search)
      );
    },
    bookmarkedMovies: () => {
      return videos.filter(
        (video) => video.category === "Movie" && video.isBookmarked
      );
    },
    bookmarkedSeries: () => {
      return videos.filter(
        (video) => video.category === "TV Series" && video.isBookmarked
      );
    },
    filteredBookmarkedVideos: () => {
      return videos.filter(
        (video) =>
          video.isBookmarked && video.title.toLowerCase().includes(search)
      );
    },
  };
  const actions = {
    fetchVideos: () => {
      setIsLoading(true);
      setVideos([...data]);
      setIsLoaded(false);
    },
    updateSearch: (searchedValue) => {
      setSearch(searchedValue.toLowerCase());
    },
    toggleBookmark: (video) => {
      video.isBookmarked = !video.isBookmarked;
      setRerender(!rerender);
    },
  };
  return (
    <VideosContext.Provider
      value={{ getters, actions, videos, search, isLoaded, isLoading }}
    >
      {props.children}
    </VideosContext.Provider>
  );
};
export default VideosContextProvider;
