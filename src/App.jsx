// src/App.js
import React, { useEffect } from 'react';
import CryptoTable from './components/CryptoTable';
import { startMockWebSocket, stopMockWebSocket } from './utils/mockWebSocket';
// No need to import App.css unless you have other specific styles

function App() {
  useEffect(() => {
    startMockWebSocket();
    return () => {
      stopMockWebSocket();
    };
  }, []);

  // The className "App" defined in index.css handles the container
  return (
    <div className="App">
      <h1>Real-Time Crypto Prices</h1>
      <CryptoTable />
    </div>
  );
}

export default App;