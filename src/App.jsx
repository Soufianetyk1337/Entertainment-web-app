import React from "react";
import VideosContextProvider from "./contexts/VideosContext";
import RouterView from "./router/RouterView";
import "./App.scss";

function App() {
  return (
    <VideosContextProvider>
      <main className="main">
        <RouterView />
      </main>
    </VideosContextProvider>
  );
}

export default App;
