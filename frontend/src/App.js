import React from 'react';
import Header from './components/overlay/Header'
import './css/dist/main.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
  return (
    <Router>
      <React.Fragment>
      <Header />
      </React.Fragment>
    </Router>
  );
}

export default App;
