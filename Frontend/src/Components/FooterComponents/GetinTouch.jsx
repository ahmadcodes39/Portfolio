import React from "react";

const GetinTouch = () => {
  return (
    <div className="text-center md:text-left">
      <h5 className="text-2xl font-semibold text-yellow-500 mb-4">
        Get in Touch
      </h5>
      <p className="text-gray-300">
        If you'd like to work together or just chat,
        <p>
          feel free to{" "}
          <a href="/contact" className="text-yellow-500 hover:underline">
            contact me!
          </a>
        </p>
      </p>
    </div>
  );
};

export default GetinTouch;
