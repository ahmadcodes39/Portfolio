import React from "react";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { PiFileSqlBold } from "react-icons/pi";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import dotNet from "/Images/dotNet.png";
import c from "/Images/c.png";
import cShap from "/Images/cShap.svg";
import { TbBrandNodejs } from "react-icons/tb";
import HeaderSection from "./AboutMeComponents/HeaderSection";
import AboutSection from "./AboutMeComponents/AboutSection";
import SkillSection from "./AboutMeComponents/SkillSection";
// import Mainheading from "./MainSectionComponents/Mainheading";
import CustomHeading from "./AboutMeComponents/CustomHeading";
import { RiBootstrapLine } from "react-icons/ri";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const skillsData = [
    {
      skill: "React",
      icon: <FaReact className="text-blue-600 text-3xl" />,
    },
    {
      skill: "Node.js",
      icon: <TbBrandNodejs className="text-green-600 text-3xl" />,
    },
    {
      skill: "MongoDB",
      icon: <SiMongodb className="text-green-800 text-3xl" />,
    },
    {
      skill: "SQL",
      icon: <PiFileSqlBold className="text-purple-600 text-3xl" />,
    },
    {
      skill: ".NET",
      icon: <img src={dotNet} alt=".NET" className="w-8 h-8" />,
    },
    {
      skill: "JavaScript",
      icon: <TbBrandJavascript className="text-yellow-500 text-3xl" />,
    },
    {
      skill: "C++",
      icon: <img src={c} alt="C++" className="w-8 h-8" />,
    },
    {
      skill: "C#",
      icon: <img src={cShap} alt="cShap" className="w-8 h-8" />,
    },
    {
      skill: "Bootstrap",
      icon: <RiBootstrapLine className="text-purple-400 text-3xl" />,
    },
    
    {
      skill: "CSS & Tailwind",
      icon: <RiTailwindCssFill className="text-teal-500 text-3xl" />,
    },
  ];
  return (
    <>
      <div className="py-5 mb-5" data-aos="zoom-in-up" data-aos-delay="500">
        <CustomHeading certainId={"about"} title={"Me & Myself"} />
      </div>
      <div
        className="bg-gray-900 text-white p-8"
        data-aos="zoom-in-up"
        data-aos-delay="500"
      >
        <HeaderSection />
        <AboutSection />
        <SkillSection data={skillsData} />
      </div>
    </>
  );
};

export default AboutMe;
