// src/index.js
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Optional CSS file
import { LoadingSpinner } from './pages/Loader';
import { StrictMode } from 'react';
import { Root, createRoot } from 'react-dom/client';

// Create a basic loading component (this could be more complex if needed)

// Render the loading spinner into the #loading div
const container = document.getElementById('loading');

let root: Root;
if (container) {
  root = createRoot(container)
  console.log()
  root.render(<LoadingSpinner />);
}
// Simulate data fetching or delay (replace with real async operation)
setTimeout(() => {
  root.unmount()
  // When data is ready, remove the loading spinner and render the main app
  // Unmount the loading component
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <div className='gradenent-box'>

      </div>
      <App />
    </StrictMode>
  )
}, 3000); // 3-second simulation
