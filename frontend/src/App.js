import React from 'react';
import BackgroundImg from './components/overlay/BackgroundImg'
import Header from './components/overlay/header/Header'
import SideBar from './components/overlay/sidebar/SideBar'
import Pages from './components/pages/Pages'
import './css/dist/App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <Router>
      <React.Fragment>
        <BackgroundImg />
        <Header />
        <SideBar />
        <Pages />
      </React.Fragment>
    </Router>
  );
}

export default App;
