// import React from 'react'
import profilePic from "/Images/Logo2.png";
const RightPanel = () => {
  return (
    <div className="w-[50%] lg:w-[100%]">
      <img
        src={profilePic}
        alt=""
        className="rounded-full shadow-lg hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInRight"
      />
    </div>
  );
};

export default RightPanel;
