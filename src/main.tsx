// src/index.js

import App from './App';  
import './index.css'; // Optional CSS file
import  LoadingSpinner  from './pages/Loader'; // Adjust based on your export type
import { StrictMode } from 'react';
import { Root, createRoot } from 'react-dom/client';  

// Declare root variable with explicit type
let root: Root | undefined;

const container = document.getElementById('loading');

if (container) {
  root = createRoot(container);
  root.render(<LoadingSpinner />);
}

// Simulate data fetching or delay (replace with real async operation)
setTimeout(() => {
  // Unmount the loading component
  if (root) {
    root.unmount();
  }

  // Get the main app container
  const appContainer = document.getElementById('root');
  if (appContainer) {
    // When data is ready, remove the loading spinner and render the main app
    createRoot(appContainer).render(
      <StrictMode>
        <div className='gradenent-box'>
          {/* Additional content can be added here if needed */}
        </div>
        <App />
      </StrictMode>
    );
  } else {
    console.error("Root element not found");
  }
}, 1000); // 3-second simulation
