import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";

const About3D = () => {
    const meshRef = useRef(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.2;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} scale={2}>
                <icosahedronGeometry args={[1, 1]} />
                <MeshDistortMaterial
                    color="#7042f8"
                    distort={0.6}
                    speed={2}
                    roughness={0}
                />
            </mesh>
        </Float>
    );
};

export default About3D;
