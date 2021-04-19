import React from 'react';
import './App.css';
import { Dashboard } from './components/dashboard';
import { Header } from './components/header'

function App() {
  return (
    <div className="App">
      <Header isSignedIn={true} />
      Yet another friday
      <Dashboard isSignedIn />
    </div>
  );
}

export default App;
