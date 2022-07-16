import React from "react";
import { Link } from "react-router-dom";
import FullBookmark from "../icons/FullBookmark.jsx";
import HomeIcon from "../icons/HomeIcon.jsx";
import MoviesIcon from "../icons/MoviesIcon.jsx";
import TvIcon from "../icons/TvIcon.jsx";
import Logo from "@/assets/images/logo.svg";
import Avatar from "@/assets/images/image-avatar.png";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/">
          <img src={Logo} className="navbar__logo" alt="Logo" />
          <h1 className="sr-only">Entertainment Web App</h1>
        </Link>
        <div className="navbar__primary">
          <Link to="/">
            <HomeIcon />
            <span className="sr-only">Home</span>
          </Link>
          <Link to="/movies">
            <MoviesIcon />
            <span className="sr-only">Movies</span>
          </Link>
          <Link to="/series">
            <TvIcon />
            <span className="sr-only">TV Series</span>
          </Link>
          <Link to="/bookmarks">
            <FullBookmark />
            <span className="sr-only">Bookmarks</span>
          </Link>
        </div>
        <Link to="/" className="navbar__avatar-container">
          <img src={Avatar} alt="User Profile" />
          <span className="sr-only">Profile</span>
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
