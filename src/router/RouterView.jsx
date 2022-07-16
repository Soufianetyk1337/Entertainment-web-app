import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/components/Home/Home";
import Bookmark from "@/components/Bookmark/Bookmark";
import Series from "@/components/Series/Series";
import Movies from "@/components/Movies/Movies";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const RouterView = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/bookmarks" element={<Bookmark />} />
        <Route path="/:notfound(.*)/*" element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterView;
