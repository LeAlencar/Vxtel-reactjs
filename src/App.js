import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header'
import Routes from './routes'

function App() {
  
  return (
    <div className="App">
      <Header/>
      <Routes />
    </div>
  );
}
export default App;