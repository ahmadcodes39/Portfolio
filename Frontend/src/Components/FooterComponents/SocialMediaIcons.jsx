import React from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const SocialMediaIcons = () => {
  const socialMediaLinks = [
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/923290355987",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/syed-ahmad-ali-3461012a9/",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/ahmadcodes39",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/ahmadalishah531/",
    },
    {
      name: "Gmail",
      icon: <FaEnvelope />,
      link: "mailto:syedahmadalishah39@gmail.com",
    },
  ];

  return (
    <div className="flex gap-4">
      {socialMediaLinks.map((platform, index) => (
        <a
          key={index}
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 text-white hover:opacity-90 hover:bg-orange-600 transition-opacity duration-200"
          title={platform.name}
        >
          {platform.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
