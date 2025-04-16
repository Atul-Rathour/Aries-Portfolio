import {
  Decal,
  OrbitControls,
  useTexture,
  Preload,
  Float,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.8} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} /> {/* Back to original smoothness */}
        <meshStandardMaterial
          color="cyan"
          metalness={0.6}
          roughness={0.3}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  if (!window.WebGLRenderingContext) {
    console.error(
      "WebGL is not supported on this browser. 3D content may not be available."
    );
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
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enableDamping={true}
          dampingFactor={0.05}
        />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export { BallCanvas };