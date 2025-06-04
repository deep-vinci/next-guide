// app/page.tsx or src/pages/index.tsx (depending on setup)
"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "@/app/components/Box";

export default function Home() {
    return (
        <main style={{ height: "100vh" }}>
            <Canvas camera={{ position: [3, 3, 3] }}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box />
                <OrbitControls />
            </Canvas>
        </main>
    );
}
