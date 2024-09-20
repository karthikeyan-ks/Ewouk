import { useEffect, useState } from 'react';
import './Loader.css'
export const LoadingSpinner = () => {
    const [progress, setProgress] = useState(0)
    const ProgressBar = () =>{
        const duration = 3000; // 3 seconds
        const increment = 100; // Increment per interval
        const intervalTime = duration / (100 / increment);
        const id = setInterval(() => {
            console.log("progress")
            setProgress((prev) => {
                const newProgress = prev + increment;
                if (newProgress >= 100) {
                    clearInterval(id);
                    return 100; // Ensure it reaches exactly 100%
                }
                 // Log new progress value
                return newProgress;
            });
        }, 100)
    }
    
    useEffect(() => {
        ProgressBar()
    }, []);
    useEffect(()=>{
        console.log("progress change",progress)
    },[progress])
    return (
        <div className="loading-container">
            <progress value={progress} max="100"></progress>
            <p>Loading...</p>
        </div>
    );
}