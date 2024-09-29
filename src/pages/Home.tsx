import { useEffect, useRef } from 'react';
import logo from '../static/image/image.png';
import logo1 from '../static/image/image copy.png';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import myModel from '../static/3d/WORKINGRENDER.glb';
import video from '../static/video/Video-24.mp4'
import './Home.css'


// Car Model Component
const CarModel = () => {
    const { scene } = useGLTF(myModel);  // 3D model
    const carGroup = useRef<any>();

    const { x } = useSpring({
        from: { x: -5 },  // Starting position off-screen   
        to: { x: 0 },    // End position at the center
        config: { duration: 2000 },  // 2-second animation
    });

    useFrame(() => {
        if (carGroup.current) {
            carGroup.current.position.x = x.get();  // Update the car position
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
        // After component mounts, add class to trigger the animation
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
            <div className="video-container">
                <video autoPlay muted loop className="background-video">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <img src={logo1} alt="image" className='overlay-text' />
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
