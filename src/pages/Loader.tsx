import React, { useEffect, useState } from 'react';
import loadingImage from '../static/image/loadingimage.png'; // Adjust the path as needed
import './Loader.css'; // Import the CSS file

const LoadingSpinner: React.FC = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress(prevProgress => {
                if (prevProgress >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prevProgress + 10; // Increment progress by 10%
            });
        }, 300); // Every 300ms
    }, []);

    return (
        <div className="loader-container">
            <div className="loader-box">
                <img src={loadingImage} alt="Loading..." className="loader-image" />
                <div className="loader-text">Loading...</div>
                {/* Progress bar */}
                <div className="progress-bar-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }} />
                </div>
            </div>
        </div>
    );
};

export default LoadingSpinner;
