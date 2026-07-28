import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.5, 0.4, 128, 16]} />
      <meshStandardMaterial 
        color="#008080" 
        wireframe={true} 
        transparent 
        opacity={0.3}
      />
    </mesh>
  );
}

const AboutScene = () => {
  return (
    <div className="about-scene-container">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#008080" />
        <RotatingShape />
      </Canvas>
    </div>
  );
};

export default AboutScene;
