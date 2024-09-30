import './backbox.css';
// Import react-spring for animation

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Sponsers } from '../pages/Sponsers';
import { Team } from '../pages/Team';
import {About} from '../pages/About';

const Backbox = () => {
  return (  
    <BrowserRouter>
      <div className='box'>
                              
        <Routes>
          {/* Default page as Home */}
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About/>}/>
          <Route path='/sponsers' element={<Sponsers/>}/>
          <Route path='/team' element={<Team/>}/>
        
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Backbox;
