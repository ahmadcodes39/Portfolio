import React, { useState } from "react";

const Navigation_Links = () => {
  const [activeLink, setActiveLink] = useState("#home");
  const activeClass = "text-yellow-300 font-semibold";
  const inactiveClass = "text-gray-300";

  return (
    <div>
      <ul className="flex gap-4 list-none"> 
        {["home", "about", "projects", "services", "contact"].map((link, index) => (
          <li key={index}>
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

export default Navigation_Links;
