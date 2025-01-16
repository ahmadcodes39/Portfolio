import React from "react";
import Contact_LeftPanel from "./ContactUsComponents/Contact_LeftPanel";
import Contact_RightPanel from "./ContactUsComponents/Contact_RightPanel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ContactUs = () => {
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
        id={"contact"}
        className="flex justify-center items-center text-center py-10"
      >
        <h1 className="text-4xl text-white">
          Let's Collaborate{" "}
          <span className="text-yellow-300 font-bold">Togeather</span>
        </h1>
      </div>
      <div
        id="contact"
        className="bg-gray-900 rounded-md flex flex-col lg:flex-row items-center justify-between p-3 sm:py-10 sm:px-10 gap-10"
        data-aos="zoom-in-up"
        data-aos-delay="500"
      >
        <Contact_LeftPanel />
        <Contact_RightPanel />
      </div>
    </>
  );
};

export default ContactUs;
