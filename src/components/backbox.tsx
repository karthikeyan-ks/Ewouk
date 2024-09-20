
import './backbox.css';
import logo from '../static/image/image.png'
import logo1 from '../static/image/image copy.png'
const backbox = () => {
  return (
   <div className='box'>
        <div className='image-container'>
        <img src={logo} alt="Ewouk-logo" />
        </div>
        <div className='ewouk-name'>
        <img src={logo1} alt='ewouk-name'/>
        </div>
   </div>
  );
};

export default backbox;
