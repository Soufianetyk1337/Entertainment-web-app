import React, { useEffect } from "react";
import { useContext } from "react";
import { VideosContext } from "@/contexts/VideosContext";
import Searchbar from "@/components/SearchBar/Searchbar";
import TrendingSection from "@/components/Trending/TrendingSection/TrendingSection";
import VideoList from "@/components/Video/VideoList/VideoList";
import "./Home.scss";
const Home = () => {
  const { actions, getters, search } = useContext(VideosContext);
  const { fetchVideos } = actions;
  const { trendingVideos, recommandedVideos, filteredVideos } = getters;
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <>
      <Searchbar placeholder="Search for movies or TV series" />
      {!search ? (
        <div>
          <TrendingSection videos={trendingVideos()} />
          <VideoList title="Recommended for you" videos={recommandedVideos()} />
        </div>
      ) : (
        <VideoList
          className="results"
          title={`Found ${filteredVideos().length} results for '${search}'`}
          videos={filteredVideos()}
        />
      )}
    </>
  );
};

export default Home;
