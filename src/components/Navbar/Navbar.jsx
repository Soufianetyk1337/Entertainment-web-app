import React, { useContext } from "react";
import { Link } from "react-router-dom";
import FullBookmark from "../icons/FullBookmark.jsx";
import HomeIcon from "../icons/HomeIcon.jsx";
import MoviesIcon from "../icons/MoviesIcon.jsx";
import TvIcon from "../icons/TvIcon.jsx";
import Logo from "/assets/images/logo.svg";
import Avatar from "/assets/images/image-avatar.png";
import "./Navbar.scss";
import { VideosContext } from "@/contexts/VideosContext.jsx";
const Navbar = () => {
  const { actions } = useContext(VideosContext);
  const { updateSearch } = actions;
  const clearSearchBeforeNavigating = () => updateSearch("");

  return (
    <>
      <nav className="navbar">
        <Link to="/" onClick={clearSearchBeforeNavigating}>
          <img src={Logo} className="navbar__logo" alt="Logo" />
          <h1 className="sr-only">Entertainment Web App</h1>
        </Link>
        <div className="navbar__primary">
          <Link to="/" onClick={clearSearchBeforeNavigating}>
            <HomeIcon />
            <span className="sr-only">Home</span>
          </Link>
          <Link to="/movies" onClick={clearSearchBeforeNavigating}>
            <MoviesIcon />
            <span className="sr-only">Movies</span>
          </Link>
          <Link to="/series" onClick={clearSearchBeforeNavigating}>
            <TvIcon />
            <span className="sr-only">TV Series</span>
          </Link>
          <Link to="/bookmarks" onClick={clearSearchBeforeNavigating}>
            <FullBookmark />
            <span className="sr-only">Bookmarks</span>
          </Link>
        </div>
        <Link
          to="/"
          className="navbar__avatar-container"
          onClick={clearSearchBeforeNavigating}
        >
          <img src={Avatar} alt="User Profile" />
          <span className="sr-only">Profile</span>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
