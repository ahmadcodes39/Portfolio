import LeftPanel from "./HeroComponents/LeftPanel";
import RightPanel from "./HeroComponents/RightPanel";

const HeroSection = () => {
  return (
    <div className="flex flex-col flex-col-reverse lg:flex-row justify-between px-8 py-6 items-center md:px-16 lg:px-36">
      {/* Left panel will be stacked vertically and Right panel will be aligned next to it on larger screens */}
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default HeroSection;
