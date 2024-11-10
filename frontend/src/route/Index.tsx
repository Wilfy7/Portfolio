import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Home from "../Pages/home/Home";
import AboutMe from "../Pages/aboutMe/AboutMe";
import Blogs from "../Pages/blogs/Blogs";
import Projects from "../Pages/projects/Projects";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/blogs" element={<Blogs />} />

          <Route path="/aboutme" element={<AboutMe />}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Index;
