import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import AboutMe from "../Pages/AboutMe";

const Index = () => {
  return (
    <div>
      <BrowserRouter>
      <nav>
        <Navbar />
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/blogs" element={<Blogs />} />


          <Route path="/aboutme" element={<AboutMe />}  />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Index;
