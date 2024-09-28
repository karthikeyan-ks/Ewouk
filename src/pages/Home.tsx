import { useEffect, useRef } from 'react';
import logo from '../static/image/image.png';
import logo1 from '../static/image/image copy.png';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';

// Car Model Component
const CarModel = () => {
    const { scene } = useGLTF('/src/static/3d/WORKINGRENDER.glb');  // 3D model
    const carGroup = useRef<any>();

    // Spring animation for bouncing in from the top
    const { y } = useSpring({
        from: { y: 15 },  // Start far above the scene (off-screen)
        to: { y: 0 },  // End position at the center of the scene
        config: { tension: 180, friction: 12 },  // Adjust for bounce effect
    });

    useFrame(() => {
        if (carGroup.current) {
            carGroup.current.position.y = y.get();  // Update the y position of the car
        }
    });

    return (
        <a.group ref={carGroup} scale={[2.5, 2.5, 2.5]}>
            <primitive object={scene} />
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
        }, 2000); // Delay to match animation timing

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='home-container'>
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
