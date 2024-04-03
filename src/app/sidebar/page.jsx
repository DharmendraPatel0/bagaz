"use client";
import React, { useState } from "react";
import "./sidebar.scss";
import Work from "../components/work/page";
import About from "../components/about/page";
import Contact from "../components/contact/page";
function Sidebar() {
  const [openSidebarObj, setOpenSidebarObj] = useState({
    work: false,
    about: false,
    contact: false,
  });

  const handleOpenParticularSidebar = (name) => {
    setOpenSidebarObj({ ...openSidebarObj, [name]: !openSidebarObj?.[name] });
  };

  return (
    <div className="container">
      <button onClick={() => handleOpenParticularSidebar("work")}>Work</button>
      {openSidebarObj?.work && <Work />}
      <button onClick={() => handleOpenParticularSidebar("about")}>
        About
      </button>
      {openSidebarObj?.about && <About />}
      <button onClick={() => handleOpenParticularSidebar("contact")}>
        Contact
      </button>
      {openSidebarObj?.contact && <Contact />}
    </div>
  );
}

export default Sidebar;
