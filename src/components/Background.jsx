// src/components/Background.jsx
import { Canvas } from '@react-three/fiber';
import { Float, Icosahedron, OrbitControls } from '@react-three/drei';

const FloatingShape = ({ position }) => (
  <Float speed={2} rotationIntensity={2} floatIntensity={2}>
    <Icosahedron args={[1, 0]} position={position}>
      <meshStandardMaterial color="#9f5fff" wireframe />
    </Icosahedron>
  </Float>
);

export default function Background() {
  const positions = [
    [-4, 2, -5],
    [4, -1, -6],
    [-2, -3, -4],
    [3, 3, -7],
    [0, 0, -3],
    [5, -2, -5],
    [-5, 1, -6],
  ];

  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      {positions.map((pos, index) => (
        <FloatingShape key={index} position={pos} />
      ))}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
}
