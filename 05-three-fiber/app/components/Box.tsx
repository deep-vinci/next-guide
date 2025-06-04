// components/Box.tsx
"use client";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function Box() {
    const meshRef = useRef<Mesh>(null!);

    useFrame(() => {
        meshRef.current.rotation.y += 0.01;
        meshRef.current.rotation.x += 0.01;
    });

    return (
        <mesh ref={meshRef}>
            <boxGeometry args={[1, 2, 3]} />
            <meshBasicMaterial color="green" wireframe />
        </mesh>
    );
}
