import "./App.css";
import { Routes, Route } from "react-router-dom";

import React from "react";
import HomePage from "./Routes/HomePage";
import ClusterStatsPage from "./Routes/ClusterStatsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clusterstats" element={<ClusterStatsPage/>}/>
      </Routes>
    </>
  );
}

export default App;
