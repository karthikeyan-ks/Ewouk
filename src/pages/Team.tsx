import React from 'react';
import './Team.css'; // Import the CSS file for styling

// Import images directly if they are inside the src folder
import dpImage from '../static/image/Dp.jpeg'; 

const teamMembers = [
    { name: 'Shanu Jaimon Cherian', photo: dpImage, position: 'Captain' },
    { name: 'Ashwin Girish', photo: dpImage, position: 'Team Manager' },
    { name: 'Sidharth M Salim', photo: dpImage, position: 'Mechanical Head' },
    { name: 'Abel Lalu Thomas', photo: dpImage, position: 'Electrical Head' },
    { name: 'Divina Ann Benoy', photo: dpImage, position: 'Fabrication Head' },
    { name: 'Jayadev S Nair', photo: dpImage, position: 'Driver' },
    { name: 'Mohammad Farhan Thangal', photo: dpImage, position: 'Treasurer' },
    // Add more team members as needed
];

export const Team = () => {
    return (
        <div className="team-container">
            <h1>Executive Panel</h1> {/* Fixed the spelling */}
            
            <div className="team-row">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member">
                        <img src={member.photo} alt={member.name} className="team-photo" />
                        <p>{member.name}</p>
                        <div className="position">{member.position}</div> {/* Position text */}
                    </div>
                ))}
            </div>

            <h1>Team Member</h1> {/* Moved inside the main container */}
        </div>
    );
};
