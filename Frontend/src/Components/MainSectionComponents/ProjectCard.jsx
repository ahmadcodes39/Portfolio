
const ProjectCard = ({ img, title, content, tecStack }) => {
    return (
        <div className="text-gray-800">

      <div className="max-w-md rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
        <img
          src={img}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-60 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-6 space-y-6 bg-gray-900">
          <div className="space-y-2">
            <h2 className="sm:text-2xl lg:text-3xl font-semibold tracking-wide text-white">
              {title}
            </h2>
            <p className="text-gray-400">{content}</p>
          </div>
          <span className="bg-gray-700 px-3 py-1 text-xs w-[150px] rounded-full text-white">
            {tecStack}
          </span>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide bg-yellow-600 rounded-md  dark:text-gray-50"
          >
            Explore more
          </button>
        </div>
      </div>
      </div>

    );
  };
  
  export default ProjectCard;
  