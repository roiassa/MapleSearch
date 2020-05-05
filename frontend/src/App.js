import React from 'react';
import Header from './components/overlay/Header'
import BackgroundImg from './components/overlay/BackgroundImg'
import './css/dist/App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <React.Fragment>
        <BackgroundImg />
        <Header />
      </React.Fragment>
    </Router>
  );
}

export default App;
