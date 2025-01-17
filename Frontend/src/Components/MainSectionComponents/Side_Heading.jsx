// import React from 'react'

const SideHeading = ({title1,title2}) => {
  return (
    <div className="py-16">
      <h1 className='text-xl text-yellow-500 font-bold'>{title1} <span className=" text-gray-300">{title2}</span></h1>
    </div>
  )
}

export default SideHeading
