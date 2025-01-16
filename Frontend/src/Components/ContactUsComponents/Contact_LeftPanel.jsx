import React, { useState } from "react";
import Contactus from "/Images/Contactus.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Contact_LeftPanel = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div
      className="flex flex-col items-center gap-6 text-center"
      data-aos="fade-left"
      data-aos-delay="500"
    >
      <h1 className="text-6xl text-white font-bold custom-font">Let's talk!</h1>
      <p className="text-sm text-gray-300">Let's built something greate and amazing.</p>
      <img
        src={Contactus}
        alt="Contact Illustration"
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Contact_LeftPanel;
