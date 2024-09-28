import './App.css';

import Navbar from './components/Navbar';

import Backbox from './components/backbox';




function App() {
  
  return (
    <div className='parent'>

      {/* Ensure this renders properly */}
      <Backbox />
      <Navbar />

      {/* Ensure Footer is rendered after all content */}

    </div>
  );
}

export default App;
