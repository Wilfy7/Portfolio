import React, { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";         
import MobileNav from "./layout/MobileNav";  

const ResponsiNav = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };
  
      // Listen for screen resize
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return isMobile ? <MobileNav /> : <Navbar />;
  };

export default ResponsiNav;
