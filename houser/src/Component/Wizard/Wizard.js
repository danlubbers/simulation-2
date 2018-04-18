import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
// import axios from 'axios';

import Wizard1 from './Wizard1';
import Wizard2 from './Wizard2';
import Wizard3 from './Wizard3';

export default class Wizard extends Component {
    



    render() {
        return(
            <div className="wizard"> 
                <div className="wizard-header">
                    <h1 className="add-new-text">Add New Listing</h1>
                    <Link to="/"><button className="cancelBtn">Cancel</button></Link>
                </div>
               <div>
                <Route path="/Wizard/Wizard1" component={Wizard1} />
                <Route path="/Wizard/Wizard2" component={Wizard2} />
                <Route path="/Wizard/Wizard3" component={Wizard3} />
               </div>
                

            </div>
        )
    }

}