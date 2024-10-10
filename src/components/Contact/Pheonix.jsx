import {
  OrbitControls,
  Preload,
  useAnimations,
  useGLTF,
  Stage,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useEffect, useRef } from "react";
import CanvasLoader from "../Loader";
// import model from './bird.gltf'
import BirdScene from "../../assets/3D objects/robot_playground.glb";

const PhoenixCanvas = () => {
  const birdRef = useRef(null);

  const { scene, animations } = useGLTF(BirdScene);

  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Experiment"].play();
  });

  return (
    <mesh ref={birdRef} position={[-0.5, -1, 1]} scale={[1.6, 1.6, 1.6]}>
      <primitive object={scene} />
    </mesh>
  );
};

const Phoenix = () => {
  return (
    <Canvas
    // shadows
    // frameloop="demand"
    // dpr={[1, 2]}
    // gl={{ preserveDrawingBuffer: true }}
    // camera={{
    //   fov: 45,
    //   near: 0.1,
    //   far: 200,
    //   position: [-4, 3, 6],
    // }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <directionalLight position={[1, 1, 1]} intensity={2} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 5, 10]} intensity={2} />
        <spotLight
          position={[0, 50, 10]}
          angle={0.15}
          penumbra={1}
          intensity={2}
        />
        <hemisphereLight
          skyColor="#b1e1ff"
          groundColor="#000000"
          intensity={1}
        />
        <OrbitControls
          // autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />

        <Stage
          adjustCamera={false} // Do not automatically adjust the camera
          intensity={1} // Ambient light intensity
          environment="sunset" // Optional environment map
        >
        <PhoenixCanvas />
        </Stage>

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default Phoenix;
