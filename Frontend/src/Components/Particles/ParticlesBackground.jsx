import { Particles } from "particles.js"; 
import ParticlesConfig from "./Particles_Config";

const ParticlesBackground = () => {
  return (
    <div>
      <Particles params={ParticlesConfig}></Particles>
    </div>
  );
};

export default ParticlesBackground;
