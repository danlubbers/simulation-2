import React, { Component } from 'react';
import './App.css';

// import Dashboard from './Component/Dashboard/Dashboard';
// import Wizard from './Component/Wizard/Wizard.js';
import Header from './Component/Header/Header.js';

import routes from './routes';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';



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

// Commented out cause I broke it right before 5pm
// function mapStatetoProps(state) {
//   return {state}  
// }

// export default connect(mapStatetoProps)(App);

export default App;
