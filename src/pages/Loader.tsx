import { useEffect, useState } from 'react';
import './Loader.css'
export const LoadingSpinner = () => {
    const [progress, setProgress] = useState(0)
    useEffect(() => {
        const duration = 3000; // 3 seconds total animation
        const increment = 1; // Progress will increment by 1
        const intervalTime = duration / 100; // Spread  increments evenly over time
    
        const intervalId = setInterval(() => {
          setProgress((prevProgress) => {
            if (prevProgress >= 100) {
              clearInterval(intervalId);
              return 100; // Ensure it stops at 100
            }
            return prevProgress + increment;
          });
        }, intervalTime);
    
        return () => clearInterval(intervalId); // Clean up the interval on unmount
      }, []);
    return (
        <div className="loading-container">
            <progress value={progress} max="100"></progress>
            <p>Loading...</p>
        </div>
    );
}