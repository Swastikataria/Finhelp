// src/App.js

import React from 'react';
import DialogflowChat from './components/DialogflowChat';
import './index.css';
import logo from './logo.png'; // Ensure you have a logo.png in the src directory

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="FinHelp Logo" />
        <h1>FinMan</h1>
      </header>
      <div className="chat-container">
        <DialogflowChat />
      </div>
    </div>
  );
}

export default App;
