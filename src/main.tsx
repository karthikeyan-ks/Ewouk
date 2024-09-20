// src/index.js
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Optional CSS file
import { LoadingSpinner } from './pages/Loader';

// Create a basic loading component (this could be more complex if needed)

// Render the loading spinner into the #loading div
ReactDOM.render(<LoadingSpinner />, document.getElementById('loading'));

// Simulate data fetching or delay (replace with real async operation)
setTimeout(() => {
  // When data is ready, remove the loading spinner and render the main app
  ReactDOM.unmountComponentAtNode(document.getElementById('loading')); // Unmount the loading component
  ReactDOM.render(<App />, document.getElementById('root')); // Mount the main app
}, 3000); // 3-second simulation
