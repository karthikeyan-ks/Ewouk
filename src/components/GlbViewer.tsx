import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
const Model = () => {
    // Load the GLB file  
    const { scene } = useGLTF('/path/to/your/model.glb');
    return <primitive object={scene} />;
  };
const GLBViewer = () => {
    return (
      <Canvas>
        {/* Add some lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        
        {/* Load and display the GLB model */}
        <Model />
        
        {/* Add camera controls to orbit around the object */}
        <OrbitControls />
      </Canvas>             
    );
  };
  
  export default GLBViewer;