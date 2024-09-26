import { useEffect, useRef } from 'react';
import logo from '../static/image/image.png';
import logo1 from '../static/image/image copy.png';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

// Car Model Component
const CarModel = () => {
    const carGroup = useRef<any>();
    let scene;

    // Attempt to load the GLB model
    try {
        const { scene: loadedScene } = useGLTF('/static/3d/WORKING RENDER.glb'); // Updated path
        scene = loadedScene;
    } catch (error) {
        console.error("Error loading GLB model:", error);
    }

    const { x } = useSpring({
        from: { x: -5 },  // Starting position off-screen
        to: { x: 0 },     // End position at the center
        config: { duration: 2000 },  // 2-second animation
    });

    useFrame(() => {
        if (carGroup.current) {
            carGroup.current.position.x = x.get();  // Update the car position
        }
    });

    return (
        <a.group ref={carGroup} scale={[2.5, 2.5, 2.5]}>
            {scene && <primitive object={scene} />} {/* Render only if scene is loaded */}
        </a.group>
    );
};

export const Home = () => {
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const ewoukNameRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (imageContainerRef.current && ewoukNameRef.current) {
                imageContainerRef.current.classList.add('unblur');
                ewoukNameRef.current.classList.add('unblur');
            }
        }, 20000); // Match delay to the animation duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className='image-container' ref={imageContainerRef}>
                <img src={logo} alt="Ewouk-logo" />
            </div>
            <div className='ewouk-name' ref={ewoukNameRef}>
                <img src={logo1} alt='ewouk-name' />
            </div>
            <div className='model-container'>
                <Canvas style={{ width: '100%', height: '100%' }}>
                    <ambientLight intensity={1.5} />
                    <directionalLight position={[3, 6, 4]} intensity={2} />
                    <OrbitControls enableZoom={false} />
                    <CarModel />
                </Canvas>
            </div>
        </div>
    );
};
