import { VideosContext } from "@/contexts/VideosContext";
import React, { useContext } from "react";
import Searchbar from "../SearchBar/Searchbar";
import VideoList from "../Video/VideoList/VideoList";
import "./Movies.scss";
const Movies = () => {
  const { getters, search } = useContext(VideosContext);
  const { movies, filteredMovies } = getters;
  return (
    <>
      <Searchbar placeholder="Search for movies" />
      {!search ? (
        <VideoList className="movies" title="Movies" videos={movies()} />
      ) : (
        <VideoList
          className="results"
          title={`Found ${filteredMovies().length} results for '${search}'`}
          videos={filteredMovies()}
        />
      )}
    </>
  );
};

export default Movies;
