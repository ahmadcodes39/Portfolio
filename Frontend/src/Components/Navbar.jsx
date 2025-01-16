import { useState } from "react";
// import ScrollAnimation from "react-animate-on-scroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const activeClass = "text-yellow-300 font-semibold";
  const inactiveClass = "text-gray-300";

  return (
    <div id="home" className="flex justify-center sm:justify-between items-center px-4 sm:px-8 py-6 md:px-16 lg:px-36  bg-black z-1">
      <h1 className="text-yellow-300 font-bold animate__animated animate__fadeInLeft hidden sm:flex">
        Mr Ahmad
      </h1>
      <ul className="flex justify-center gap-4 custom-gap items-center animate__animated animate__fadeInRight">
        {["home", "about", "projects", "services", "contact"].map((link) => (
          <li key={link}>
              <a
                href={`#${link}`}
                onClick={() => setActiveLink(`#${link}`)}
                className={`${activeLink === `#${link}` ? activeClass : inactiveClass}`}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
