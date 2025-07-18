import React from 'react';
import { Routes, Route } from "react-router-dom";

import Page1 from './pages/Page1';
// import Page2 from './pages/Page2';
import PageCanArt from "./pages/PageCanArt";
import Page3 from "./pages/Page3";
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';

function App() {
  return (
    <div className="bg-[#971017f8] text-black dark:bg-black dark:text-white transition-colors duration-300 w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      <section className="snap-start h-screen"><Page1 /></section>
      {/* <section className="snap-start h-screen"><Page2 /></section> */}
      <section className="snap-start h-screen"><PageCanArt /></section>
      <section className="snap-start h-screen"><Page3 /></section>
      <section className="snap-start h-screen"><Page5 /></section>
      <section className="snap-start h-screen"><Page4 /></section>
    </div>
  );
}

export default App;
