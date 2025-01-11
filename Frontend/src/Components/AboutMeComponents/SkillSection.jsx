import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const SkillSection = ({ data }) => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-yellow-500 mb-4" data-aos="fade-left" data-aos-delay="500">
        Skills & Expertise
      </h2>
      <ul className="grid grid-cols-2 gap-4" data-aos="fade-right" data-aos-delay="500">
        {data.map((data, index) => (
          <li
            key={index} 
            className="bg-gray-700 p-4 rounded-md text-center flex gap-2 justify-center items-center"
          >
            {data.skill}
            <span className="ml-2">{data.icon}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillSection;
