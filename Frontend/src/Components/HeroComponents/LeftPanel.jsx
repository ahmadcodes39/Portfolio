import { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import "../.././App.css";


const LeftPanel = () => {
  const [isTypedReady, setIsTypedReady] = useState(false);

  useEffect(() => {
    setIsTypedReady(true);
  }, []);

  return (
    <div className="custom-width animate__animated animate__fadeInUp w-full">
      <h2 className="text-yellow-300 animate__animated animate__fadeInUp">
        HI THERE.
      </h2>
      <h1 className="text-white text-3xl mb-4">
        {isTypedReady && (
          <ReactTyped
            strings={[
              "I Am Ahmad Ali Shah!",
              "I Am Frontend React Developer",
              "I Am Backend Node.js Developer",
              "I Am .Net MVC Framework Developer",
              "Let’s build something amazing!",
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        )}
      </h1>
      <p className="text-white  w-full md:w-3/4">
        A passionate Computer Science student with a keen interest in web
        development and AI. I specialize in building responsive, user-friendly
        applications using React, Redux, and the MERN stack. I love solving
        complex problems and creating innovative solutions. Let's collaborate to
        bring your ideas to life!
      </p>

      <a
        href="/Resume/MyResume.pdf"
        download="Resume.pdf"
      >
        <button className="bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 hover:rounded-xl p-4 text-center text-lg font-semibold transition duration-300 mt-3 md:w-1/2 md:text-center w-full ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 shadow-md hover:shadow-lg animate__animated animate__fadeInLeft">
          Let's Get Started
        </button>
      </a>
    </div>
  );
};

export default LeftPanel;
