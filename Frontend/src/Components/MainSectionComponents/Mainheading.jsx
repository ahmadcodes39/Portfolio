import React from 'react'

const Mainheading = ({title,certainId}) => {
  return (
    <>
      <div id={certainId} className="flex justify-center items-center text-center animate__animated animate__fadeInDown">
        <h1 className="text-4xl text-white">
          MY <span className="text-yellow-300 font-bold">{title}</span>
        </h1>
      </div>
    </>
  );
};

export default Mainheading;
