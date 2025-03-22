import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Home from "../Pages/home/Home";
import AboutMe from "../Pages/aboutMe/AboutMe";
import Blogs from "../Pages/blogs/Blogs";
import Projects from "../Pages/projects/Projects";
import Footer from "../components/footer/Footer";
import MobileNav from "../components/layout/MobileNav";

const Index = () => {
  return (
    <div>
      <Router>
      <nav>
        <Navbar />
      </nav>
      <nav>
        <MobileNav />
      </nav>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/blogs" element={<Blogs />} />

          <Route path="/aboutme" element={<AboutMe />}  />

          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Index;
