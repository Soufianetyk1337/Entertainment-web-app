import React, { useContext } from "react";
import Searchbar from "@/components/SearchBar/Searchbar";
import VideoList from "@/components/Video/VideoList/VideoList";
import { VideosContext } from "@/contexts/VideosContext";
import "./Bookmark.scss";
const Bookmark = () => {
  const { getters, search } = useContext(VideosContext);
  const { bookmarkedMovies, filteredBookmarkedVideos, bookmarkedSeries } =
    getters;
  return (
    <>
      <Searchbar placeholder="Search for bookmarked shows" />
      <div className="bookmarked-videos">
        {filteredBookmarkedVideos().length === 0 && (
          <h2 className="no-bookmark">You currenly have no bookmark.</h2>
        )}

        {bookmarkedMovies().length > 0 && (
          <VideoList
            className="bookmarked-movies"
            title="Bookmarked Movies"
            videos={bookmarkedMovies()}
          />
        )}
        {bookmarkedSeries().length > 0 && (
          <VideoList
            className="bookmarked-tv-series"
            title="Bookmarked TV Series"
            videos={bookmarkedSeries()}
          />
        )}
        {search && (
          <VideoList
            className="results"
            title="`Found ${filteredBookmarkedVideos().length} results for '${search}'`"
            videos={filteredBookmarkedVideos()}
          />
        )}
      </div>
    </>
  );
};

export default Bookmark;
