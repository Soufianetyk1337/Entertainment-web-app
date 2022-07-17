import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/components/Home/Home";
import React from "react";
import Navbar from "@/components/Navbar/Navbar";

const RouterView = () => {
  const Bookmark = React.lazy(() => import("@/components/Bookmark/Bookmark"));
  const Series = React.lazy(() => import("@/components/Series/Series"));
  const Movies = React.lazy(() => import("@/components/Movies/Movies"));
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route
            path="/movies"
            element={
              <React.Suspense fallback={<>...</>}>
                <Movies />
              </React.Suspense>
            }
          />
          <Route
            path="/series"
            element={
              <React.Suspense fallback={<>...</>}>
                <Series />
              </React.Suspense>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <React.Suspense fallback={<>...</>}>
                <Bookmark />
              </React.Suspense>
            }
          />
          <Route path="*" element={<h1>Route Not Found</h1>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default RouterView;
