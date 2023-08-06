import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Stage, CameraShake, useAnimations } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  //const computer = useGLTF("./desktop_pc/scene.gltf");
  const computer = useGLTF("./desktop_pc/scenecopy.gltf");
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
        //groundColor={"white"}
        />        
        <pointLight intensity={1}/>
        <spotLight         
          intensity={1}           
          position={[0, 20, 100]}
          angle={Math.PI/2}
          penumbra={0.5}
         // castShadow
         // shadow-mapSize={1024}
        /> 
        <primitive 
        object={computer.scene}        
        scale={isMobile ? 0.6 : 1}
        position={[0, -1.5, 2.5]}
        //position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        //rotation={[-0.01, -0.2, -0.1]}  
        />        
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false); 
  
  useEffect(() => {    
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
        
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return(
    <Canvas 
      //camera={{ position: [0, 0, 3] }}
      frameloop="demand"
      shadows camera={{ fov: 50 }}
      //shadows camera={{position: [20, 3, 5], fov:25}}
      gl={{preserveDrawingBuffer: true}}
      >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls 
            enableZoom={true}
            //minDistance={5}
            //maxDistance={1}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
          enableRotate={false}
            // minAzimuthAngle={0}
            // maxAzimuthAngle={0}
            // minPolarAngle={0}
            // maxPolarAngle={0}
            
          />
        <CameraShake
          maxYaw={0.1} // Max amount camera can yaw in either direction
          maxPitch={0.1} // Max amount camera can pitch in either direction
          maxRoll={0.1} // Max amount camera can roll in either direction
          yawFrequency={0.1} // Frequency of the the yaw rotation
          pitchFrequency={0.1} // Frequency of the pitch rotation
          rollFrequency={0.1} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
      />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas; 