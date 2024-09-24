import { motion } from 'framer-motion';
import './About.css';
import logo from '../static/image/image.png';

export const About = () => {
    return (
        <div className="About">
            <div className='image-container1'>
                <img src={logo} alt="Ewouk-logo" />
            </div>
            <div className="Card">
            <motion.h1
                    initial={{ x: '-100vw' }}  // Start from the left (outside the screen)
                    animate={{ x: 0 }}  // Move to its normal position
                    transition={{ type: 'spring', stiffness: 20, duration: 0.5 }}  // Customize the animation speed
                >About Us</motion.h1>
                
                {/* Adding animation to the paragraph */}
                <motion.p
                    initial={{ x: '100vw' }}  // Start from the left (outside the screen)
                    animate={{ x: 0 }}  // Move to its normal position
                    transition={{ type: 'spring', stiffness: 20, duration: 0.5 }}  // Customize the animation speed
                >
                    Welcome to Team E-Wouk Racing, the e-Baja team from Saintgits College of Engineering. 
                    Founded in 2021, we are driven by innovation, engineering excellence, and a commitment 
                    to sustainable mobility. Our team uniquely consists of 30 electrical engineering students, 
                    who handle both electrical and mechanical tasks for our electric Baja vehicle, showcasing 
                    versatility and collaboration. This multidisciplinary approach allows us to break traditional 
                    engineering roles and excel in electric off-road vehicle competitions. Representing Saintgits 
                    College, we take pride in pushing the boundaries of performance and sustainability. As we 
                    continue to evolve, Team E-Wouk Racing aims to set new standards in the e-Baja community, 
                    driving the future of electric motorsports with passion and precision.
                </motion.p>
            </div>
        </div>
    );
};
