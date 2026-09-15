"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function CoreSystem({ active }: { active: boolean }) {
  const group = useRef<Group>(null);

  useFrame((state, delta) => {
    if (!active || !group.current || document.hidden) return;
    group.current.rotation.y += delta * 0.08;
    group.current.position.y = Math.sin(state.clock.elapsedTime * 0.75) * 0.08;
  });

  return (
    <group ref={group} rotation={[-0.16, 0.62, 0]}>
      <Float speed={1.3} rotationIntensity={0.08} floatIntensity={0.16}>
        <RoundedBox args={[2.15, 2.15, 2.15]} radius={0.16} smoothness={5} position={[0, 0.48, 0]}>
          <meshPhysicalMaterial color="#07172f" metalness={0.72} roughness={0.18} clearcoat={0.7} emissive="#0b55cf" emissiveIntensity={0.11} />
        </RoundedBox>
        <RoundedBox args={[2.17, 2.17, 2.17]} radius={0.16} smoothness={5} position={[0, 0.48, 0]}>
          <meshBasicMaterial color="#58a6ff" wireframe transparent opacity={0.3} />
        </RoundedBox>
      </Float>
      <RoundedBox args={[4.1, 0.26, 3.4]} radius={0.1} smoothness={4} position={[0, -1.0, 0]}>
        <meshStandardMaterial color="#08162a" metalness={0.72} roughness={0.27} />
      </RoundedBox>
      <RoundedBox args={[3.42, 0.22, 2.82]} radius={0.1} smoothness={4} position={[0, -0.72, 0]}>
        <meshStandardMaterial color="#0a2142" metalness={0.65} roughness={0.23} emissive="#0d56c7" emissiveIntensity={0.06} />
      </RoundedBox>
      <RoundedBox args={[2.75, 0.18, 2.15]} radius={0.08} smoothness={4} position={[0, -0.46, 0]}>
        <meshStandardMaterial color="#0b2c5c" metalness={0.56} roughness={0.22} />
      </RoundedBox>
    </group>
  );
}

export function Hero3DScene({ active }: { active: boolean }) {
  return (
    <Canvas dpr={[1, 1.5]} frameloop={active ? "always" : "demand"} camera={{ position: [0, 1.3, 7.5], fov: 38 }} gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}>
      <ambientLight intensity={0.42} />
      <directionalLight position={[4, 6, 4]} intensity={2.8} color="#b8dcff" />
      <pointLight position={[-3, 0, 3]} intensity={18} distance={9} color="#246bfd" />
      <pointLight position={[3, 2, -2]} intensity={12} distance={8} color="#38d9ff" />
      <CoreSystem active={active} />
    </Canvas>
  );
}
