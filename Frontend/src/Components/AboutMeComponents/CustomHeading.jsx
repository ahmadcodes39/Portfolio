import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const CustomHeading = ({ title, certainId }) => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);
  return (
    <>
      <div
        data-aos="zoom-in-up"
        data-aos-delay="500"
        id={certainId}
        className="flex justify-center items-center text-center "
      >
        <h1 className="text-4xl text-white">
          A Glimpse of{" "}
          <span className="text-yellow-300 font-bold">{title}</span>
        </h1>
      </div>
    </>
  );
};

export default CustomHeading;
