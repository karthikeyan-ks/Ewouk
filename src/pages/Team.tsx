import './Team.css'; // Import the CSS file for styling
import dpImage from '../static/image/Dp.jpeg'; 
import logo from '../static/image/image.png';
const executivePanel = [
    { name: 'Shanu Jaimon Cherian', photo: dpImage, position: 'Captain' },
    { name: 'Ashwin Girish', photo: dpImage, position: 'Team Manager' },
    { name: 'Sidharth M Salim', photo: dpImage, position: 'Mechanical Head' },
    { name: 'Abel Lalu Thomas', photo: dpImage, position: 'Electrical Head' },
    { name: 'Divina Ann Benoy', photo: dpImage, position: 'Fabrication Head' },
    { name: 'Jayadev S Nair', photo: dpImage, position: 'Driver' },
    { name: 'Mohammad Farhan Thangal', photo: dpImage, position: 'Treasurer' },
];

const teamMembers = [
    { name: 'Team Member 1', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
    { name: 'Team Member 2', photo: dpImage, position: 'Member' },
   
];

export const Team = () => {
    return (
        
        <div className="team-container">
             
            <div className='image-container1'>
                <img src={logo} alt="Ewouk-logo" />
            </div>
            <h1 className='ex'>Executive Panel</h1>
            <div className="team-row executive-row">
                {executivePanel.map((member, index) => (
                    <div key={index} className="team-member executive-member">
                        <img src={member.photo} alt={member.name} className="team-photo" />
                        <p>{member.name}</p>
                        <div className="position">{member.position}</div>
                    </div>
                ))}
            </div>

            <h1 className='team'>Team Members</h1>
            <div className="team-row member-row">
                {teamMembers.map((member, index) => (
                    <div key={index} className="team-member1">
                        <img src={member.photo} alt={member.name} className="team-photo small-photo" />
                        <p>{member.name}</p>
                        <div className="position1">{member.position}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};
