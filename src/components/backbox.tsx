import './backbox.css';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import { useSpring, a } from '@react-spring/three'; // Import react-spring for animation
import logo from '../static/image/image.png';
import logo1 from '../static/image/image copy.png';

// Car Model Component
const CarModel = () => {
  const { scene } = useGLTF('/src/static/3d/WORKING RENDER.glb');  // 3D model
  const carGroup = useRef<any>();

  // Spring animation for moving the car from left to its position
  const { x } = useSpring({
    from: { x: -10 },   // Starting position off-screen
    to: { x: 0 },       // End position at the center
    config: { duration: 2000 },  // 2-second animation
    delay: 0,  // No delay, start immediately
  });

  // Use frame to update car position every frame
  useFrame(() => {
    if (carGroup.current) {
      carGroup.current.position.x = x.get();  // Get the current animated x value
    }
  });

  return (
    <a.group ref={carGroup} scale={[2.5, 2.5, 2.5]}>
      <primitive object={scene} />
    </a.group>
  );
};

const Backbox = () => {
  return (
    <div className='box'>
      <div className='image-container'>
        <img src={logo} alt="Ewouk-logo" />
      </div>
      <div className='ewouk-name'>
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

export default Backbox;
