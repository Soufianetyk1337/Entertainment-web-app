import React, { useContext } from "react";
import { useEffect } from "react";
import { VideosContext } from "@/contexts/VideosContext";
import SearchIcon from "../icons/SearchIcon";
import "./Searchbar.scss";

const Searchbar = ({ placeholder }) => {
  const { actions, videos } = useContext(VideosContext);
  const { updateSearch } = actions;
  useEffect(() => {}, [videos]);
  return (
    <div className="search-bar">
      <SearchIcon />
      <input
        type="text"
        onChange={(event) => updateSearch(event.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Searchbar;
