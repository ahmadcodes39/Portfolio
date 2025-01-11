import AboutMe from "./Components/AboutMe";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import MainSection from "./Components/MainSection";
import Navbar from "./Components/Navbar";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="font-ubuntu">
      {/* <ParticlesBackground/> */}
      <Toaster position="top-center"/>
      <Navbar />
      <HeroSection />
      <MainSection />
      <div className="p-10">
        <AboutMe />
      </div>
      <div className="p-16">
        <ContactUs />
      </div>
      <div className="pt-16">
      <Footer/>
      </div>
    </div>
  );
}
