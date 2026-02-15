
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');

// Only attempt to mount the React application if the #root element exists.
// This allows the standalone index.html to function without crashing.
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.info("React root element not found. The page is running in standalone mode using the embedded logic in index.html.");
}
