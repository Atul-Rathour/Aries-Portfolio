import { OrbitControls, Preload, useGLTF, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";

const Tower = () => {
  const tower = useGLTF("./scene.gltf");

  return (
    <mesh>
      <primitive
        object={tower.scene}
        scale={3.5}
        position={[0, 2.5, 0]} // Center the model
        rotation={[0, Math.PI / 2, 0]}
      />
    </mesh>
  );
};

const TowerCanvas = () => {
  const canvas = document.createElement("canvas");
  const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
  if (!gl) {
    console.error(
      "WebGL is not supported on this browser. 3D content may not be available."
    );
    // Optionally, provide fallback content or show an error message to users
    return (
      <div>
        <h1>
          Your browser does not support WebGL. Please try a different browser.
        </h1>
      </div>
    );
  }
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 50,
        near: 0.1,
        far: 500,
        position: [0, 10, 20], // Adjust camera position to center the model
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={8}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Stage
          adjustCamera={false} // Do not automatically adjust the camera
          intensity={1} // Ambient light intensity
          environment="sunset" // Optional environment map
        >
          <Tower />
        </Stage>
        <spotLight
          position={[1, 10, 0]} // Position the spotlight as needed
          angle={0.5}
          penumbra={0.5}
          intensity={5}
          color="#66C2C5"
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-bias={-0.0001}
        />
        <ambientLight intensity={1} />{" "}
        {/* Add ambient light to fill in shadows */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default TowerCanvas;
