import React from 'react';
import Header from './components/overlay/header/Header'
import SideBar from './components/overlay/sidebar/SideBar'
import BackgroundImg from './components/overlay/BackgroundImg'
import './css/dist/App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <React.Fragment>
        <BackgroundImg />
        <Header />
        <SideBar />
      </React.Fragment>
    </Router>
  );
}

export default App;
