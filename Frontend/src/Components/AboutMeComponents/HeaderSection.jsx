import React from "react";
import MinePic from "/Images/mine3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeaderSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);
  return (
    <div className="flex flex-col items-center mb-12" data-aos="zoom-in-down" data-aos-delay="500">
      <img
        src={MinePic}
        alt="Profile Picture"
        className="w-32 h-32 rounded-full border-4 border-yellow-500 mb-4 object-cover"
      />
      <h1 className="text-3xl font-semibold">Hi, I'm Ahmad Ali</h1>
      <p className="text-xl mt-2">
        Web Developer | Software Engineer | Problem Solver
      </p>
    </div>
  );
};

export default HeaderSection;
