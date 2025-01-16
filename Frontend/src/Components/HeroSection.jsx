import LeftPanel from "./HeroComponents/LeftPanel";
import RightPanel from "./HeroComponents/RightPanel";

const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-8 py-6 items-center md:px-16 lg:px-36">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default HeroSection;
