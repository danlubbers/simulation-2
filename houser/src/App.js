import React, { Component } from 'react';
import './App.css';

// import Dashboard from './Component/Dashboard/Dashboard';
// import Wizard from './Component/Wizard/Wizard.js';
import Header from './Component/Header/Header.js';

import routes from './routes';
import {Link} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div><Header /></div>
        <Link to="/"> 
          <p>Dashboard</p>
        </Link>
        <Link to="/Wizard"> 
          <p>Wizard</p>
        </Link>

        {routes}
      </div>
    );
  }
}

export default App;
