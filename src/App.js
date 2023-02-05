import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Title from './components/Title';
import Missions from './components/Missions';
import MissionCard from './components/MissionCard';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <SolarSystem />
        <Missions />
        <Title />
        <MissionCard />
      </div>
    );
  }
}

export default App;
