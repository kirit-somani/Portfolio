import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── Constants ──────────────────────────────────────────────────────────────
const NODE_COUNT = 160;
const SPHERE_RADIUS = 4.2;
const CONNECTION_DIST = 1.6;
const ACCENT = new THREE.Color("#22d3ee");
const DIM = new THREE.Color("#0e7490");

// ─── Fibonacci sphere positions ──────────────────────────────────────────────
function fibonacciSphere(n: number, r: number): Float32Array {
  const positions = new Float32Array(n * 3);
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < n; i++) {
    const y = 1 - (i / (n - 1)) * 2;
    const radius = Math.sqrt(1 - y * y);
    const theta = golden * i;
    positions[i * 3] = Math.cos(theta) * radius * r;
    positions[i * 3 + 1] = y * r;
    positions[i * 3 + 2] = Math.sin(theta) * radius * r;
  }
  return positions;
}

// ─── Nodes (points) ──────────────────────────────────────────────────────────
function Nodes({ positions }: { positions: Float32Array }) {
  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [positions]);

  const mat = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: ACCENT,
        size: 0.07,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.9,
      }),
    []
  );

  return <points geometry={geo} material={mat} />;
}

// ─── Edges (lines between nearby nodes) ──────────────────────────────────────
function Edges({ positions }: { positions: Float32Array }) {
  const edgePositions = useMemo(() => {
    const pts: number[] = [];
    const n = positions.length / 3;
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < CONNECTION_DIST) {
          pts.push(
            positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2],
            positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]
          );
        }
      }
    }
    return new Float32Array(pts);
  }, [positions]);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(edgePositions, 3));
    return g;
  }, [edgePositions]);

  const mat = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: DIM,
        transparent: true,
        opacity: 0.25,
      }),
    []
  );

  return <lineSegments geometry={geo} material={mat} />;
}

// ─── Animated group ──────────────────────────────────────────────────────────
function NetworkGroup() {
  const groupRef = useRef<THREE.Group>(null);
  const { gl } = useThree();

  // Track mouse in NDC space
  const mouse = useRef({ x: 0, y: 0 });
  useMemo(() => {
    const canvas = gl.domElement;
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouse.current.y = -((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [gl]);

  const positions = useMemo(
    () => fibonacciSphere(NODE_COUNT, SPHERE_RADIUS),
    []
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    // Gentle auto-rotation
    groupRef.current.rotation.y = t * 0.08;
    groupRef.current.rotation.x = Math.sin(t * 0.05) * 0.2;
    // Subtle mouse parallax
    groupRef.current.rotation.y += mouse.current.x * 0.06;
    groupRef.current.rotation.x += mouse.current.y * 0.04;
  });

  return (
    <group ref={groupRef}>
      <Nodes positions={positions} />
      <Edges positions={positions} />
    </group>
  );
}

// ─── Outer glow orb ──────────────────────────────────────────────────────────
function GlowOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const s = 1 + Math.sin(clock.getElapsedTime() * 0.8) * 0.012;
    meshRef.current.scale.setScalar(s);
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[4.4, 32, 32]} />
      <meshBasicMaterial
        color="#0e7490"
        transparent
        opacity={0.04}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

// ─── Exported component ───────────────────────────────────────────────────────
const LandingScene = () => {
  return (
    <div className="landing-scene">
      <Canvas
        camera={{ position: [0, 0, 11], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#22d3ee" />
        <NetworkGroup />
        <GlowOrb />
      </Canvas>
      {/* Decorative label */}
      <div className="landing-scene-label">
        <span className="lsl-dot" />
        neural network
      </div>
    </div>
  );
};

export default LandingScene;
