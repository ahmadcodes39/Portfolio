import React from "react";
// import "../.././src/./App.css";
import "../.././App.css";


const GetinTouch = () => {
  return (
    <div className="custom-flex text-center md:text-left">
      <h5 className="text-2xl font-semibold text-yellow-500 mb-4">
        Get in Touch
      </h5>
      <p className="text-gray-300">
        If you'd like to work together,
        <p>
          feel free to{" "}
          <a href="https://wa.me/923290355987" target="_blank" className="text-yellow-500 hover:underline">
            contact me!
          </a>
        </p>
      </p>
    </div>
  );
};

export default GetinTouch;
