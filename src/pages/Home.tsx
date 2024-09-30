import { useEffect, useRef, useState } from 'react';
import logo from '../static/image/image.png';
import logo1 from '../static/image/image copy.png';
import video from '../static/video/Video-24.mp4';
import { About } from './About'; // Import About component
import './Home.css';

export const Home = () => {
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const ewoukNameRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null); // Ref for About section
    const [isAboutVisible, setIsAboutVisible] = useState(false);

    useEffect(() => {
        // Triggering animation after component mounts
        const timer = setTimeout(() => {
            if (imageContainerRef.current && ewoukNameRef.current) {
                imageContainerRef.current.classList.add('unblur');
                ewoukNameRef.current.classList.add('unblur');
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        // Intersection Observer for About section
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsAboutVisible(true); // Show About section when in view
                }
            },
            {
                root: null,
                threshold: 0.1, // Trigger when 10% of About section is visible
            }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => {
            if (aboutRef.current) {
                observer.unobserve(aboutRef.current);
            }
        };
    }, []);

    return (
        <div className='home-container'>
            {/* Video background */}
            <div className='image-container'>
                <img src={logo} alt="Ewouk-logo" />
            </div>
            <video autoPlay muted loop className="background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay for content */}
            <div className="video-container">
                <div className="background-overlay"></div>
                <div className="image-container" ref={imageContainerRef}>
                    <img src={logo} alt="Ewouk-logo" />
                </div>
            </div>

            <div className="overlay-text">
                <img src={logo1} alt="Image Text" />
            </div>

            {/* About Section */}
            <div ref={aboutRef} className="about-section">
                {isAboutVisible && <About />} {/* Render About when visible */}
            </div>
        </div>
    );
};
