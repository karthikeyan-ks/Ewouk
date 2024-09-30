import { useEffect, useRef } from 'react';
import logo from '../static/image/image.png';
import logo1 from '../static/image/image copy.png';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useSpring, a } from '@react-spring/three';
import myModel from '../static/3d/WORKINGRENDER.glb';
import video from '../static/video/Video-24.mp4';
import './Home.css';

// Car Model Component
const CarModel = () => {
    const { scene } = useGLTF(myModel);  // 3D model
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
                {/* Semi-transparent background overlay */}
                <div className="background-overlay"></div>

                <video autoPlay muted loop className="background-video">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <img src={logo1} alt="image" className='overlay-text' />
            </div>

        </div>
    );
};

