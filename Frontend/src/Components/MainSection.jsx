import { useEffect } from "react";
import API from "/Images/API.png";
import Backend from "/Images/Backend.png";
import custom from "/Images/custom.png";
import Enterprise from "/Images/entripise2.png";
import frontend from "/Images/frontend.jpeg";
import textTutils from "/Images/textTutils.jpeg";
import MERN from "/Images/MERN.png";
import WPF from "/Images/WPF.png";
import laptop from "/Images/laptop.jpeg";
import BloodBankWeb from "/Images/BloodBankWeb.png";
import Blog from "/Images/Blog.png";
import news from "/Images/news.png";
import PMS from "/Images/PMS.png";
import AdminDashboard from "/Images/AdminDashboard.png";

import Mainheading from "./MainSectionComponents/Mainheading";
import ServicesCard from "./MainSectionComponents/ServicesCard";
import SideHeading from "./MainSectionComponents/sideHeading";
import ProjectCard from "./MainSectionComponents/ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css";

const MainSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="p-16">
      <Mainheading title={"Services"} certainId={"services"} />
      <SideHeading title1={"Web Development"} title2={" Services"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <div data-aos="fade-right">
          <ServicesCard title={"Custom Website Development"} image={custom} />
        </div>
        <div data-aos="fade-left" data-aos-delay="100">
          <ServicesCard title={"MERN Stack Applications"} image={MERN} />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <ServicesCard title={"API Integration & Development"} image={API} />
        </div>
        <div data-aos="fade-right" data-aos-delay="300">
          <ServicesCard title={"Frontend Development"} image={frontend} />
        </div>
        <div data-aos="fade-left" data-aos-delay="400">
          <ServicesCard title={"Backend Development"} image={Backend} />
        </div>
      </div>

      <SideHeading title1={".NET Framework"} title2={" Services"} />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div data-aos="fade-right">
          <ServicesCard
            title={".NET MVC Application Development"}
            image={laptop}
          />
        </div>
        <div data-aos="fade-left" data-aos-delay="100">
          <ServicesCard title={"WPF Application Development"} image={WPF} />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <ServicesCard
            title={"Enterprise Application Solutions"}
            image={Enterprise}
          />
        </div>
      </div>

      <div className="py-24">
        <Mainheading title={"Projects"} certainId={"projects"} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        <div data-aos="fade-right">
          <a
            href="https://github.com/ahmadcodes39/EAD-Web-Project"
            target="_blank"
          >
            <ProjectCard
              img={BloodBankWeb}
              title={"BloodBank"}
              content={
                "A Blood Bank application which keeps track of Blood Donors and Patients"
              }
              tecStack={".Net MVC Architecture"}
            />
          </a>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <a
            href="https://github.com/ahmadcodes39/BlogApp-frontend"
            target="_blank"
          >
            <ProjectCard
              img={Blog}
              title={"Blog Application"}
              content={
                "A full stack Blog Application where any one can share and read other thoughts"
              }
              tecStack={"Mern Stack"}
            />
          </a>
        </div>
        <div data-aos="fade-down" data-aos-delay="200">
          <a href="https://github.com/ahmadcodes39/TextTools-ReactApp">
            <ProjectCard
              img={textTutils}
              title={"TextTools"}
              content={
                "TextTools empowers you to organize and format your text effortlessly just the way you want"
              }
              tecStack={"React Application"}
            />
          </a>
        </div>
        <div data-aos="fade-left" data-aos-delay="300">
          <a href="https://github.com/ahmadcodes39/DailyDigest-News-App-React-App">
            <ProjectCard
              img={news}
              title={"DailyDigest News"}
              content={
                "Daily News helps you to update about current affairs of your area"
              }
              tecStack={"React Application"}
            />
          </a>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400">
          <a href="https://github.com/ahmadcodes39/CSS-Managment-App">
            <ProjectCard
              img={AdminDashboard}
              title={"QASF Admin Dashboard"}
              content={
                "An Admin Dashboard Completed for Qasim Ali Shah Foundation"
              }
              tecStack={"React Application"}
            />
          </a>
        </div>
        <div data-aos="zoom-in-up" data-aos-delay="500">
          <a href="https://github.com/ahmadcodes39/SE-project">
            <ProjectCard
              img={PMS}
              title={"Parking Management"}
              content={
                "Parking Management System lets you book spots and park easily."
              }
              tecStack={".Net WPF Architecture"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
