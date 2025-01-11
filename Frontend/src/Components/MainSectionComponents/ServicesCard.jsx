

const ServicesCard = ({ title, image }) => {
    return (
      <div className="border-2 border-gray-400 rounded-lg p-5 flex flex-col gap-3 items-center justify-center">
        <img src={image} alt="" className="w-16 h-16 object-cover rounded-md" />
        <h2 className="text-center text-white text-xs ">{title}</h2>
      </div>
    );
  };
  
  export default ServicesCard;
  