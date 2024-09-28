import './Sponsers.css'; // Import the CSS file for styling
import logo from '../static/image/image.png';
import realwebLogo from '../static/image/realweb.png'; // Import realweb logo
import teklearnLogo from '../static/image/TEKLEARN.png'; // Import Teklearn logo

const sponsorsList = [
    { name: 'REALWEB', image: realwebLogo },
    { name: 'TEKLEARN', image: teklearnLogo },
    // Add more sponsors here
];

export const Sponsers = () => {
    return (
        <div className="team-container">
            <div className='image-container1'>
                <img src={logo} alt="Ewouk-logo" />
            </div>
            <div className='heading'>
                <h1>OUR SPONSORS</h1>
            </div>
            <div className="sponsors-grid">
                {sponsorsList.map((sponsor, index) => (
                    <div key={index} className="sponsor-card1">
                        <div className='sponsercard'>
                        <img src={sponsor.image} alt={sponsor.name} className="sponsor-logo" />
                        </div>
                        <p className="sponsor-name">{sponsor.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
