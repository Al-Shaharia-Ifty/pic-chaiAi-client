import React, { useEffect, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import logo from "./Assets/New Project.png";
import { Home, CreatePost } from "./Pages";
import Showcase from "./Components/Showcase";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [stickyClass, setStickyClass] = useState("relative");
  useEffect(() => {
    AOS.init();
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100
        ? setStickyClass("fixed top-0 left-0 bg-[#111111] z-50")
        : setStickyClass("relative");
    }
  };
  return (
    <BrowserRouter>
      <header
        className={`${stickyClass} w-full flex justify-between items-center bg-[#111111] sm:px-8 px-4 border-b border-b-[#e6ebf4]`}
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-40 object-contain" />
        </Link>
        <div>
          <Link
            to="/showcase"
            className="font-inter font-medium hover:text-green-600 text-white px-4 py-2 rounded-md mr-2 duration-300"
          >
            Showcase
          </Link>
          <Link
            to="/create-post"
            className="font-inter font-medium text-green-600 border border-green-600 hover:bg-green-600 hover:text-white px-4 py-2 rounded-md duration-300"
          >
            Create
          </Link>
        </div>
      </header>

      <main className="sm:p-8 px-4 py-8 w-full bg-[#1A1A1A] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/showcase" element={<Showcase />}></Route>
          <Route path="/create-post" element={<CreatePost />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
