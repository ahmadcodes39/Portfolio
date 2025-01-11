import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true, 
        });
      }, []);
  return (
    <section className="mb-12" >
      <h2 className="text-2xl font-semibold text-yellow-500 mb-4"data-aos="fade-left" data-aos-delay="500">About Me</h2>
      <p data-aos="fade-right" data-aos-delay="500">
        I'm a passionate web developer with expertise in front-end and back-end
        technologies. I specialize in building user-friendly web applications
        and have a deep interest in backend development and database management.
        I enjoy solving complex problems and continuously learning new
        technologies to stay on top of the latest trends.
      </p>
    </section>
  );
};

export default AboutSection;
