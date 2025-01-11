import React from "react";
import GetinTouch from "./FooterComponents/GetinTouch";
import Navigation_Links from "./FooterComponents/Navigation_Links";
import SocialMediaIcons from "./FooterComponents/SocialMediaIcons";
import FooterBottom from "./FooterComponents/FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center space-y-8 md:flex-row md:justify-between md:space-y-0">
       <GetinTouch/> 
       <Navigation_Links/>
       <SocialMediaIcons/>
      </div>
      <FooterBottom/>      
    </footer>
  );
};

export default Footer;
