import { VideosContext } from "@/contexts/VideosContext";
import React, { useContext } from "react";
import Searchbar from "../SearchBar/Searchbar";
import VideoList from "../Video/VideoList/VideoList";
import "./Series.scss";
const Series = () => {
  const { getters, search } = useContext(VideosContext);
  const { series, filteredSeries } = getters;
  return (
    <>
      <Searchbar placeholder="Search for TV series" />
      {!search ? (
        <VideoList className="tv-series" title="TV Series" videos={series()} />
      ) : (
        <VideoList
          className="results"
          title={`Found ${filteredSeries().length} results for '${search}'`}
          videos={filteredSeries()}
        />
      )}
    </>
  );
};

export default Series;
